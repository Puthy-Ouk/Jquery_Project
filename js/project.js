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
    var url= "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    $.getJSON(url,function(data){
        var avocado="";
        data.recipes.forEach(element => {

           
              if(element.id==0){
                  avocado +=`
                   <tr>
                    <td>${element.name}</td>
                    <td>
                        <img src="${element.iconUrl}" width="150px"/>
                   </td>
                    </tr>
                   
                  `;
                 
              }
            })
            $('#nameFood').html(avocado);
         

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
        });
    })
}






var getFrench = () =>{
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

//
