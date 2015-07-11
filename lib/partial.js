'use strict';

// MODULES //

var factorialln = require( 'compute-factorialln' ),
	isNonNegativeInteger = require( 'validate.io-nonnegative-integer');


// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log;


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
		var lnl;
		if ( isNonNegativeInteger( x ) ) {
			lnl = x * ln( lambda ) - lambda - factorialln( x );
			return exp( lnl );
		} else {
			return 0;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
