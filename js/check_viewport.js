/**
 * Check if window width is below mobile threshhold
 * @return {Boolean} True if mobile, false if above or equal 768
 */
export const isMobileView = function () {
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
export const getViewport = function () {
	var width = window.innerWidth;

	if(width < desktop) device = 'desktop';
	if(width < laptop) device = 'laptop';
	if(width < tablet) device = 'tablet';
	if(width < mobile) device = 'mobile';

	return device;
};
