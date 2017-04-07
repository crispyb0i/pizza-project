$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault()

    $("#receipt").show()
    $("ul").empty();

    var defaultAmount = 0;
    var premiumAmount = 0;
    var totalPizzaCost = 0;
    var size = new pizzaSize($("#size").val());
    var defaultToppingsArray = [];
    var premiumToppingsArray = [];

    var toppingsOne = new defaultTopping(defaultToppingsArray);
    var toppingsTwo = new premiumTopping(premiumToppingsArray);




  //constructor functions
    function defaultTopping(topping) {
      this.topping = topping;
    }

    function premiumTopping(topping) {
      this.topping = topping;
    }

    function pizzaSize(size){
      this.size = size
    }


  //prototype functions
    defaultTopping.prototype.defaultCount = $("input:checkbox[name=topping1]:checked").each(function(topping){
        defaultAmount+=1;
      });

    premiumTopping.prototype.premiumCount = $("input:checkbox[name=topping2]:checked").each(function(){
        premiumAmount+=1;
      });

    //pricing functions. Accounts for 1 free default topping
    function totalPrice(){
      if(size["size"]==="Small ($8)"){
        if(defaultAmount>0){
        totalPizzaCost+=(8+(defaultAmount*2-2)+(premiumAmount*3));
        return totalPizzaCost
      }else{
        totalPizzaCost+=(8+(defaultAmount*2)+(premiumAmount*3));
        return totalPizzaCost
        }
      }if(size["size"]==="Medium ($11)"){
        if(defaultAmount>0){
        totalPizzaCost+=(11+(defaultAmount*2-2)+(premiumAmount*3));
        return totalPizzaCost
      }else{
        totalPizzaCost+=(11+(defaultAmount*2)+(premiumAmount*3));
        return totalPizzaCost
        }
      }if(size["size"]==="Large ($14)"){
        if(defaultAmount>0){
        totalPizzaCost+=(14+(defaultAmount*2-2)+(premiumAmount*3));
        return totalPizzaCost
      }else{
        totalPizzaCost+=(14+(defaultAmount*2)+(premiumAmount*3));
        return totalPizzaCost
        }
      }
    }
    $("#textAppend").text("Your Total Cost: $" + totalPrice());

    function ingredientsList(){
      $.each($("input:checkbox[name=topping1]:checked"), function(){
        defaultToppingsArray.push($(this).val());
      });
      $.each($("input:checkbox[name=topping2]:checked"), function(){
        premiumToppingsArray.push($(this).val());
        });
      };
      //list out toppings in receipt
      function appendDefault(){
        for(var i=0;i<toppingsOne.topping.length;i++){
          $("ul#defaultToppingsReceipt").append("<li>" + toppingsOne.topping[i] + "</li>");
        }
        for(var i=0;i<toppingsTwo.topping.length;i++){
          $("ul#premiumToppingsReceipt").append("<li>" + toppingsTwo.topping[i] + "</li>")
        }
      }

    ingredientsList();
    appendDefault();
  });
});
