/*price range*/



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
function append_cart(){
	$("#loading").html("");
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
										<p>&#8377;<span>'+Math.round(shopcart[product_id]["mrp"]*((100 - shopcart[product_id]["discount"])/100))+'</span></p>\
									</td>\
									<td class="cart_quantity">\
										<div class="cart_quantity_button">\
											<a class="cart_quantity_up"> + </a>\
											<input class="cart_quantity_input" readonly type="text" name="quantity" value="'+shopcart[product_id]["quantity"]+'" autocomplete="off" size="2">\
											<a class="cart_quantity_down"> - </a>\
										</div>\
									</td>\
									<td class="cart_total">\
										<p class="cart_total_price">&#8377;<span>'+Math.round(shopcart[product_id]["mrp"]*((100 - shopcart[product_id]["discount"])/100)*(shopcart[product_id]["quantity"]))+'</span></p>\
									</td>\
									<td class="cart_delete">\
										<a class="cart_quantity_delete"><i class="fa fa-times"></i></a>\
									</td>\
								</tr>');
			
			

		}


	} else {
	    // Sorry! No Web Storage support..
	}
}

function add_events(){
	function setcartinfo(){
		shopcart = JSON.parse(localStorage.getItem("cart_shopbee"));
			$("span", "#cart_total").html(Math.round(shopcart["info"]["total"]));
			console.log(shopcart["info"]["total"]);
			$("span", "#cart_sub_total").html(Math.round(shopcart["info"]["cart_total"]));
			$("span", "#cart_tax").html(shopcart["info"]["tax"]);
			$("span", "#cart_shipping").html(shopcart["info"]["shipping_charge"]);
			$("#item_count").text(cart["info"]["item_count"]);
	}
	setcartinfo();
	$(".cart_quantity_up").on("click", function(){
		var item_id = $(this).parent().parent().parent().find(".product_id").text();
		var $quantity = $(this).parent().find(".cart_quantity_input");
		var quantity0 = parseInt($quantity.val());
		console.log(quantity0);
		change_cart_item_quantity(item_id,(quantity0+1));
		$quantity.val(quantity0+1);
		$price = $(this).parent().parent().parent().find(".cart_price").find("span").text();
		$(this).parent().parent().parent().find(".cart_total_price").find("span").html(Math.round($price*(quantity0+1)));
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
		$(this).parent().parent().parent().find(".cart_total_price").find("span").html(Math.round($price*(quantity0-1)));
		setcartinfo();
	});
	$(".cart_delete").on("click", function(){
		var item_id = $(this).parent().find(".product_id").text();
		/*delete_cartitem(item_id,cart[item_id]["category"]);*/
		var quant = $(this).parent().find(".cart_quantity_input").val();
		console.log(quant);
		var category_once = cart[item_id]["category"];
		for(var x=0;x<quant;x++){
			console.log(x);
			delete_cartitem(item_id,category_once);
		}
		$(this).parent().remove();
		setcartinfo();
	});

}
	
$("#loading").html('<div class="text-center" style="padding-top:50px;padding-bottom:50px;width:100%;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate center-block" style="color:#000; font-size:1.3em;"></span></div>');
setTimeout(append_cart, 1000);
setTimeout(add_events, 2000);








	});