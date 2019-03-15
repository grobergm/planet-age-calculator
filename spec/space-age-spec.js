import {SpaceAge} from './../src/index.js';

describe('Space Age Calculator', function(){
  const testDemo= new SpaceAge("1988","08","17","male","active");
  const today= new Date();
  const birthday= new Date(`${testDemo.year}-${testDemo.month}-${testDemo.day}`);
  const diff=today-birthday;
  const years=diff/1000/60/60/24/365.2422;
  const age=years.toFixed(2);
  let expected=0;
  if (testDemo.activity==="active"){
    expected+=7.2;
  }
  if (testDemo.gender==="male"){
   expected+=68.33;
 } else if (testDemo.gender==="female"){
  expected+=72.66;
  }

  it('takes in demograpnics and creates an instance of the SpaceAge constructor function',function(){
    expect(testDemo instanceof SpaceAge).toEqual(true);
  });
  it('calculates years based on birthday of instance',function(){
    expect(testDemo.calculateYears()).toEqual(age);
  });
  it('calculates life expectancy based on demographics',function(){
    expect(testDemo.lifeExpectancy()).toEqual(expected);
  });
  it('converts from earth years to the years of mercury, venus, mars, and jupiter',function(){
    const planets=["earth","mercury","venus","mars","jupiter"];
    let randYears=Math.random()*100;
    planets.forEach(function(planet){
      if (planet==="earth"){
      expect(testDemo.planetYears(planet,randYears)).toEqual(randYears);
    } else if (planet==="mercury"){
      expect(testDemo.planetYears(planet,randYears)).toEqual(randYears/=0.24);
    } else if (planet==="venus"){
      expect(testDemo.planetYears(planet,randYears)).toEqual(randYears/=0.62);
    } else if (planet==="mars"){
      expect(testDemo.planetYears(planet,randYears)).toEqual(randYears/=1.88);
    } else if (planet==="jupiter"){
      expect(testDemo.planetYears(planet,randYears)).toEqual(randYears/=11.86);
      }
    })
  });
});
