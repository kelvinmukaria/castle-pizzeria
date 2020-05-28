$("document").ready(function() {
  $(".submit").click(function() {
    var size = $("#size").val();
    var crust = $("#crust").val();

    var sizeprice = 0;

    if (size = "small") {
      sizeprice = 500;
    } else if (size = "medium") {
      sizeprice = 750;
    } else if (size = "large") {
      sizeprice = 1000;
    }

    var toppings = 0;
    var names = [];
    $.each($("input[name='food']:checked"), function() {
      var amount = parseInt($(this).val());
      toppings = toppings + amount;

    });

    alert(toppings + sizeprice + parseInt(crust))
  });
})
