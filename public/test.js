
async function regist() {
    const user=
    {

         name : document.getElementById("name").value,
         address: document.getElementById("address").value,
         phone : parseInt(document.getElementById("phone").value),
         food  : document.getElementById("food").value,
    
  
     }
    console.log(user);
 const response = await fetch
        (
            'http://localhost:5000/adduser',
        {
        method: 'POST',
          headers: { "Content-Type": "application/json" },
        body:JSON.stringify(user), 
        } 
        )
  

}