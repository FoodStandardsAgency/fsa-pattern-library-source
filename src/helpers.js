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

export function generateHash() {
  const hash = () =>
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 6);

  return `uniq-${hash()}${hash()}`;
}
