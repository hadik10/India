$('#btnLoadData').click(function() {
    console.log("clicked");
    
    let jsonURL = "demo.json";
    //assigns jsonURl variable as the info in a local file

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {

            //goes through each element in the demo json file and prints it to the console
            $('input[type=radio]').each(function () {
                if (data.dressType === $(this).val())
                {
                  $(this).prop('checked', true)
                    console.log($(this));
               }
            });

        
            $.each(data, function (key, val) {
                //step through results
                console.log(key, val);
                //get each data item
                //put it in the right place
                $(`#${key}`).val(val);
                
            });
        }
    });
});


  
    $("#submitButton").click(function (){
  
        // handle it if input is blank

        //Also fetches names and email straight from form
  
        let firstName = $("#first-name").val();
        let lastName = $("#last-name").val();
        let customerEmail = $("#email").val();
        let greetMessage = greetCustomer(firstName, lastName, customerEmail); 
  
  
        console.log('submitted form');
        console.log('displayed message', greetCustomer(firstName, lastName, customerEmail));
        
  
        $("#greetOutput").html(greetMessage);
    
      });
    
    
  
  // function to display full name and email
  // Includes general message to customer
  function greetCustomer(firstName, lastName, customerEmail) {
    let greetMessage = ''; 
    
    greetMessage = "<br><h4>" + displayCustomerName(firstName, lastName) + "</h4>";
    greetMessage += "<h6>" + displayEmail(customerEmail) + "</h6>";
    greetMessage += "<br><h6>We will notify you as soon as stock updates are made.<br>Thank you for your patience and kindness.</h6>";
  

    console.log("obtained the user greeting " + greetMessage); 
  
    return greetMessage;
  }
  
  // function to store full name
  function displayCustomerName(firstName, lastName) {
    return "Hello " + firstName + " " + lastName + "!";
  }

  //funtion to store email
  function displayEmail(email) {
    return "Email: "  + email;
  }