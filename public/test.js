async function regist() {
  console.log("in");
    const user=
    {

         name : document.getElementById("name").value,
         address: document.getElementById("address").value,
         phone : parseInt(document.getElementById("phone").value),
         food  : document.getElementById("food").value,
    
  
     }
     const direct = await fetch
     (
         './addkoshari',
     {
     method: 'POST',
       headers: { "Content-Type": "application/json" },
     body:JSON.stringify(user), 
     } 
     )      
         
             

    console.log(user);
  



}