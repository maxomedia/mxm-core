var isMagicMouse = false;
// detect magic mouse
isMagicMouse = /(macintosh)/i.test(navigator.userAgent);
//isMagicMouse = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isMagicMouse) {
	document.body.classList.add('isMagicMouse');
}
