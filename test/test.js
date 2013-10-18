/*
 * test.js
 */

var empty = require('../lib/index.js'),
    expect = require('expect.js');

onload = function () {
    describe('Testing some stuff', function () {
        describe('First test', function () {
            it('empty must be an function', function () {
                expect(empty).to.be.an('function');
            });
            it('empty must return a the string `this is module empty`', function () {
                expect(empty()).to.be.equal("this is module empty");
            });
        });
    });

    setTimeout(function () {
        //mocha.checkLeaks();
        mocha.run();
    }, 1000);
};
