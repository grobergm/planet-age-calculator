export class SpaceAge {
  constructor(birthday,gender,activity){
    this.birthday=birthday;
    this.gender=gender;
    this.activity=activity;
  }

  calculateAge(){
    const today= new Date();
    const birthday= new Date(this.birthday);
    const diff=today-birthday;
    const years=diff/1000/60/60/24/365.2422;
    return years.toFixed(2);
  }

  lifeExpectancy(){
    let expected=0;
    if (this.activity==="active"){
      expected+=7.2;
    }
    if (this.gender==="male"){
      expected+=68.33;
    } else if (this.gender==="female"){
      expected+=72.66;
    }
    return expected;
  }

  planetYears(planet,years){
    if (planet==="earth"){
      return years;
    } else if (planet==="mercury"){
      return years/0.24;
    } else if (planet==="venus"){
      return years/0.62;
    } else if (planet==="mars"){
      return years/1.88;
    } else if (planet==="jupiter"){
      return years/11.86;
    }
  }

  lifePlanetExpect(planet){
    const age=this.calculateAge();
    const expect=this.lifeExpectancy();
    return this.planetYears(planet,expect)-this.planetYears(planet,age);
  }

  returnStatement(planet){
    const planetDiff=this.lifePlanetExpect(planet);
    if (planetDiff>=0){
      return `You have ${planetDiff} years left to live on ${planet}`;
    } else if(planetDiff<0){
      return `You have lived ${-planetDiff} more years than we expected on ${planet}`;
    }
  }

}
