function validate_Form() {
    // Validate input fields
    var name = document.forms["Form"]["name"].value;
    var address = document.forms["Form"]["address"].value;
    var phone = document.forms["Form"]["phone"].value;
    var selectedFood = document.forms["Form"]["food"].value;
    var selected_Extras = document.querySelectorAll('input[name="EXTRAS[]"]:checked');
    
    if (name == "") {
      alert(" enter ur name.");
      return false; 
    }
    
    if (address == "") {
      alert(" enter ur address.");
      return false;
    }
    
    if (phone == "") {
      alert("Please enter ur phone number.");
      return false;
    }
    
    if (selectedFood == "") {
      alert(" select a food item.");
      return false;
    }
    
    if (selected_Extras.length < 1) {
      alert(" select at least one Extras.");
      return false;
    }
  }
  
  function display_Total() {
    var foodPrice = document.forms["orderForm"]["food"].value;
    var selected_Extras = document.querySelectorAll('input[name="EXTRAS :"]:checked');
    var totalPrice = parseInt(foodPrice);
    
    
    selected_Extras.forEach(function(EXTRAS) {

      
      totalPrice += parseInt(EXTRAS.value);
    });
    
    document.getElementById("total").innerHTML = "Total Price: LE." + totalPrice;
    
  }
  


