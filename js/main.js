var media_xs = window.matchMedia( "(max-width: 768px)" );
var media_sm = window.matchMedia( "(max-width: 992px)" );
var media_md = window.matchMedia( "(min-width: 992px) and (max-width: 1200px)" );
var media_lg = window.matchMedia( "(min-width: 1200px)" );



var cart = {
	"info":{
		cart_total: 23,
		shipping_charge:0,
		tax: 10,
		total: 33,
		item_count: 4
	},
	"0001":{
		name: "Lumia 1150",
		quantity: 1,
		mrp: 40000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: ["../img/products/iphone1.jpg","../img/products/iphone2.jpg","../img/products/iphone3.jpg"],
		thumbnail: "../img/products/thumbnail/lumia1.jpg",
		in_cart: false,
		brand: "Microsoft",
		color: "blue",
		shop: "Microsoft Store",
		os: "Windows",
		ram: 2,
		internal_storage: 32,
		search_option: true,
		category: "electronics"
	},
	"0002":{
		name: "Iphone 7s",
		quantity: 1,
		mrp: 60000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: ["../img/products/iphone1.jpg","../img/products/iphone2.jpg","../img/products/iphone3.jpg"],
		thumbnail: "../img/products/thumbnail/iphone1.png",
		in_cart: false,
		brand: "Apple",
		color: "blue",
		shop: "eWorld",
		os: "Windows",
		ram: 2,
		internal_storage: 32,
		search_option: true,
		category: "electronics"
	},
	"0003":{
		name: "Nexus 10",
		mrp: 47000,
		quantity: 1,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: ["../img/products/iphone1.jpg","../img/products/iphone2.jpg","../img/products/iphone3.jpg"],
		thumbnail: "../img/products/thumbnail/nexus1.png",
		in_cart: false,
		brand: "Google",
		color: "blue",
		shop: "eWorld",
		os: "Windows",
		ram: 2,
		internal_storage: 32,
		search_option: true,
		category: "electronics"
	}
}



function delete_cartitem(item_id){
		var shopcart2 = JSON.parse(localStorage.getItem("cart_shopbee"));
		delete shopcart2[item_id];
		localStorage.setItem("cart_shopbee", JSON.stringify(shopcart2));
		update_cart_info();
	}

function add_cart_item(item_id,item){
		var shopcart2 = JSON.parse(localStorage.getItem("cart_shopbee"));
		shopcart2[item_id] = item;
		localStorage.setItem("cart_shopbee", JSON.stringify(shopcart2));
		update_cart_info();
	}
function change_cart_item_quantity(item_id,quantity){
		var shopcart2 = JSON.parse(localStorage.getItem("cart_shopbee"));
		shopcart2[item_id]["quantity"] = quantity;
		localStorage.setItem("cart_shopbee", JSON.stringify(shopcart2));
		update_cart_info();
	}

function update_cart_info(){
	var shopcart2 = JSON.parse(localStorage.getItem("cart_shopbee"));
	var cart_total=0,total=0,item_count=0;
	for(var item in shopcart2){
		if(item == "info")continue;
		cart_total = cart_total + (shopcart2[item]["mrp"]*((100- shopcart2[item]["discount"])/100))*shopcart2[item]["quantity"];
		item_count = item_count + parseInt(shopcart2[item]["quantity"]);
	}
	total = cart_total + item_count*parseInt(shopcart2["info"]["shipping_charge"]);
	shopcart2["info"]["cart_total"] = cart_total;
	shopcart2["info"]["total"] = total;
	shopcart2["info"]["item_count"] = item_count;
	cart = shopcart2;
	localStorage.setItem("cart_shopbee", JSON.stringify(shopcart2));
}

function capitalize(capitalizeMe){
	return capitalizeMe[0].toUpperCase() + capitalizeMe.substring(1);;
}



