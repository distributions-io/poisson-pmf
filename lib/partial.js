'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( lambda )
*	Partially applies mean parameter `lambda` and returns a function for evaluating the probability density function (PDF) for a Poisson distribution.
*
* @param {Number} lambda - mean parameter
* @returns {Function} PDF
*/
function partial( lambda ) {

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Poisson distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
