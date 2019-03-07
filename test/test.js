const assert = require('chai').assert;
const sortNumbers = require('../algorithm')

describe('sort functionality', function(){
  context('bubble sort function', function(){
    it('can sort two numbers', function(){
      assert.deepEqual(sortNumbers([3,2]), [2,3])
    })
    it('can sort three numbers', function(){
      assert.deepEqual(sortNumbers([3,1,2]), [1,2,3])
    })
    it('can sort four numbers', function(){
      assert.deepEqual(sortNumbers([3,4,2,1]), [1,2,3,4])
    })
    it('can sort ten numbers', function(){
      assert.deepEqual(sortNumbers([43,12,56,18,1,32,7,92,10,4]), [1,4,7,10,12,18,32,43,56,92])
    })
  })
})
