$(document).ready(function() {
    requestApi();
});

var requestApi =()=>{
<<<<<<< HEAD
    $.getJSON(getUrl() ,function(data) {
        data.recipes.forEach(element => {
            getIngredients(element.ingredients);
           
        });
        
    })
   
}
//get url api

var getUrl = () =>{
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

 $('#select').on('change',function(){
   var selectOnlyOne = $('#select option:selected').val();
      switch(selectOnlyOne){
        case '1':
            getAvocado();
            break;
        case '2':
            getFrench();
            break;
        }
})

//get ingredients
var getIngredients = (ing) =>{
    ing.forEach(item => {
        getDataAvocado(item);
    })  
}

// get data from Avocado
var getDataAvocado = (data) =>{
    var getAvocado = "";
    getAvocado +=`
    <tr>
        <td><img src="${data.iconUrl}" width="100px"></td>
        <td>${data.name}</td>
        <td>${data.unit}</td>
        <td>${data.quantity}</td>
    </tr>
    `;
    printOut(getAvocado);
}


// Get food
var getAvocado = () => {
     getDataAvocado ();
}

var getFrench = () => {
    var getFrench = "Avocado";
    printOut(getFrench);
}



// print out to Html

var printOut = ( out ) =>{
    $('#ingrediant').append(out);
=======
    var url =  "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    var image= "";
    $.getJSON(url ,function(data) {
        data.forEach(element => {
            for(var i = 0 ; i < element.length ; i++){
                if( element[i] == 0){
                    image +=` 
                     <img src="${element .iconUrl}"  />;
                    `;
                }
            }
            
        });
       
    })
    $('#image').html(image);
}



// get data from 
$('#select').on('change',function(){
   var selectOnlyOne = $('#select option:selected').val();
      switch(selectOnlyOne){
        case '1':
            getChocolate();
            break;
        case '2':
            getAvocado();
            break;
        }
   })

// Get food
var getChocolate = () => {
    var getChocolate = " hello";
    printOut(getChocolate);
}
var getAvocado = () => {
    var getAvocado = "Avocado";
    printOut(getAvocado );
}

var printOut =( out)=>{
    $('#display').html(out);
>>>>>>> 5ef8123a7e22b646ec290a6b1cf92ae6773b4159
}