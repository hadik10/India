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
    greetMessage += "<br>I hope you liked my ugly website<h6>Thank you for trying out my form.</h6>";
  

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
$(function(){
  let dresses = [
      ["New York Cities", ["Queens","Brooklyn"]],
      ["Delware Cities", ["Wilmington", "Dover"]],
      ["Atlanta Cities", ["Sandy Springs", "Decatur",]],
      ["Texas Cities", ["Austin", "Houston"]],
      ["Graphite Dress Size", ["XXS", "XS", "S", "M", "L", "XL", "2X", "3X", "4X"]],
      ["Hot Pink Dress Size", ["XXS", "XS", "S", "M", "L"]],
      ["Wine Dress Size", ["XXS", "XS"]],
      ["Cocoa Dress Size", ["XXS", "XS"]]

  ];

  $("#dressColor").on("change", function(e) {
      //enables the dress dropdown
      $("#dress").prop("disabled", false);

      let inputVal = this.value;

      // console.log(inputVal);

      //loop though array of dress sizes
      $.each(dresses, function(key, value) {
          //match size to dress selected
          if (inputVal === value[0]) {
              $.each(value, function(dressKey, dressValue) {
                  
                //Switch case to choose when to display the size dropdown based on color choice.
                  switch (dressKey) {
                      case 0:
                          $("label[for=dress]").text(dressValue);
                          $("#dress").empty();
                          $("#dress").append(
                              $("<option>").text(`Select ${dressValue} `)
                          );
                          break;
                      case 1:
                          $.each(dressValue, function(nameKey, nameValue) {
                              console.log(nameKey, nameValue);

                              $("#dress").append(
                                  $("<option>").val(nameValue).text(nameValue)
                              );
                          });
                          break;
                  }
              });
          }
      });
  });


});//end of doc
