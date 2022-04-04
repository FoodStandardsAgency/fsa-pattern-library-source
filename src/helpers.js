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

export function speak(text) {
  const el = document.createElement('div');
  const id = 'speak-' + Date.now();
  el.setAttribute('id', id);
  el.setAttribute('aria-live', 'polite');
  el.classList.add('visually-hidden');
  document.body.appendChild(el);

  window.setTimeout(function () {
    document.getElementById(id).innerHTML = text;
  }, 100);

  window.setTimeout(function () {
    document.body.removeChild(document.getElementById(id));
  }, 1000);
}