/*For header*/


	$.fn.btsListFilter = function(inputEl, opts) {

		'use strict';
		
		var searchlist = this,
			searchlist$ = $(this),
			inputEl$ = $(inputEl),
			items$ = searchlist$,
			callData,
			callReq;	//last callData execution

		function tmpl(str, data) {
			return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
				return data[key] || '';
			});
		}

		function debouncer(func, timeout) {
			var timeoutID;
			timeout = timeout || 300;
			return function () {
				var scope = this , args = arguments;
				clearTimeout( timeoutID );
				timeoutID = setTimeout( function () {
					func.apply( scope , Array.prototype.slice.call( args ) );
				}, timeout);
			};
		}

		opts = $.extend({
			delay: 300,
			minLength: 1,
			initial: true,
			eventKey: 'keyup',
			resetOnBlur: true,
			sourceData: null,
			sourceTmpl: '<a class="list-group-item" href="#"><span>{title}</span></a>',
			sourceNode: function(data) {
				return tmpl(opts.sourceTmpl, data);
			},
			emptyNode: function(data) {
				return '<a class="list-group-item well" href="#"><span>No Results</span></a>';
			},
			itemClassTmp: 'bts-dynamic-item',
			itemEl: '.list-group-item',
			itemChild: null,
			itemFilter: function(item, val) {
				//val = val.replace(new RegExp("^[.]$|[\[\]|()*]",'g'),'');
				//val = val.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
				val = val && val.replace(new RegExp("[({[^.$*+?\\\]})]","g"),'');
				
				var text = $(item).text(),
					i = opts.initial ? '^' : '',
					regSearch = new RegExp(i + val,'i');
				return regSearch.test( text );
			}
		}, opts);		



		inputEl$.on(opts.eventKey, debouncer(function(e) {
			
			var val = $(this).val();

			if(opts.itemEl)
				items$ = searchlist$.find(opts.itemEl);

			if(opts.itemChild)
				items$ = items$.find(opts.itemChild);

			var contains = items$.filter(function(){
					return opts.itemFilter.call(searchlist, this, val);
				}),
				containsNot = items$.not(contains);

			if (opts.itemChild){
				contains = contains.parents(opts.itemEl);
				containsNot = containsNot.parents(opts.itemEl).hide();
			}

			if(val!=='' && val.length >= opts.minLength)
			{
				contains.show();
				containsNot.hide();

				if($.type(opts.sourceData)==='function')
				{
					contains.hide();
					containsNot.hide();
					
					if(callReq)
					{
						if($.isFunction(callReq.abort))
							callReq.abort();
						else if($.isFunction(callReq.stop))
							callReq.stop();
					}
					
					callReq = opts.sourceData.call(searchlist, val, function(data) {
						callReq = null;
						contains.hide();
						containsNot.hide();
						searchlist$.find('.'+opts.itemClassTmp).remove();
						

						if(!data || data.length===0)
							$( opts.emptyNode.call(searchlist) ).addClass(opts.itemClassTmp).appendTo(searchlist$);
						else
							for(var i in data)
								$( opts.sourceNode.call(searchlist, data[i]) ).addClass(opts.itemClassTmp).appendTo(searchlist$);
					});
				} 
				else {
                    searchlist$.find('.'+opts.itemClassTmp).remove();
                    
                    if(contains.length===0)
						$( opts.emptyNode.call(searchlist) ).addClass(opts.itemClassTmp).appendTo(searchlist$);
				}

			}
			else
			{
				contains.show();
				containsNot.show();
				searchlist$.find('.'+opts.itemClassTmp).remove();
			}
		}, opts.delay));

		if(opts.resetOnBlur)
			inputEl$.on('blur', function(e) {
				$(this).val('').trigger(opts.eventKey);
			});

		return searchlist$;
	};









/* For header */

