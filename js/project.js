function getUrl(){
  var url ="https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
  return url;
}
// get data

$(document).ready(function(){
  requestApi();
  $('#recipe').on('change',() =>{
      var recipes = $('#recipe').val();
      getRecipe(recipes);
      sumPerson();
      //showPerson
      showPerson();
  })
 
});

function requestApi () {
  $.ajax({
      dataType:'json',
      url:getUrl(),
      success:(data) =>chooseRecipe(data.recipes),
      error:() =>console.log("Cannot get data"),
  })
}

var allData =[];
function chooseRecipe(recipes){
  allData =recipes;
   var option=""; 
  recipes.forEach(element => {
      option +=`
      <option value="${element.id}">${element.name}</option>;
      `;
  });
  $('#recipe').append(option);
}


//get recipe
function getRecipe(recipeId){
  allData.forEach(item =>{
      if(item.id == recipeId){
          // console.log(item.instructions)
          //show recipe(),
          showRecipe(item.name,item.iconUrl);
          
          //showIngredient()
          showIngredient(item.ingredients);
          //showStep(), 
          showInstructions(item.instructions);

         
      }
  });
}

//Getperson



//showIngredient
function showRecipe(name,image){
  var result ="";
  $('#display').css('display', 'block');
  result +=`
  <div class="col-6">
  <h2>${name}</h2>
  <h1 class="text-center mt-5 " id="display">Ingredients</h1>
  </div>
  <div class="col-6">
  <img src="${image}" width="150px">
  <h1 class="text-center"   id="displays">Instructions </h1> 
 
  </div>
  `;
 
  $('#recipe-result').html(result);
}

function showPerson(person){
  var result ="";
  result +=`
    value="${person}"  ;
  `;
  $('#sum').html(result);
}

function showIngredient(item){
  var result ="";
  item.forEach(element =>{
     result +=`    
          <tr>
          <td>
            <img src="${element.iconUrl}" width="80px"/>        
          </td>
          <td>${element.quantity}</td>
          <td>${element.unit[0]}</td>
          <td>${element.name}</td>
             
          </tr>      
     `; 
  })
  $('#table').html(result);
  $('#center').css('display','block');
  
}

function showInstructions(step) {

  var result ="";
 var cutStep = step.split("<step>");

 for(let i=1; i<cutStep.length;i++){
      result +=`
      <h2 style="color:blue">Step ${i} :</h2>
      <p>${cutStep[i]}</p>
      `;

 }
  $('#step').html(result);
}



// sum person
function sumPerson (){
  $('#plus').on('click',function(){
    var plus = $('#sum').val();
    console.log(plus);
     addNumber(plus);
 });
 
 function addNumber(num) {
  var number = parseInt(num) + 1;
  if( number <=15){
      $('#sum').val(number);
      computer(number);
  }
 }

 $('#minus').on('click',function(){
  var minus = $('#sum').val();
  minusNumber(minus);
 });

 function minusNumber(num) {
  var number = parseInt(num) - 1;
  if(number >= 0 ){
      $('#sum').val(number);
      computer(number);
  }
 }

//  function computer(number){
//      var result = number*5;
//      if(number == 0){
//          progressBar(result);
//      }else{
//          progressBar(result+25);
//      }

//       $('#result').html(result);
//  }

//  function progressBar (pro){
//   $("#progress").width(pro + "%");
//   $("#progress").html(pro + "%");
//  }

}