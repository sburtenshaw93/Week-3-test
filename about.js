console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted")
}

function hoverOverImageReply(event) {
	event.preventDefault();

	alert("I bet you look great in yellow!")
}
let reply = document.querySelector('#contact');
reply.addEventListener('hover', hoverOverImageReply);


document.getElementById('rubberduck').addEventListener('mouseover', hoverOverImageReply);

form.addEventListener('submit', handleSubmit);