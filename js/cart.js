/*price range*/


Cookies.set('name', { foo: 'bar' });


	$(document).ready(function(){



	var scroll_trigger = false;
$( window ).scroll(function() {
	//console.log($(window).scrollTop());
	
  if($(window).scrollTop()>100){
  		if(!scroll_trigger){
  			$("#menu_items").slideUp("medium");
  			$("#menu_head_items").slideUp("medium");

  		}
  		scroll_trigger = true;
	}else{
		if(scroll_trigger){
			$("#menu_items").slideDown("fast");
			$("#menu_head_items").slideDown("fast");
		}
  		scroll_trigger = false;
	}
});
if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    // Store

	//localStorage.setItem("cart_shopbee", JSON.stringify({foo: "bar"}));
	console.log(JSON.parse(localStorage.getItem("cart_shopbee")));
	var shopcart = JSON.parse(localStorage.getItem("cart_shopbee"));
	for(var product_id in shopcart){
		if(product_id == "info")continue;
		$("#shopcart").append('<tr>\
								<td class="cart_product hidden-xs">\
									<a href=""><img src="'+shopcart[product_id]["thumbnail"]+'" style="height:100px;" alt=""></a>\
								</td>\
								<td class="cart_description">\
									<h4><a href="">'+shopcart[product_id]["name"]+'</a></h4>\
									<p>Product ID: <span class="product_id">'+product_id+'</span></p>\
								</td>\
								<td class="cart_price">\
									<p>&#8377;<span>'+shopcart[product_id]["mrp"]*((100 - shopcart[product_id]["discount"])/100)+'</span></p>\
								</td>\
								<td class="cart_quantity">\
									<div class="cart_quantity_button">\
										<a class="cart_quantity_up"> + </a>\
										<input class="cart_quantity_input" readonly type="text" name="quantity" value="'+shopcart[product_id]["quantity"]+'" autocomplete="off" size="2">\
										<a class="cart_quantity_down"> - </a>\
									</div>\
								</td>\
								<td class="cart_total">\
									<p class="cart_total_price">&#8377;<span>'+(shopcart[product_id]["mrp"])*((100 - shopcart[product_id]["discount"])/100)*(shopcart[product_id]["quantity"])+'</span></p>\
								</td>\
								<td class="cart_delete">\
									<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>\
								</td>\
							</tr>');
	}
	

	// Retrieve

} else {
    // Sorry! No Web Storage support..
}

function setcartinfo(){
	shopcart = JSON.parse(localStorage.getItem("cart_shopbee"));
		$("span", "#cart_total").html(shopcart["info"]["total"]);
		console.log(shopcart["info"]["total"]);
		$("span", "#cart_sub_total").html(shopcart["info"]["cart_total"]);
		$("span", "#cart_tax").html(shopcart["info"]["tax"]);
		$("span", "#cart_shipping").html(shopcart["info"]["shipping_charge"]);
	}
	setcartinfo();
	$(".cart_quantity_up").on("click", function(){
		var item_id = $(this).parent().parent().parent().find(".product_id").text();
		var $quantity = $(this).parent().find(".cart_quantity_input");
		var quantity0 = parseInt($quantity.val());
		change_cart_item_quantity(item_id,(quantity0+1));
		$quantity.val(quantity0+1);
		$price = $(this).parent().parent().parent().find(".cart_price").find("span").text();
		$(this).parent().parent().parent().find(".cart_total_price").find("span").text($price*(quantity0+1));
		setcartinfo();
	});
	$(".cart_quantity_down").on("click", function(){
		var item_id = $(this).parent().parent().parent().find(".product_id").text();
		var $quantity = $(this).parent().find(".cart_quantity_input");
		var quantity0 = parseInt($quantity.val());
		if(quantity0<2)return;
		change_cart_item_quantity(item_id,(quantity0-1));
		$quantity.val(quantity0-1);
		$price = $(this).parent().parent().parent().find(".cart_price").find("span").text();
		$(this).parent().parent().parent().find(".cart_total_price").find("span").text($price*(quantity0-1));
		setcartinfo();
	});
	$(".cart_delete").on("click", function(){
		var item_id = $(this).parent().find(".product_id").text();
		delete_cartitem(item_id);
		$(this).parent().remove();
		setcartinfo();
	});







	});