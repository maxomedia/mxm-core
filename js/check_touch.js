var isTouch_cache;
var ua = navigator.userAgent.toLowerCase();
/**
 * Check for touch events (detects IE Tablet with Windows RT)
 * @return {Boolean} Is the website displayed on a touch enabled screen?
 */
exports.isTouch = function () {
	isTouch_cache = 'ontouchstart' in window || ('msMaxTouchPoints' in navigator && ua.indexOf(' arm;') >= 0);
	return isTouch_cache;
}
