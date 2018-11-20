window.onload=function(){
    var countrysearch= document.getElementById("country").value;
    var lookupbtn=document.getElementById("lookup");
    var request;
    var result=document.getElementById("result");
   
    if (countrysearch==''){
        lookupbtn.addEventListener("click",function(){
            
            request = new XMLHttpRequest();
            var countryURL= 'world.php';
            request.onreadystatechange=function(){
                if (request.readyState===request.DONE){
                    if (request.status===200){
                        var response=request.responseText;
                        console.log(response);
                        result.innerHTML=response;
                    }
                    if(request.status===404){
                        console.log("Result not found.");
                        alert('NOT FOUND');
                    }
                }
           
            };
            request.open('GET',countryURL,true);
            request.send();
        
        
    
        });
    } 
    
        
}