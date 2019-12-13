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

//showIngredient



function showRecipe(name,image){
 
  var result ="";
  result +=`
  <div class="col-6">
  <h3>${name}</h3>
  <h1 class="text-center mt-5 " id="display">Ingredients</h1>
  </div>

  <div class="col-6">
  <img src="${image}" width="150px">
  <h1 class="text-center"   id="displays">Instructions </h1> 
 
  </div>
 
  `;
 
  $('#recipe-result').html(result);
}

function showIngredient(item){
  var result ="";
  // $('#display').css('display', 'block');
  // $('#displays').css('display', 'block');
 
  item.forEach(element =>{
     result +=`    
          <tr>
              <td>${element.name}</td>
          
             <td>${element.quantity}</td>
          
              <td>${element.unit[0]}</td>
          
              <td>
                  <img src="${element.iconUrl}" width="100px"/>
              </td>
          </tr>      
      
     

     `; 
  })
  $('#table').html(result);
  
}

function showInstructions(step) {
  var result ="";
 var cutStep = step.split("<step>");
 console.log(cutStep)

 for(let i=1; i<cutStep.length;i++){
      result +=`
      <h1 style="color:blue">Step ${i} :</h1>
      <p>${cutStep[i]}</p>
      `;

 }
  $('#step').html(result);
}