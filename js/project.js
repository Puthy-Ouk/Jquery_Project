
$(document).ready( () =>{

    $('#select').on('change',()=> {
       var select = $('#select').val();
       choose(select);
    })

    // get data by json

    
});

var choose = (data)=>{
    switch(parseInt(data)){
        case 1:
            getAvocado();
            break;
        case 2:
            getFrench(); 
            break;
    }
}

//get apply

var getAvocado = () =>{
    $('#person').css('display', 'block');

    var url= "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    $.getJSON(url,function(data){
        var avocado="";
     
        data.recipes.forEach(element => {
              if(element.id==0){
                  avocado +=`
                   <tr>
                    <td>${element.name}</td>
                    <td>
                        <img src="${element.iconUrl}" width="200px"/>
                   </td>
                    </tr>
                  `;
              }
            
            })
            $('#nameFood').html(avocado);
      

           
            // var stepAvocado = "";
            var avocado="";
            data.recipes.forEach(element => {
                element.ingredients.forEach(item =>{
                  if(element.id==0){   
                  avocado +=`
                       <tr>
                        <td>${item.name}</td>
                        
                        <td>${item.quantity}</td>
                        
                        <td>${item.unit[0]}</td>
                        
                        <td>
                        <img src="${item.iconUrl}" width="100px"/>
                        </td>
                        
                        </tr>
                 
                        
                      `;
                    
                  }
                })
                $('#table').html(avocado);
                // $('#step').html(stepAvocado);
        });
    })
}

//get recipes




var getFrench = () =>{
  $('#person').css('display', 'block');
    var url= "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    $.getJSON(url,function(data){
        var french="";
        data.recipes.forEach(element => {
              if(element.id==1){
                french +=`
                   <tr>
                    <td>${element.name}</td>
                    <td>
                        <img src="${element.iconUrl}" width="150px"/>
                   </td>
                    </tr>
                  `;
                
              }
            })
            $('#nameFood').html(french);
          
   

            var french="";
            data.recipes.forEach(element => {
                element.ingredients.forEach(item =>{
                  if(element.id==1){
                    french +=`
                       <tr>
                        <td>${item.name}</td>
                        
                        <td>${item.quantity}</td>
                        
                        <td>${item.unit[1]}</td>
                        
                        <td>
                        <img src="${item.iconUrl}" width="100px"/>
                        </td>
                        
                        </tr>
                      `;
                  }
                })
                $('#table').html(french);   
            });
       

    }) 
    
}



var printOut =(out) =>{
    $('#table').append(out);
}





//get people

var getButton = () =>{
  $('#person').on()
} 




// var person = "";
// var getPeople =()=>{
// person+=`
// <div class="row">
//     <div class="col-3">Number of persons</div>
//     <div class="col-6" id="numberPerson">
//     <div class="input-group mb-3">
//     <div class="input-group-append">
//     <button class="btn btn-danger" type="button" id="minus">&minus;</button>
// </div>
// <input type="text" class="form-control" id="sum" value="0" disabled>

// <div class="input-group-append">
//     <button class="btn btn-success" type="button" id="plus">&plus;</button>
// </div>
// </div>
// <div class="col-3"></div>
// </div>
// `;
// $('#person').html(person);
// }