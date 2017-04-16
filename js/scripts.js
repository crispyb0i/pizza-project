function pizza(size,defaultTopping,premiumTopping){
  this.size = size;
  this.defaultTopping = defaultTopping;
  this.premiumTopping = premiumTopping;
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

function defaultPush() {
  $("input:checkbox[name=topping1]:checked").each(function(){
      defaultToppingsArray.push($(this).val())
  });
}

function premiumPush() {
  $("input:checkbox[name=topping2]:checked").each(function(){
      premiumToppingsArray.push($(this).val())
  });
}

pizza.prototype.price = function() {
  var total = 0;
  if(this.size==="Small ($8)"){
    if(this.defaultTopping.length>0){
    total+=(8+(this.defaultTopping.length*2-2)+(this.premiumTopping.length*3));
  }else{
    total+=(8+(this.defaultTopping.length*2)+(this.premiumTopping.length*3));
    }
  }if(this.size==="Medium ($11)"){
    if(this.defaultTopping.length>0){
    total+=(11+(this.defaultTopping.length*2-2)+(this.premiumTopping.length*3));
  }else{
    total+=(11+(this.defaultTOpping.length*2)+(this.premiumTopping.length*3));
    }
  }if(this.size==="Large ($14)"){
    if(this.defaultTopping.length>0){
    total+=(14+(this.defaultTopping*2-2)+(this.premiumTopping*3));
  }else{
    total+=(14+(this.defaultTopping*2)+(this.premiumTopping*3));
    }
  }return total;
}

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    $("#receipt").show()
    $("ul").empty();

    defaultToppingsArray = [];
    premiumToppingsArray = [];

    var size = $("#size").val();

    var newPizza = new pizza(size,defaultToppingsArray,premiumToppingsArray);

    defaultPush();
    premiumPush();

    console.log(newPizza.defaultTopping)
    console.log(newPizza.price())
    $("#textAppend").text("Your Total Cost: $" + newPizza.price());
    appendDefault();
  });
});
