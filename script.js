var accordion = document.querySelector(".info");
accordion.addEventListener('click', change);

function change(event) {
	var targ = event.target;
	if (targ.tagName !== 'H3') return;
	if (targ.classList.contains('select')) {
		hideAll();
	} else {
		hideAll();
		targ.classList.add('select');
		showText(targ.nextElementSibling);
	}
}

function hideAll() {
	var h3El = accordion.querySelectorAll('h3');
	var divEl = accordion.querySelectorAll('div');
	for (var i = 0; i < h3El.length; i++) {
		h3El[i].classList.remove('select');
	}
	for (var i = 0; i < divEl.length; i++) {
		divEl[i].style.height = '0';
	}
}

function showText(textEl) {
	textEl.style.height = textEl.scrollHeight + 'px';
}