$(document).ready(function(){
	if(localStorage.getItem("cart_shopbee")){
		cart = JSON.parse(localStorage.getItem("cart_shopbee"));
	}else{
		localStorage.setItem("cart_shopbee", JSON.stringify(cart));	
	}



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


searchlist_header1 = '\
<div id="searchlist-header" class="list-group hidden-sm hidden-md hidden-lg" style="max-height:200px;overflow-y:auto;">';
searchlist_header2 = '\
<div id="searchlist-header2" class="list-group hidden-xs" style="max-height:200px;overflow-y:auto;">';

for(item in items_all){
	searchlist_header1 += '\
	<div class="list-group-item"  style="cursor:pointer;">\
	<a href="./product-details.html?item_id='+item+'"><label><img src="'+items_all[item]["thumbnail"]+'" style="height:60px;"> <span>'+items_all[item]["name"]+'</span></label></a>\
	</div>\
	';
	searchlist_header2 += '\
	<div class="list-group-item"  style="cursor:pointer;">\
	<a href="./product-details.html?item_id='+item+'"><label><img src="'+items_all[item]["thumbnail"]+'" style="height:60px;"> <span>'+items_all[item]["name"]+'</span></label></a>\
	</div>\
	';
}
searchlist_header1 += '\
</div>';
searchlist_header2 += '\
</div>';
var searchlist_header = searchlist_header1 + searchlist_header2;

if(localStorage.getItem("login_shopbee")){
	var user = localStorage.getItem("login_shopbee");
	var header_logged = '\
	<li class="signing"><a href="#">'+"Hello, "+users[user]["name"]+' |</a></li>\
                    <li class="signing" id="logout_btn"><a>Logout</a></li>';
}else{
	var header_logged = '\
	<li class="signing"><a href="./signup.html">Signup&nbsp; |</a></li>\
                    <li class="signing"><a href="./landing.html">Login</a></li>';
}
$("header").append('<div class="container hidden-xs hidden-sm" style="padding-top:50px;"></div>\
\
    <nav class="navbar navbar-inverse navbar-fixed-top" style="background:#2F3C56;" role="navigation">\
         <div class="container-fluid hidden-xs" id="menu_head_items" style="margin-bottom: -1px;">\
            <div class="container">\
                <ul class="nav navbar-nav pull-right">\
                    '+header_logged+'\
                </ul>\
            </div>\
        </div>\
        <div class="container-fluid">\
            <div class="container">\
                <div class="row">\
                    <div class="col-md-5 visible-xs">\
                        <div class="navbar-header" style="width:100%;">\
                            <button type="button" class="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target="#navbar-collapse">\
                                <span class="sr-only">Toggle navigation</span>\
                                <span class="icon-bar"></span>\
                                <span class="icon-bar"></span>\
                                <span class="icon-bar"></span>\
                            </button>\
                    \
                            <div style="margin-top:8px;" class="hidden-xs"></div>\
                            <form class="navbar-form collapsed navbar-right" style="margin-top:0px;margin-bottom:0;" role="search" method="get">\
                                 <div class="input-group stylish-input-group">\
                                    <input type="text" class="form-control" id="searchinput-header" autocomplete="off"  placeholder="Search with lumia, nexus, pink floyd " >\
                                    '+""+'\
\
\
									\
                                    \
                                    <span class="input-group-addon">\
                                        <a>\
                                            <span class="glyphicon glyphicon-search"></span>\
                                        </a>  \
                                    </span>\
                                 </div>\
                            </form>\
                        </div>\
                    </div>\
                    <div class="col-sm-8 hidden-xs">\
                        <div class="navbar-header" style="width:100%;">\
                            <div class="row">\
                                <a href="./home.html"><div class="col-sm-5" style=" padding-top: 5px;color:#fff;font-family: Roboto; font-size: 25px; cursor-pointer;text-align: right;"><div data-toggle="tooltip" data-placement="right" id="bee"></div><span><img class="hidden-sm" src="../img/logo_bee.png" style="height:45px;position:relative;top:-3px;"></span><span>Shoppingbee</span></div></a>\
                                <div class="col-sm-7">\
                                    <div style="margin-top:8px;" class="hidden-xs"></div>\
                                        <form class="navbar-form collapsed navbar-right" style="margin-top:0px;margin-bottom:0;width: 100%;" role="search" method="get">\
                                             <div class="input-group stylish-input-group" style="width: 100%;">\
                                                <input type="text" id="searchinput-header2" class="form-control" autocomplete="off" placeholder="Search with lumia, nexus, pink floyd">\
                                                \
                                                <span class="input-group-addon" style="width: 20px;">\
                                                    <a>\
                                                        <span class="glyphicon glyphicon-search"></span>\
                                                    </a>  \
                                                </span>\
                                             </div>\
                                        </form>\
                                    \
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                     <div class="col-sm-4" style="overflow-y: auto;">\
                        <div class="collapse navbar-collapse" id="navbar-collapse" style="overflow-y: visible;">\
                            <ul class="nav navbar-nav navbar-left">\
                                <li><a href="./cart.html" class="btninfo btn animated cartbox" style="color:#fff;padding: 5px 25px;margin-top: 9px;"><i class="fa fa-shopping-cart"></i> My Cart <span class="badge" id="item_count">'+cart["info"]["item_count"]+'</span></a></li>\
                                <li><a href="./about.html">About</a></li>\
\
                            </ul>\
                            <ul class="nav navbar-nav visible-xs" style="color:#fff;">\
                    <li class="menu-bar align-menu"><a href="./home.html" style="color:#fff !important;">HOME <i class="fa fa-home"></i></a></li>\
                    <li class="menu-bar align-menu"><a href="./catalog.html" style="color:#fff !important;">ALL ITEMS <i class="fa fa-square"></i></a></li>\
                    <li class="menu-bar align-menu"><a style="color:#fff !important;" href="./catalog.html?category=electronics">ELECTRONICS <i class="fa fa-mobile"></i></a></li>\
                    <li class="menu-bar"><a style="color:#fff !important;" href="./catalog.html?category=books">BOOKS <i class="fa fa-book"></i></a></li>\
                    <li class="menu-bar"><a style="color:#fff !important;" href="./catalog.html?category=sports">SPORTS <i class="fa fa-futbol-o"></i></a></li>\
                    <li class="menu-bar"><a style="color:#fff !important;" href="./catalog.html?category=clothing">CLOTHING <i class="fa fa-black-tie"></i></a></li>\
                    <li class="menu-bar"><a style="color:#fff !important;" href="./catalog.html?category=music">MUSIC <i class="fa fa-music"></i></a></li>\
                    <li class="menu-bar"><a style="color:#fff !important;" href="./catalog.html?category=furniture">HOME & FURNITURE <i class="fa fa-bed"></i></a></li>\
                    \
                </ul>\
                     \
                        </div> <!-- navbar-collapse -->\
                     </div>\
                </div> <!-- navbar-header -->\
                \
            </div>\
        </div>\
        <div class="container-fluid hidden-xs" id="menu_items" style="background: #FCFCFC;margin-bottom: -1px; box-shadow: 1px 3px 8px -5px;">\
            <div class="container">\
                <ul class="nav navbar-nav">\
                    <li class="menu-bar align-menu hidden-sm"><a href="./home.html">HOME <i class="fa fa-home"></i></a></li>\
                    <li class="menu-bar align-menu"><a href="./catalog.html">ALL ITEMS <i class="fa fa-square"></i></a></li>\
                    <li class="menu-bar align-menu"><a href="./catalog.html?category=electronics">ELECTRONICS <i class="fa fa-mobile"></i></a></li>\
                    <li class="menu-bar"><a href="./catalog.html?category=books">BOOKS <i class="fa fa-book"></i></a></li>\
                    <li class="menu-bar"><a href="./catalog.html?category=sports">SPORTS <i class="fa fa-futbol-o"></i></a></li>\
                    <li class="menu-bar"><a href="./catalog.html?category=clothing">CLOTHING <i class="fa fa-black-tie"></i></a></li>\
                    <li class="menu-bar"><a href="./catalog.html?category=music">MUSIC <i class="fa fa-music"></i></a></li>\
                    <li class="menu-bar"><a href="./catalog.html?category=furniture">FURNITURE <i class="fa fa-bed"></i></a></li>\
                    \
                </ul>\
            </div>\
        </div>\
        <div class="container-fluid" style="background: #F7F5EE;">\
	    <div class="container" style="max-height="300px; overflow-y:auto;">\
	    	<div class="row">\
	    		<div class="col-md-8 col-md-offset-2">\
	   		 '+searchlist_header+'\
	   		 </div>\
	   	 </div>\
	    <div>\
    <div>\
    </nav>\
');


$('#searchlist-header').btsListFilter('#searchinput-header', {
	minLength: 3,
	itemChild: 'span',
	resetOnBlur: false
});
$('#searchlist-header2').btsListFilter('#searchinput-header2', {
	minLength: 3,
	itemChild: 'span',
	resetOnBlur: false
});

if($("#searchinput-header").val().length < 3){$('#searchlist-header').stop(true).hide();}
$("#searchinput-header").on("keyup", function(){
	if($("#searchinput-header").val().length < 3){$('#searchlist-header').stop(true).slideUp("fast");}
	else{

		$('#searchlist-header').stop(true).slideDown("fast");
		/*var scrollPos2 = $('#searchlist-header').parent().parent().parent().offset().top -150;
       $("body").animate({ scrollTop: scrollPos2}, 500, function () {});*/
	}
});

if($("#searchinput-header2").val().length < 3){$('#searchlist-header2').stop(true).hide();}
$("#searchinput-header2").on("keyup", function(){
	if($("#searchinput-header2").val().length < 3){$('#searchlist-header2').stop(true).slideUp("fast");}
	else{

		$('#searchlist-header2').stop(true).slideDown("fast");
		/*var scrollPos2 = $('#searchlist-header2').parent().parent().parent().offset().top - 150;
       $("body").animate({ scrollTop: scrollPos2}, 500, function () {});*/
	}
});

/*
$('body').on('click', function (e) {
    //only buttons
    if ($(e.target).data('toggle') !== 'popover'
        && $(e.target).parents('.popover.in').length === 0) { 
        $('#searchinput-header').popover('hide');
    }
});*/

 $("#logout_btn").click(function(){
			localStorage.removeItem("login_shopbee");
			location.replace("");
		});





/* Footer */ 

$('footer').append('\
		<div class="footer-widget">\
			<div class="container">\
				<div class="row">\
					<div class="col-sm-2">\
						<div class="single-widget">\
							<h2>Service</h2>\
							<ul class="nav nav-pills nav-stacked">\
								<li><a href="./faq.html">Online Help</a></li>\
								<li><a href="./contactus.html">Contact Us</a></li>\
								<li><a href="./trackOrder.html">Order Status</a></li>\
								<li><a href="./faq.html">FAQ’s</a></li>\
							</ul>\
						</div>\
					</div>\
					<div class="col-sm-2">\
						<div class="single-widget">\
							<h2>Quick Shop</h2>\
							<ul class="nav nav-pills nav-stacked">\
								<li><a href="./catalog.html?category=clothing&filters=%7B&quot;type&quot;%3A%7B&quot;Shirt&quot;%3Atrue%7D%7D">Shirt</a></li>\
								<li><a href="./catalog.html?category=clothing&filters=%7B&quot;type&quot;%3A%7B%7D%2C&quot;gender&quot;%3A%7B&quot;Men&quot;%3Atrue%7D%7D">Men</a></li>\
								<li><a href="./catalog.html?category=clothing&filters=%7B&quot;gender&quot;%3A%7B&quot;Women&quot;%3Atrue%7D%7D">Women</a></li>\
								<li><a href="./catalog.html?category=books">Books</a></li>\
								<li><a href="./catalog.html?category=furniture&filters=%7B&quot;type&quot;%3A%7B&quot;Bed&quot;%3Atrue%7D%7D">Beds</a></li>\
							</ul>\
						</div>\
					</div>\
					<div class="col-sm-2">\
						<div class="single-widget">\
							<h2>Policies</h2>\
							<ul class="nav nav-pills nav-stacked">\
								<li><a href="./terms.html">Terms of Use</a></li>\
								<li><a href="./privacy.html">Privecy Policy</a></li>\
								<li><a href="./refund.html">Refund Policy</a></li>\
								<li><a href="./billing.html">Billing System</a></li>\
							</ul>\
						</div>\
					</div>\
					<div class="col-sm-2">\
						<div class="single-widget">\
							<h2>About</h2>\
							<ul class="nav nav-pills nav-stacked">\
								<li><a href="./about.html">Company Information</a></li>\
								<li><a href="./careers.html">Careers</a></li>\
								<li><a href="./affiliate.html">Affillate Program</a></li>\
								<li><a href="./terms.html">Copyright</a></li>\
							</ul>\
						</div>\
					</div>\
					<div class="col-sm-3 col-sm-offset-1">\
						<div class="single-widget">\
							<h2>Subscribe to Newsletters</h2>\
							<form action="#" onsubmit="alert(&quot;Thank You for subscribing&quot;)" class="searchform">\
								<input type="email" placeholder="Your email address" />\
								<button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"></i></button>\
								<p>Get the most recent updates from <br />shoppingbee and be updated your self...</p>\
							</form>\
						</div>\
					</div>\
					\
				</div>\
			</div>\
		</div>\
		\
		<div class="footer-bottom">\
			<div class="container">\
				<div class="row">\
					<p class="pull-left">Copyright © 2015 shoppingBee Inc. All rights reserved.</p>\
					<p class="pull-right">Designed by <span><a target="_blank" href="http://www.swastikroy.com">Swastik Roy</a></span></p>\
				</div>\
			</div>\
		</div>\
		');


/* Footer End */






$(window).unload(function(){
     savescroll();
});
function savescroll(){
	var scrolly = $(window).scrollTop();
	sessionStorage.setItem("scrolly", scrolly);
	sessionStorage.setItem("pathname", location.pathname)
}
function scrollmove(){
	if(location.pathname != sessionStorage.getItem("pathname"))return;
	$(window).scrollTop(sessionStorage.getItem("scrolly"));
	sessionStorage.removeItem("scrolly")
}

scrollmove();




	
});


















