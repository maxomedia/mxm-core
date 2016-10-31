/**
 * Caches
 */
var transitionend_cache;

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

	// Return a fallback for browsers who don't know transitions
	return 'transitionEndFallback';
}
