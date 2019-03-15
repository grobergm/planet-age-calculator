import './styles.css';

export class SpaceAge {
  constructor(year,month,day,gender,activity){
  this.year=year;
  this.month=month;
  this.day=day;
  this.gender=gender;
  this.activity=activity;
  }

  calculateYears(){
  const today= new Date();
  const birthday= new Date(`${this.year}-${this.month}-${this.day}`);
  const diff=today-birthday;
  const years=diff/1000/60/60/24/365.2422;
  return years.toFixed(2);
  }

  lifeExpectancy(){
  const age=this.calculateYears();
  const femaleAve= 72.66;
  const maleAve= 68.33;
  const active= 7.2;
  let expected=0;
  if (this.activity==="active"){
    expected+=active;
  }
  if (this.gender==="male"){
   expected+=maleAve;
  } else if (this.gender==="female"){
  expected+=femaleAve;
  }
  return expected-age;
  }

  planetYears(planet,years){
    if (planet==="mercury"){
      return years/0.24;
    } else if (planet==="venus"){
      return years/0.62;
    } else if (planet==="mars"){
      return years/1.88;
    } else if (planet==="jupiter"){
      return years/11.86;
    }
  }
}