var items_all = {
	"0001":{
		name: "Lumia 1150",
		mrp: 4000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: ["../img/products/iphone1.jpg","../img/products/iphone2.jpg","../img/products/iphone3.jpg"],
		thumbnail: "../img/products/thumbnail/lumia1.jpg",
		in_cart: false,
		brand: "Microsoft",
		color: "blue",
		shop: "Microsoft Store",
		os: "Windows",
		ram: 2,
		internal_storage: 32,
		search_option: true,
		category: "electronics"
	},
	"0002":{
		name: "Iphone 7s",
		mrp: 60000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: ["../img/products/iphone1.jpg","../img/products/iphone2.jpg","../img/products/iphone3.jpg"],
		thumbnail: "../img/products/thumbnail/iphone1.png",
		in_cart: false,
		brand: "Apple",
		color: "blue",
		shop: "eWorld",
		os: "Windows",
		ram: 2,
		internal_storage: 32,
		search_option: true,
		category: "electronics"
	},
	"0003":{
		name: "Nexus 10",
		mrp: 17000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: ["../img/products/iphone1.jpg","../img/products/iphone2.jpg","../img/products/iphone3.jpg"],
		thumbnail: "../img/products/thumbnail/nexus1.png",
		in_cart: false,
		brand: "Google",
		color: "blue",
		shop: "eWorld",
		os: "Windows",
		ram: 2,
		internal_storage: 32,
		search_option: true,
		category: "electronics"
	},
	"0004":{
		name: "Iphone 5",
		mrp: 7000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: ["../img/products/iphone1.jpg","../img/products/iphone2.jpg","../img/products/iphone3.jpg"],
		thumbnail: "../img/products/thumbnail/iphone1.png",
		in_cart: false,
		brand: "Apple",
		color: "blue",
		shop: "Other",
		os: "Other",
		ram: 2,
		internal_storage: 32,
		search_option: true,
		category: "electronics"
	},
	"0005":{
		name: "Nexus 5",
		mrp: 47000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: ["../img/products/iphone1.jpg","../img/products/iphone2.jpg","../img/products/iphone3.jpg"],
		thumbnail: "../img/products/thumbnail/nexus1.png",
		in_cart: false,
		brand: "Google",
		color: "blue",
		shop: "Other",
		os: "Windows",
		ram: 2,
		internal_storage: 32,
		search_option: true,
		category: "electronics"
	},
	"1001":{
		name: "Harry Potter",
		mrp: 2000,
		author: "J K Rowling",
		genre: "comedy",
		publisher: "Publisher 1",
		discount: 20,
		thumbnail: "../img/products/thumbnail/harry.jpg",
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best book",
		image_url: "../img/item_id_1.png",
		in_cart: false,
		search_option: true,
		category: "books"
	},
	"1002":{
		name: "Master of the game",
		mrp: 280,
		author: "Sydney Sheldon",
		genre: "thriller",
		publisher: "Publisher 1",
		discount: 20,
		outOfStock: false,
		rating: 4,
		thumbnail: "../img/products/thumbnail/moftg.jpg",
		reviews: 12,
		description: "One of the best smartphones",
		image_url: "../img/item_id_1.png",
		in_cart: false,	
		search_option: true,
		category: "books"
	},
	"1003":{
		name: "Pather Panchali",
		mrp: 150,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/patherpanchali.jpg",
		in_cart: false,
		author: "Satyajit Ray",
		genre: "drama",
		publisher: "Publisher 2",
		search_option: true,
		category: "books"
	},
	"1004":{
		name: "Brief History of time",
		mrp: 300,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/bhot.jpg",
		in_cart: false,
		author: "Stephen hawking",
		genre: "science",
		publisher: "Publisher 3",
		search_option: true,
		category: "books"
	},
	"1005":{
		name: "Two states",
		mrp: 120,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/2states.jpg",
		in_cart: false,
		author: "Chetan Bhagat",
		genre: "romance",
		publisher: "Publisher 3",
		search_option: true,
		category: "books"
	},
	"2001":{
		name: "Summer T-shirt",
		mrp: 470,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Finest quality t-shirt",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/shirt1.jpg",
		in_cart: false,
		brand: "Levis",
		type: "Shirt",
		gender: "Men",
		search_option: true,
		category: "clothing"
	},
	"2002":{
		name: "Casual t-shirt",
		mrp: 970,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Finest quality t-shirt",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/shirt2.jpg",
		in_cart: false,
		brand: "West Side",
		type: "Shirt",
		gender: "Men",
		search_option: true,
		category: "clothing"
	},
	"2003":{
		name: "Formal shirt",
		mrp: 545,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Finest quality t-shirt",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/formalshirt1.jpg",
		in_cart: false,
		brand: "Raymond",
		type: "Shirt",
		gender: "Men",
		search_option: true,
		category: "clothing"
	},
	"2004":{
		name: "Women shirt 1",
		mrp: 699,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Finest quality t-shirt",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/womenshirt.jpg",
		in_cart: false,
		brand: "Lifestyle",
		type: "Shirt",
		gender: "Women",
		search_option: true,
		category: "clothing"
	},
	"2005":{
		name: "Women shoe 1",
		mrp: 2699,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Finest quality t-shirt",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/shoes2.jpg",
		in_cart: false,
		brand: "Lifestyle",
		type: "Shoes",
		gender: "Women",
		search_option: true,
		category: "clothing"
	},
	"2006":{
		name: "Women shoe 2",
		mrp: 3899,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Finest quality t-shirt",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/shoes3.jpg",
		in_cart: false,
		brand: "Lifestyle",
		type: "Shoes",
		gender: "Women",
		search_option: true,
		category: "clothing"
	},
	"2007":{
		name: "Hiking shoe",
		mrp: 5899,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Finest quality t-shirt",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/shoes1.jpg",
		in_cart: false,
		brand: "Woodland",
		type: "Shoes",
		gender: "Men",
		search_option: true,
		category: "clothing"
	},
	"2008":{
		name: "kidshirt",
		mrp: 259,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Finest quality t-shirt",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/kidshirt.jpg",
		in_cart: false,
		brand: "Lifestyle",
		type: "Shirt",
		gender: "Kids",
		search_option: true,
		category: "clothing"
	},
	"2009":{
		name: "Trouser",
		mrp: 1059,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Finest quality t-shirt",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/trouser1.jpg",
		in_cart: false,
		brand: "Lifestyle",
		type: "Trousers",
		gender: "Men",
		search_option: true,
		category: "clothing"
	},
	"2010":{
		name: "Trouser",
		mrp: 3099,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Finest quality t-shirt",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/jeans1.jpg",
		in_cart: false,
		brand: "Lifestyle",
		type: "Jeans",
		gender: "Men",
		search_option: true,
		category: "clothing"
	},
	"2011":{
		name: "Blazer 1",
		mrp: 8099,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Finest quality t-shirt",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/blazer1.jpg",
		in_cart: false,
		brand: "Raymond",
		type: "Blazer and Suit",
		gender: "Men",
		search_option: true,
		category: "clothing"
	},
	"3001":{
		name: "Pink floyd- The Wall",
		mrp: 299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Hey You, Comfortably Numb",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/music1.jpg",
		in_cart: false,
		genre: "Soft Rock",
		artist: "Pink Floyd",
		search_option: true,
		category: "music"
	},
	"3002":{
		name: "Pink floyd",
		mrp: 299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Dark Side of the Moon",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/music2.jpg",
		in_cart: false,
		genre: "Soft Rock",
		artist: "Pink Floyd",
		search_option: true,
		category: "music"
	},
	"3003":{
		name: "John Lenon - Imagine",
		mrp: 299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Imagine all the people",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/music3.jpg",
		in_cart: false,
		genre: "Classic",
		artist: "John Lenon",
		search_option: true,
		category: "music"
	},
	"3004":{
		name: "Led Zeppelin",
		mrp: 299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "She is buying a stairway to heaven",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/music4.gif",
		in_cart: false,
		genre: "Classic",
		artist: "Led Zeppelin",
		search_option: true,
		category: "music"
	},
	"3005":{
		name: "Coldplay",
		mrp: 699,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Viva la vida",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/music5.jpg",
		in_cart: false,
		genre: "Alternative Rock",
		artist: "Coldplay",
		search_option: true,
		category: "music"
	},
	"3006":{
		name: "Bob Dylan",
		mrp: 299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Mr. tambourine man play a song for me",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/music6.jpg",
		in_cart: false,
		genre: "Classic",
		artist: "Bob Dylan",
		search_option: true,
		category: "music"
	},
	"3007":{
		name: "Dream Theater",
		mrp: 299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Pull me under",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/music7.jpg",
		in_cart: false,
		genre: "Alternative Rock",
		artist: "Dream Theater",
		search_option: true,
		category: "music"
	},
	"4001":{
		name: "Sofa 1",
		mrp: 12299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality furniture",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/furniture1.jpg",
		in_cart: false,
		type: "Sofa",
		built: "wooden",
		search_option: true,
		category: "furniture"
	},
	"4002":{
		name: "Sofa 2",
		mrp: 12299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality furniture",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/furniture2.jpg",
		in_cart: false,
		type: "Sofa",
		built: "wooden",
		search_option: true,
		category: "furniture"
	},
	"4003":{
		name: "Recliner",
		mrp: 18299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality furniture",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/furniture3.jpg",
		in_cart: false,
		type: "Recliner",
		built: "wooden",
		search_option: true,
		category: "furniture"
	},
	"4004":{
		name: "Bed 1",
		mrp: 12299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality furniture",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/furniture4.jpg",
		in_cart: false,
		type: "Bed",
		built: "plastic",
		search_option: true,
		category: "furniture"
	},
	"4005":{
		name: "Bed 3",
		mrp: 12299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality furniture",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/furniture5.jpg",
		in_cart: false,
		type: "Bed",
		built: "wooden",
		search_option: true,
		category: "furniture"
	},
	"5001":{
		name: "Boxing Gloves",
		mrp: 2299,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality product",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/sports1.jpg",
		in_cart: false,
		brand: "Puma",
		sport: "Boxing",
		search_option: true,
		category: "sports"
	},
	"5002":{
		name: "Boxing Headgear",
		mrp: 2899,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality product",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/sports2.jpg",
		in_cart: false,
		brand: "Puma",
		sport: "Boxing",
		search_option: true,
		category: "sports"
	},
	"5003":{
		name: "Ice axe",
		mrp: 2899,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality product",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/sports3.jpg",
		in_cart: false,
		brand: "Reebok",
		sport: "Mountaineering",
		search_option: true,
		category: "sports"
	},
	"5004":{
		name: "TT racket",
		mrp: 1099,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality product",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/sports4.jpeg",
		in_cart: false,
		brand: "Addidas",
		sport: "Table tennis",
		search_option: true,
		category: "sports"
	},
	"5005":{
		name: "Tennis racket",
		mrp: 2099,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality product",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/sports5.jpg",
		in_cart: false,
		brand: "Addidas",
		sport: "Tennis",
		search_option: true,
		category: "sports"
	},
	"5006":{
		name: "Skateboard",
		mrp: 600,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality product",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/sports6.png",
		in_cart: false,
		brand: "Spykar",
		sport: "Other",
		search_option: true,
		category: "sports"
	},
	"5007":{
		name: "Cricket kit",
		mrp: 6600,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "Best quality product",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/sports7.jpg",
		in_cart: false,
		brand: "Reebok",
		sport: "Cricket",
		search_option: true,
		category: "sports"
	},
}





var users = {
	"swastikroy":{
		"password": "beehyv123",
		"name": "Swastik"
	},
	"swastik@beehyv.com":{
		"password": "beehyv123",
		"name": "Swastik"
	},
	"rahul@beehyv.com":{
		"password": "beehyv123",
		"name": "Rahul"
	},
	"vikram@beehyv.com":{
		"password": "beehyv123",
		"name": "Vikram"
	},
}