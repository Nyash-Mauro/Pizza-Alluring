var price ,crust_price, topping_price ;
let total = 0;
function GetPizza(name,size,crust,topping, total){
    this.name =name;
    this.size =size;
    this.crust =crust;
    this.topping =topping;
    this.total =total;
}

// submit button
$(document).ready(function(){})
$("button.submit").click(function(event){
    let pname = $(".name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    ptopping.push($(this).val());
});
console.log(ptopping.join(","));

switch (psize) {
    case "0":
        price =0
        break;
    case "large":
        price=1500;
        console.log(price);
        break;
    case "medium":
        price=800;
        console.log("Price is"
        +price)
        break;
    case "small":
        price=600;
        console.log(price)
    default:
        break;
};
let topping_value = ptopping.length*50;
console.log("toppins value"+ topping_value);

if((psize == "0") && (pcrust == "0")){
    console.log("nothing selected");
    $("button.proceed").show();
    $("#information").show();
    $("div.choise").hide();
    alert("Please select pizza size and crust"); 
  }
  else{
      $("button.submit").hide();
      $("#information").hide();
      $("div.choice").slideDown(1200);
  }
  switch(pcrust){
    case "0":
      crust_price = 0;
    break;
    case "Neapolitan-Crust":
      crust_price = 180;
    break;
    case "Silician-Style":
      crust_price = 200;
    break;
    case "NY-style":
      crust_price = 150;
    break;
    case "Chicago-Deep-dish":
        crust_price = 250;
      break;
    default:
      console.log("No price"); 
  }
  let topping_value = ptopping.length*50;
  console.log("toppings value"+topping_value);

  if((psize == "0") && (pcrust == "0")){
    console.log("nothing selected");
    $("button.proceed").show();
    $("#information").show();
    $("div.choise").hide();
    alert("Please select pizza size and crust"); 
  }
  else{
    $("button.sybmit").hide();
    $("#information").hide();
    $("div.choice").slideDown(1200);
  }

  total = price + crust_price + topping_value;
  console.log(total);
  let checkoutTotal =0;
  checkoutTotal =0;
  checkoutTotal = checkoutTotal +total;

  $("#pizzaname").html($(".name option:selected").val());
  $("#pizzasize").html($("#size option:selected").val());
  $("#pizzacrust").html($("#crust option:selected").val());
  $("#pizzatopping").html(ptopping.join(","));
  $("#totals").html(total);

  $("button.addPizza").click(function(){
    let pname = $(".name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function(){            
        ptopping.push($(this).val());
    })});
    console.log(ptopping.join(","));
    switch (psize) {
      case "0":
          price =0
          break;
      case "large":
          price=1500;
          console.log(price);
          break;
      case "medium":
          price=800;
          console.log("Price is"
          +price)
          break;
      case "small":
          price=600;
          console.log(price)
      default:
          break;
  };
  switch(pcrust){
    case "0":
      crust_price = 0;
    break;
    case "Neapolitan-Crust":
      crust_price = 180;
    break;
    case "Silician-Style":
      crust_price = 200;
    break;
    case "NY-style":
      crust_price = 150;
    break;
    case "Chicago-Deep-dish":
        crust_price = 250;
      break;
    default:
      console.log("No price"); 
  };
  let topping_value = ptopping.length*50;
  console.log("toppins value" + topping_value);
  total = price + crust_price + topping_value;
  console.log(total);

  checkoutTotal = checkoutTotal + total;
  console.log(checkoutTotal);