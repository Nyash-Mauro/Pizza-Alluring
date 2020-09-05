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
}