//your JS code here. If required.
let ButtonVal = document.getElementById('enterBtn');
let statusVal = document.getElementById('status');

function changeStatus() {
	statusVal.innerHTML = '<h1>Entered Metaverse</h1>';
}

ButtonVal.addEventListener('click',changeStatus);