var product;
try{
  product = JSON.parse(decodeURIComponent(getUrlVars()["product"]));
  var filter = product["filter"];
  console.log(filter);
  console.log(encodeURIComponent(JSON.stringify(filter)));
  $("#back_btn").click(function(){
      location.assign("./catalog.html?category="+product["category"]+"&filters="+encodeURIComponent(JSON.stringify(filter)));
    });
}
  catch(e){
    if(!(getUrlVars()["item_id"]))location.assign("./catalog.html");
    product = {"item_id": (getUrlVars()["item_id"])};
   $("#back_btn").hide();

}
console.log(product);
console.log(product["filter"]);
var item_id = product["item_id"];


 
var category = items_all[item_id]["category"];
var item_name = items_all[item_id]["name"];
var item_mrp = items_all[item_id]["mrp"];
var item_discount = items_all[item_id]["discount"];
var item_description = items_all[item_id]["description"];
var item_rating = items_all[item_id]["rating"];
var item_outOfStock = items_all[item_id]["outOfStock"];
var item_image_url_array = items_all[item_id]["image_url"];
var item_brand = items_all[item_id]["brand"];
var item_thumbnail = items_all[item_id]["thumbnail"];

/*
(function(window, location) {
  //  history.replaceState(null, document.title, location.pathname+"#!/stealingyourhistory");
 //   history.pushState(null, document.title, location.pathname);

    window.addEventListener("popstate", function() {
      if(location.hash === "#!/stealingyourhistory") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function(){
              location.replace("./catalog.html?category="+category+"&filters="+JSON.stringify(encodeURIComponent(filter)));
            },0);
      }
    }, false);
}(window, location));*/
function cartbox_animate(){
  $(".cartbox").removeClass("shakeFast");
  setTimeout(function(){
   $(".cartbox").addClass("shakeFast");
 },500);

}

$(document).ready(function(){
$("#item_name").text(item_name);
$("#item_id").text(item_id);
$("#item_mrp").html("INR &#8377;"+item_mrp);
if(item_outOfStock)$("#item_outOfStock").text("Out of Stock");
else $("#item_outOfStock").text("In Stock");
$("#item_brand").text(item_brand);
$("#item_name2").text(item_name);
$("#item_description").text(item_description);
$("#item_mrp2").text(item_mrp);
$("#prod_img_1").html('<img style="max-height: 300px;width:100%;" src="'+item_thumbnail+'" alt="">');
var shopcart3 = JSON.parse(localStorage.getItem("cart_shopbee"));
var added_to_cart = false;
if(item_id in shopcart3){
  $("#add_to_cart").css({"background" : "#27A347"});
   $("#add_to_cart").html('<i class="fa fa-shopping-cart"></i> Added to cart');
    cartbox_animate();
    added_to_cart = true;
 $("#item_quantity").attr("disabled","true");
}else{
  


}

$("#add_to_cart").click(function(){
         if(added_to_cart){
          delete_cartitem(item_id);
         $("#add_to_cart").css({"background" : "#FE980F"});
         $("#add_to_cart").html('<i class="fa fa-shopping-cart"></i> Add to cart');
             cartbox_animate();
         $("#item_quantity").removeAttr("disabled");
          $("#item_count").text(cart["info"]["item_count"]);
          added_to_cart = false;
          return;
        }
      var shopcart4 = JSON.parse(localStorage.getItem("cart_shopbee"));
      shopcart4[item_id] = items_all[item_id];
      shopcart4[item_id]["quantity"] = $("#item_quantity").val();
      $("#item_quantity").attr("disabled","true");
      localStorage.setItem("cart_shopbee", JSON.stringify(shopcart4));
      update_cart_info();
      $("#add_to_cart").css({"background" : "#27A347"});
      $("#add_to_cart").html("<i class='fa fa-shopping-cart'></i> Added to cart");
          cartbox_animate();
         $("#item_count").text(cart["info"]["item_count"]);
       added_to_cart = true;
  });
var hovered = false;
  $("#add_to_cart").mouseenter(function(){
      if(!added_to_cart)return;
      $("#add_to_cart").html("<i class='fa fa-shopping-cart'></i> Remove from cart");
  }).mouseleave(function(){
         if(!added_to_cart)return;
     $("#add_to_cart").html("<i class='fa fa-shopping-cart'></i> Added to cart");
  });

});




function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
}
