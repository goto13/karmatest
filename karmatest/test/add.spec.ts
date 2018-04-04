/// <reference path="../node_modules/@types/jasmine/index.d.ts" />

import { add } from '../src/add';
//import * as chai from 'chai';

describe('test: add', () => {
	//const expect = chai.expect;

	it('add two to one', () => {
		expect(3).toEqual(add(1, 2));
	});

	it("add three to one, failed", () => {
		expect(4).toEqual(add(1, 3));
	});
});