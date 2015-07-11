'use strict';

// MODULES //

var factorialln = require( 'compute-factorialln' ),
	isNonNegativeInteger = require( 'validate.io-nonnegative-integer');


// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log;


// PDF //

/**
* FUNCTION: pdf( x, lambda )
*	Evaluates the probability density function (PDF) for a Poisson distribution with mean parameter `lambda` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} lambda - mean parameter
* @returns {Number} evaluated PDF
*/
function pdf( x, lambda ) {
	var lnl;
	if ( isNonNegativeInteger( x ) ) {
		lnl = x * ln( lambda ) - lambda - factorialln( x );
		return exp( lnl );
	} else {
		return 0;
	}
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
