export default function () {
function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}


  document.addEventListener("DOMContentLoaded",function() {
    console.log('foo');
    console.log(document.querySelectorAll('iframe'));
    const foo = document.querySelector('.button');
    foo.append('Some js happened');
  });
}
