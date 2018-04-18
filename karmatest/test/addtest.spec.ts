/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../src/addtest.ts" />

module test {
	"use strict";

	var global: any = {};
	global.diva = global.diva || {};
	global.diva.Plus = require('../src/addtest.js');

	var plus= new diva.Plus();
	describe('test: add', () => {
		it('add two to one', () => {
			expect(3).toEqual(plus.add(1, 2));
		});

		it("add three to one, failed", () => {
			expect(4).toEqual(plus.add(1, 4));
		});
	});
	
}
