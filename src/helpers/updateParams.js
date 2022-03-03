const updateParams = (name, value, form = false) => {
  const currUrl = new URL(window.location.href);
  let params = new URLSearchParams(currUrl.search);
  params.delete(name);
  params.append(name, value);
  const query = params.toString();
  let pathName = currUrl.pathname;
  if (form) {
    pathName = form.getAttribute('action');
  }
  window.location.href = window.location.origin + pathName + (query != '' ? '?' + query : '');
};

export default updateParams;
