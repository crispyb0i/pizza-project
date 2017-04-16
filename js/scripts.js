function pizza(size,defaultTopping,premiumTopping,totalPizzaCost){
  this.size = size;
  this.defaultTopping = defaultTopping;
  this.premiumTopping = premiumTopping;
  this.totalPizzaCost = totalPizzaCost;
}

var defaultToppingsArray = [];
var premiumToppingsArray = [];

//pricing functions. Accounts for 1 free default topping


    //list out toppings in receipt
    function appendDefault(){
      for(var i=0;i<defaultToppingsArray.length;i++){
        $("ul#defaultToppingsReceipt").append("<li>" + defaultToppingsArray[i] + "</li>");
      }
      for(var i=0;i<premiumToppingsArray.length;i++){
        $("ul#premiumToppingsReceipt").append("<li>" + premiumToppingsArray[i] + "</li>")
      }
    }

    function totalPrice(){
      if(this.size==="Small ($8)"){
        if(newPizza.defaultTopping.length>0){
        newPizza.totalPizzaCost+=(8+(newPizza.defaultTopping.length*2-2)+(newPizza.premiumTopping.length*3));
        return newPizza.totalPizzaCost
      }else{
        newPizza.totalPizzaCost+=(8+(newPizza.defaultTopping.length*2)+(newPizza.premiumTopping.length*3));
        return newPizza.totalPizzaCost
        }
      }if(this.size==="Medium ($11)"){
        if(newPizza.defaultTopping.length>0){
        newPizza.totalPizzaCost+=(11+(newPizza.defaultTopping.length*2-2)+(newPizza.premiumTopping.length*3));
        return newPizza.totalPizzaCost
      }else{
        newPizza.totalPizzaCost+=(11+(newPizza.defaultTOpping.length*2)+(newPizza.premiumTopping.length*3));
        return newPizza.totalPizzaCost
        }
      }if(this.size==="Large ($14)"){
        if(newPizza.defaultTopping.length>0){
        newPizza.totalPizzaCost+=(14+(newPizza.defaultTopping*2-2)+(newPizza.premiumTopping*3));
        return newPizza.totalPizzaCost
      }else{
        newPizza.totalPizzaCost+=(14+(newPizza.defaultTopping*2)+(newPizza.premiumTopping*3));
        return newPizza.totalPizzaCost
        }
      }
    }

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();


    var size = $("#size").val();

    $("#receipt").show()
    $("ul").empty();

    //prototype functions
    pizza.prototype.defaultCount = $("input:checkbox[name=topping1]:checked").each(function(){
        defaultToppingsArray.push($(this).val())
      });

    pizza.prototype.premiumCount = $("input:checkbox[name=topping2]:checked").each(function(){
        premiumToppingsArray.push($(this).val())
      });

      totalPrice();

      var newPizza = new pizza(size,defaultToppingsArray,premiumToppingsArray,totalPrice());
      console.log(newPizza.totalPizzaCost);

    $("#textAppend").text("Your Total Cost: $" + newPizza.totalPizzaCost);
    appendDefault();
  });
});
