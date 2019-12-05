$(document).ready(function() {
    requestApi();
});

var requestApi =()=>{
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
}