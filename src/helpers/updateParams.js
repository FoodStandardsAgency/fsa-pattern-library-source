const updateParams = (name, value) => {
  const currUrl = new URL(window.location.href);
  let params = new URLSearchParams(currUrl.search);
  params.delete(name);
  params.append(name, value);
  const query = params.toString();
  let pathName = currUrl.pathname;
  window.location.href = window.location.origin + pathName + (query != '' ? '?' + query : '');
};

export default updateParams;
