/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	pdf = require( './../lib/typedarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array pdf', function tests() {

	var lambda = 3;

	it( 'should export a function', function test() {
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should evaluate the Poisson pdf', function test() {
		var data, actual, expected, i;

		data = new Float64Array([
			-1,
			0,
			0.5,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			8,
			10
		]);
		actual = new Float64Array( data.length );

		actual = pdf( actual, data, lambda );

		// Evaluated in R:
		expected = new Float64Array([
			0,
			0.049787068,
			0,
			0.14936121,
			0.22404181,
			0.22404181,
			0.16803136,
			0.10081881,
			0.050409407,
			0.021604031,
			0.0081015118,
			0.0081015118,
			0.00081015118
		]);

		for ( i = 0; i < actual.length; i++ ) {
			assert.closeTo( actual[ i ], expected[ i ], 1e-7 );
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( pdf( new Int8Array(), new Int8Array(), lambda ), new Int8Array() );
	});

});
