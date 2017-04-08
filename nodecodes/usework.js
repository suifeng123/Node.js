var worker = new Worker('worker.js');
worker.onmessage = function(event) {
	document.getElementById('result').textContent = event.data;
};
