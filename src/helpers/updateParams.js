export default function (name, value) {
  const currUrl = new URL(window.location.href);
  let params = new URLSearchParams(currUrl.search);
  params.delete(name);
  params.append(name, value);
  const query = params.toString();
  window.location.href = window.location.origin + '?' + query;
}
