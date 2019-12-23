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
      // sumPerson();
      ;
    })
    
       
    //get minus
  $('#minus').on('click', function () {
    decreaseNumber();
    var guest = $('#person').val();
 
    var recipe = $('#recipe').val();
     updateRecipe(recipe,guest);
  });
 //get plus
  $('#plus').on('click', function () {
    increaseNumber();
    var guest = $('#person').val();
    var recipe = $('#recipe').val();
     updateRecipe(recipe,guest);
  });


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


var numberDefault =1;
//get recipe
function getRecipe(recipeId){

  allData.forEach(item =>{
      if(item.id == recipeId){
          //show recipe(),
          showRecipe(item.name,item.iconUrl);
          //showIngredient()
          showIngredient(item.ingredients);
          //showStep(), 
          showInstructions(item.instructions);
          $('#person').val(item.nbGuests);
          guestDefault = $('#person').val();
       
      }  
  });
}
// updateRecipe
function updateRecipe(recipeId,member){
  allData.forEach(item =>{
      if(item.id == recipeId){  
          showRecipe(item.name,item.iconUrl);
          updateIngredient(item.ingredients,member);
          showInstructions(item.instructions);
          $('#person').val(member);
        
      }  
  });
}

//updateIngredient
var updateIngredient = (ing,guest) => {
  var ingredient = "";
  ing.forEach(element => {
     var add = element.quantity * parseInt(guest)/ guestDefault;
     ingredient += `
     <tr>
         <td><img src = "${element.iconUrl}" width = "80px"></td>
         <td><span >${ add }</span></td>
         <td >${element.unit[0]}</td>
         <td >${element.name}</td>
     </tr>
   `
  })
  $('#table').html(ingredient);
} 


//showIngredient
function showRecipe(name,image){
  $('#ingredients').css('display','block');
  $('#instructions').css('display','block');
  $('#display').css('display', 'block');
  $('footer').css('display','block');

  var result ="";
  result +=`
  <div class="col-sm-12 col-md-6">
  <h2  style="margin-left: 250px;">${name}</h2>
  
  </div>
  <div class="col-sm-12 col-md-6">
  <img src="${image}" width="200px" style="border-radius:60%;">
 
  </div>
  `;
  $('#recipe-result').html(result);
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
          <td style="img-thumbnail">${element.unit[0]}</td>
          <td>${element.name}</td>  
          </tr>      
     `; 
  })
  $('#table').html(result);
  $('#center').css('display','block');
}




function showInstructions(step) {
  var result ="";
  $('#step').css('display','block');
 var cutStep = step.split("<step>");

 for(let i=1; i<cutStep.length;i++){
      result +=`
      <h4 style="color:blue">Step : ${i} </h4>
      <p>${cutStep[i]}</p>
      `;
 }
  $('#step').html(result);
}


function increaseNumber() {
  var member = $('#person').val();
  var guest = parseInt(member) + 1;
  if (guest <= 15) {
      $('#person').val(guest);
  }

}

function decreaseNumber() {
  var member = $('#person').val();
  var guest = parseInt(member) - 1;
  if (guest >= 1) {
      $('#person').val(guest);
  }
}





