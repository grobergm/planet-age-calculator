import './styles.css';
import {SpaceAge} from './spaceAge.js';
import $ from 'jQuery';

$(document).ready(function(){
  $('#ageForm').submit(function(event){
    event.preventDefault();
    let birthday=$('#birthday').val();
    let gender=$('#gender').val();
    let activity=$('#activity').val();
    let newSpaceAge= new SpaceAge(birthday,gender,activity);
    $("#result p").hide();
    $("#result").append(`<p>You are ${newSpaceAge.calculateAge()} years old.</p><p>${newSpaceAge.returnStatement("mercury")}</p><p>${newSpaceAge.returnStatement("venus")}</p><p>${newSpaceAge.returnStatement("earth")}</p><p>${newSpaceAge.returnStatement("mars")}</p><p>${newSpaceAge.returnStatement("jupiter")}</p>`);
  });
});
