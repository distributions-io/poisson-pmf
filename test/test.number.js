/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	pdf = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number pdf', function tests() {

	var lambda = 1;

	it( 'should export a function', function test() {
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should evaluate the Poisson probability density function', function test() {
		assert.closeTo( pdf( 1, lambda ),0.36787944, 1e-4 );
		assert.closeTo( pdf( 2, lambda ), 0.18393972, 1e-4 );
		assert.closeTo( pdf( 3, lambda ),0.06131324, 1e-4 );
	});

});
