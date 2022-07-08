import cssVars from 'css-vars-ponyfill';
import componentImports from './imports';
import { domContentLoadedWrapper } from '@components/helpers';

// Fixes css vars on legacy browsers (i.e. IE11) - this is required for Storybook
function runCssVars() {
  // Check whether the browser has native support for css variables
  const hasNativeSupport = ((window || {}).CSS || {}).supports && window.CSS.supports('(--a: 0)');
  // Check whether this is running in Storybook
  if (!hasNativeSupport && window.isStorybook) {
    cssVars({
      silent: true,
      preserveVars: false,
      onlyLegacy: false,
    });
  }
}

function callback() {
  componentImports();
  runCssVars();
}

if (document.readyState === 'loading') {
  domContentLoadedWrapper(callback);
} else {
  componentImports();
  window.componentImports = componentImports;
}
