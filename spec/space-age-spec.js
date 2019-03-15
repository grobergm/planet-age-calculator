import {SpaceAge} from './../src/index.js';

describe('Space Age Calculator', function(){
  const testDemo= new SpaceAge("1988","08","17","male","active");
  it('takes in demograpnics and creates an instance of the SpaceAge constructor function',function(){
    expect(testDemo instanceof SpaceAge).toEqual(true);
  });
  it('calculates years based on birthday of instance',function(){
    const today= new Date();
    const birthday= new Date(`${testDemo.year}-${testDemo.month}-${testDemo.day}`);
    const diff=today-birthday;
    const years=diff/1000/60/60/24/365.2422;
    const result=years.toFixed(2);
    expect(testDemo.calculateYears()).toEqual(result);
  });
});
