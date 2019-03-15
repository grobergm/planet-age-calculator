import './styles.css';
import {SpaceAge} from './spaceAge.js';
import $ from 'jQuery';

$(document).ready(function(){
  $('#ageForm').submit(function(event){
    event.preventDefault();
    let birthday=$('#birthday').val();
    let gender=$('#gender').val();
    let activity=$('#activity').val();
    console.log(birthday+gender+activity);
  });
});
