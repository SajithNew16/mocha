const assert = require('chai').assert;
const app = require('../app');
let chaiHttp = require('chai-http');
let chai = require('chai');
let should = chai.should();
// const addNumbers = require('../app').addNumbers;

describe('App', function () {

    describe('sayHello()', function () {
        it('sayHello should return hello', function () {
            let result = app.sayHello();
            assert.equal(result, 'hello');
        });

        it('sayhello should return type string', function () {
            let result = app.sayHello();
            assert.typeOf(result, 'string');
        });
    });

    describe('addNumbers()', function () {
        it('addNumbers should be above 5', function () {
            let result = app.addNumbers(2, 3);
            assert.isAbove(result, 5);
        });  
    });

});