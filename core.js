/**
 * Caches
 */
var ua = navigator.userAgent.toLowerCase();
var transitionend_cache;
var isTouch_cache;

/**
 * Get the correctly prefixed transitionend event string
 * @return {string} Transitionend event name
 */
exports.getTransitionEndString = function (){
	var i,
	    undefined,
	    el = document.createElement('div'),
	    transitions = {
	        'transition':'transitionend',
	        'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
	        'MozTransition':'transitionend',
	        'WebkitTransition':'webkitTransitionEnd'
	    };

	for (i in transitions) {
	    if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
	    	transitionend_cache = transitions[i];
	        return transitions[i];
	    }
	}
}

/**
 * Check for touch events (detects IE Tablet with Windows RT)
 * @return {Boolean} Is the website displayed on a touch enabled screen?
 */
exports.isTouch = function () {
	isTouch_cache = 'ontouchstart' in window || ('msMaxTouchPoints' in navigator && ua.indexOf(' arm;') >= 0);
	return isTouch_cache;
}

/**
 * Check if window width is below mobile threshhold
 * @return {Boolean} True if mobile, false if above or equal 768
 */
exports.isMobileView = function () {
	return window.innerWidth < 768;
}

var device = 'large';			// 1920 <=      px
var desktop = 1920;				// 1200 -  1919 px
var laptop = 1200; 				//  992 -  1199 px
var tablet = 992;				//  768 -   991 px
var mobile = 768;				//    0 -   767 px

/**
 * Get a string representing current viewport width
 * @return {string} Viewport width category
 */
exports.getViewport = function () {
	var width = window.innerWidth;

	if(width < desktop) device = 'desktop';
	if(width < laptop) device = 'laptop';
	if(width < tablet) device = 'tablet';
	if(width < mobile) device = 'mobile';

	return device;
};