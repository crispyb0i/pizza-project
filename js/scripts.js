function pizza(size,defaultTopping,premiumTopping,totalPizzaCost){
  this.size = size;
  this.defaultTopping = defaultTopping;
  this.premiumTopping = premiumTopping;
  this.totalPizzaCost = totalPizzaCost;
}

var defaultToppingsArray = [];
var premiumToppingsArray = [];

function appendDefault(){
  for(var i=0;i<defaultToppingsArray.length;i++){
    $("ul#defaultToppingsReceipt").append("<li>" + defaultToppingsArray[i] + "</li>");
  }
  for(var i=0;i<premiumToppingsArray.length;i++){
    $("ul#premiumToppingsReceipt").append("<li>" + premiumToppingsArray[i] + "</li>")
  }
}

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    $("#receipt").show()
    $("ul").empty();

    defaultToppingsArray = [];
    premiumToppingsArray = [];

    var size = $("#size").val();
    var newPizza = new pizza(size,defaultToppingsArray,premiumToppingsArray,0);

    pizza.prototype.defaultCount = $("input:checkbox[name=topping1]:checked").each(function(){
        defaultToppingsArray.push($(this).val())
      });

    pizza.prototype.premiumCount = $("input:checkbox[name=topping2]:checked").each(function(){
        premiumToppingsArray.push($(this).val())
      });
    //append total cost to receipt
    if(size==="Small ($8)"){
      if(newPizza.defaultTopping.length>0){
      newPizza.totalPizzaCost+=(8+(newPizza.defaultTopping.length*2-2)+(newPizza.premiumTopping.length*3));
      $("#textAppend").text("Your Total Cost: $" + newPizza.totalPizzaCost);
    }else{
      newPizza.totalPizzaCost+=(8+(newPizza.defaultTopping.length*2)+(newPizza.premiumTopping.length*3));
      $("#textAppend").text("Your Total Cost: $" + newPizza.totalPizzaCost);
      }
    }if(size==="Medium ($11)"){
      if(newPizza.defaultTopping.length>0){
      newPizza.totalPizzaCost+=(11+(newPizza.defaultTopping.length*2-2)+(newPizza.premiumTopping.length*3));
      $("#textAppend").text("Your Total Cost: $" + newPizza.totalPizzaCost);
    }else{
      newPizza.totalPizzaCost+=(11+(newPizza.defaultTOpping.length*2)+(newPizza.premiumTopping.length*3));
      $("#textAppend").text("Your Total Cost: $" + newPizza.totalPizzaCost);
      }
    }if(size==="Large ($14)"){
      if(newPizza.defaultTopping.length>0){
      newPizza.totalPizzaCost+=(14+(newPizza.defaultTopping*2-2)+(newPizza.premiumTopping*3));
      $("#textAppend").text("Your Total Cost: $" + newPizza.totalPizzaCost);
    }else{
      newPizza.totalPizzaCost+=(14+(newPizza.defaultTopping*2)+(newPizza.premiumTopping*3));
      $("#textAppend").text("Your Total Cost: $" + newPizza.totalPizzaCost);
      }
    }
    appendDefault();
  });
});
