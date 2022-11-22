$(function(){
  let dresses = [
      ["Heather Grey Dress Size", ["XXS"]],
      ["Onyx Dress Size", ["XXS", "XS", "2X"]],
      ["Marble Dress Size", ["XXS", "XS", "S", "M"]],
      ["Oxide Dress Size", ["XXS", "XS", "S", "M", "L", "XL", "2X"]],
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






