import {SpaceAge} from './../src/index.js';
const today= new Date();

function randomSample(){
  const randomYear=today.getFullYear()-Math.floor(Math.random()*80);
  const randomMonth=Math.ceil(Math.random()*12);
  const randomDay=Math.ceil(Math.random()*28);
  const strYear=randomYear.toString();
  let strMonth;
  if(randomMonth<10){
    strMonth="0"+randomMonth.toString();
  } else{
    strMonth=randomMonth.toString();
  }
  const strDay=randomDay.toString();
  const genderArray=["male","female"];
  const activeArray=["inactive","active"];
  const randGender=genderArray[Math.round(Math.random())];
  const randActivity=activeArray[Math.round(Math.random())];
  const sample= new SpaceAge(strYear,strMonth,strDay,randGender,randActivity);
  console.log(sample);
  return sample;
}

describe('Space Age Calculator', function(){
  const testDemo= randomSample();
  const birthday= new Date(`${testDemo.year}-${testDemo.month}-${testDemo.day}`);
  const diff=today-birthday;
  const years=diff/1000/60/60/24/365.2422;
  const age=years.toFixed(2);
  const planets=["earth","mercury","venus","mars","jupiter"];
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
    expect(testDemo.calculateAge()).toEqual(age);
  });
  it('calculates life expectancy based on demographics',function(){
    expect(testDemo.lifeExpectancy()).toEqual(expected);
  });
  it('converts from earth years to the years of mercury, venus, mars, and jupiter',function(){
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
    });
  });
  it('predicts life expectancy based on planet',function(){
    const calcAge=testDemo.calculateAge();
    const expectancy=testDemo.lifeExpectancy();
    planets.forEach(function(planet){
      if (planet==="earth"){
      expect(testDemo.lifePlanetExpect(planet)).toEqual(expectancy-calcAge);
    } else if (planet==="mercury"){
      expect(testDemo.lifePlanetExpect(planet)).toEqual(expectancy/0.24-calcAge/0.24);
    } else if (planet==="venus"){
      expect(testDemo.lifePlanetExpect(planet)).toEqual(expectancy/0.62-calcAge/0.62);
    } else if (planet==="mars"){
      expect(testDemo.lifePlanetExpect(planet)).toEqual(expectancy/1.88-calcAge/1.88);
    } else if (planet==="jupiter"){
      expect(testDemo.lifePlanetExpect(planet)).toEqual(expectancy/11.86-calcAge/11.86);
      }
    });
  });
});
