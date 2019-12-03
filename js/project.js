$(document).ready(function() {
    var url="https://raw.githubusercontent.com/radytrainer/test-api/master/test.json" ;
    $.getJSON(url,function(data){

        var result = "";
        data.recipes.forEach(element => {
            result +=`

                 <div class="col-6">
                    <h1>${element.name}</h1>
                 </div>

                <div class="col-6">
                   <img src="${element.iconUrl}" class=" img-fluid">
                </div
            `;
        });
        error: () => console.error("error"),
        $('#image').append(result);


        var chooseOnlyOne = (myChoose) =>{
            var onlyNumber = parseInt(myChoose);
            switch(onlyNumber){
                case 1:
                   console.log("you choose cake");
                   break;
                case 2:
                    console.log("you are choose French ");
                    break;
            }
        }
    

    })
})

//  { <div class="image">
// <div class="card-header">
//    <img src="${element.iconUrl}" class=" img-fluid">
// </div>

// <div class="card-body">

// </div>
// <div class="card-footer">
//  var str= ${element.instructions};


// </div>
// </div> }