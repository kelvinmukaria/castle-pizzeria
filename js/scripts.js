$("document").ready(function() {
  $(".submit").click(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var crust = $("#crust").val();
    var quantity = $("#quantity").val();
    var sizeprice = 0;

    if (size === "small") {
      sizeprice = 500;
    } else if (size === "medium") {
      sizeprice = 750;
    } else if (size === "large") {
      sizeprice = 1000;
    }

    var toppings = 0;
    var names = [];
    $.each($("input[name='food']:checked"), function() {
      var amount = parseInt($(this).val());
      toppings = toppings + amount;

    });
    //
    //     $('input[type="checkbox"]').on("click", getLocation);
    //
    //
    // function get(){
    //      if($(this).prop('checked') == true){
    //      document.getElementById('text').innerHTML+=$(this).val();
    //      }
    //      else{
    //      var text = document.getElementById('text').innerHTML;
    //      text=  text.replace($(this).val(),'');
    //      document.getElementById('text').innerHTML = text;
    //      }
    //
    // }

    var totalPrice = (toppings + sizeprice + parseInt(crust)) * quantity;
    alert(totalPrice)

  });
})
