export function domContentLoadedWrapper(callback) {
  let DOMContentFirstLoad = true;
  window.addEventListener('DOMContentLoaded', function (eventDOMContentLoaded) {
    if (eventDOMContentLoaded.isTrusted && !DOMContentFirstLoad) {
      return;
    }

    DOMContentFirstLoad = false;

    callback();
  });
}
