const assert = require('chai').assert;
const sortNumbers = require('../algorithm')

describe('sort functionality', function(){
  context('sort function', function(){
    it('it can sort two numbers', function(){
      assert.deepEqual(sortNumbers([3,2]), [2,3])
    })
  })
})
