/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
import { diva } from '../src/addtest';

module test {
	"use strict";

	//let a: number = "aaa";
	let plus: diva.Plus = new diva.Plus();
	describe('test: add', () => {
		it('add two to one', () => {
			expect(3).toEqual(plus.add(1, 2));
		});

		it("add three to one, failed", () => {
			expect(4).toEqual(plus.add(1, 3));
		});
	});
}

//export module diva {
//}