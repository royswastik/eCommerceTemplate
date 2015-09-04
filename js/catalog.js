$(document).ready(function(){

	 var tags = $('#my-tag-list').tags({
            tagData:[],
            suggestions:["basic", "suggestions"],
            excludeList:["not", "these", "words"],
            afterDeletingTag: function(tag){ console.log(tag);
            	if(tag.split("_")[0]== "filter"){
            		var filter_type = tag.split("_")[1];
	            	var filter_value = tag.split("_")[2];
	            	delete filters[filter_type][filter_value];
	            	console.log(filters);
	            	load_filters();
	            	location.replace("./catalog.html?category="+category+"&filters="+encodeURIComponent(JSON.stringify(filters)));
	            }else if(tag.split("_")[0]== "sort"){
	            	delete filters["sort"];
	            	location.replace("./catalog.html?category="+category+"&filters="+encodeURIComponent(JSON.stringify(filters)));
	            }
            },
            afterAddingTag:function(tag){ console.log(tag);
            	if(tag.split("_")[0]== "filter"){
            		var filter_type = tag.split("_")[1];
	            	var filter_value = tag.split("_")[2];
	            	if(!filters[filter_type])filters[filter_type] = {};
					filters[filter_type][filter_value] = true;
					console.log(filters);
	          /*  	$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(append_data(items_catalog), 500);*/

	            }else if(tag.split("_")[0]== "sort"){
	            	var filter_value = tag.split("_")[1];
	            	delete filters["sort"];
	            	filters["sort"]= {};
	            	filters["sort"][filter_value] = true;
	            }
          }
        });


     $(".tags-input").attr("readonly","true");
     $("#my-tag-list > input").attr("placeholder","No filters applied");

















$('#searchlist').btsListFilter('#searchinput', {itemChild: 'span'});
$('#searchlist2').btsListFilter('#searchinput2', {itemChild: 'span'});










function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
}


function loadcategory_items(category){
	var item_temp = {};
	for(var item in items_all){
		if(items_all[item]["category"] == category)item_temp[item] = items_all[item];
	}
	if(category == "clothing"){
		items_clothing = item_temp;
	}
	else if(category == "electronics"){
		items_mobile = item_temp;
	}
	else if(category == "books"){
		items_books = item_temp;
	}
	else if(category == "furniture"){
		items_furniture = item_temp;
	}
	else if(category == "sports"){
		items_sports = item_temp;
	}
	else if(category == "music"){
		items_music = item_temp;
	}
}



var category = getUrlVars()["category"];
var items_catalog = items_all;

var filter_url = getUrlVars()["filters"];
loadcategory_items(category);

try{
	filters = JSON.parse(decodeURIComponent(filter_url));
	console.log(filters);
}
catch(e){
	console.log(e);
}

if(category == "sports"){
	items_catalog = items_sports;
	filter_items = filter_items_sports;
		$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(append_data(items_catalog), 500);
}
else if(category == "books"){
	items_catalog = items_books;
	filter_items = filter_items_books;
		            	$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(append_data(items_catalog), 500);
}
else if(category == "clothing"){
	items_catalog = items_clothing;
	filter_items = filter_items_clothing;
	$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(append_data(items_catalog), 500);
}
else if(category == "electronics"){
	items_catalog = items_mobile;
	filter_items = filter_items_mobile;
		            	$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(append_data(items_catalog), 500);
}
else if(category == "music"){
	items_catalog = items_music;
	filter_items = filter_items_music;
		$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(append_data(items_catalog), 500);
}
else if(category == "furniture"){
	items_catalog = items_furniture;
	filter_items = filter_items_furniture;
		$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(append_data(items_catalog), 500);
}else{
	append_data(items_catalog);
}



function apply_filter_tags(filter_array){
	for(var filt in filter_array){
		if(filt == "sort"){
			for(var filt_item in filter_array[filt]){
				tags.addTag("sort_"+filt_item);
				if(filt_item == "ph2l")sort_ph2l();
				else if(filt_item == "pl2h")sort_pl2h();
				break;
			}
			continue;
		}
		for(var filt_item in filter_array[filt]){
			tags.addTag("filter_"+filt+"_"+filt_item);
		}
	}
}

function append_data(items){
	$("#catalog_products").html("");
	var no_item = true;
	console.log(items);
	for(var item in items){
		var condition = true;
		for(var filter in filters){
			if(filter == "sort")continue;
			if(filter == "price"){
				if(Object.keys(filters["price"]).length == 0)continue;
				var condition_temp = false;
				for(var i in filters["price"]){
					var price_condition = i.split("-");
				//	console.log("For price:"+price_condition);
					if(price_condition[1] == "0"){
						condition_temp = condition_temp || (items[item]["mrp"] >= price_condition[0]);
					}
					else {
						condition_temp = condition_temp || ((items[item]["mrp"] >= price_condition[0]) && (items[item]["mrp"] <= price_condition[1]));

					}
				}
				condition = condition && condition_temp;	
			}
			else{
				if(Object.keys(filters[filter]).length == 0)continue;
				var condition_temp = false;
				for(var i in filters[filter]){
					condition_temp = condition_temp || (items[item][filter] == i);
				}
				condition = condition && condition_temp;
				console.log("For brand:"+condition_temp);
			}
		}

		if(condition){
		//console.log("Condition"+condition);
			$("#catalog_products").append('<div class="col-sm-4 col-lg-4 col-md-4">\
                        <div class="thumbnail item_box">\
                	        <input type="hidden" class="item_id" value="'+item+'">\
                            <img src="'+items[item]["thumbnail"]+'" style="height:250px;width:auto" alt="http://placehold.it/320x150">\
                            <div class="caption">\
                                <h4 class="pull-right">&#8377;'+items[item]["mrp"]+'</h4>\
                                <h4><a>'+items[item]["name"]+'</a>\
                                </h4>\
                                <p>'+items[item]["description"]+'</p>\
                            </div>\
                            <div class="ratings">\
                                <p class="pull-right">12 reviews</p>\
                                <p>\
                                    <span class="glyphicon glyphicon-star"></span>\
                                    <span class="glyphicon glyphicon-star"></span>\
                                    <span class="glyphicon glyphicon-star"></span>\
                                    <span class="glyphicon glyphicon-star"></span>\
                                    <span class="glyphicon glyphicon-star-empty"></span>\
                                </p>\
                            </div>\
                        </div>\
                    </div>');
		no_item = false;
		}else{
			
		}


	}
	if(no_item)$("#catalog_products").append('<div class="col-sm-12"><p>No results found</p></div>');
			
			$(".item_box").click(function(){
					console.log(this);
				var item_Id = $(this).find(".item_id").val();

				var product_obj  = {
					"item_id": item_Id,
					"filter": filters,
					"category": category 
				}
				var producturl = encodeURIComponent(JSON.stringify(product_obj));
				location.assign("./product-details.html?product="+producturl);
			});
}

function load_filters(){
	$("#filters").html("");
		apply_filter_tags(filters);
		for(var filter_item in filter_items){
			if(filter_item== "price"){
				var filter_append = '<form role="form">\
	                            <label>'+capitalize(filter_item)+'</label>\
	                            <div id="searchlist_'+filter_item+'" class="list-group" style="overflow-y:auto;">';
			}else{
				var filter_append = '<form role="form">\
	                            <label>'+capitalize(filter_item)+'</label>\
	                            <div class="form-group margin-bottom-0">\
	                                <input class="form-control" id="searchinput_'+filter_item+'" type="search" placeholder="Search..." />\
	                            </div>\
	                            <div id="searchlist_'+filter_item+'" class="list-group" style="max-height:200px;height:200px;overflow-y:auto;">';
			}
		
		
		if(filter_item== "price"){
			for(var each_item in filter_items[filter_item]){

				if(filter_item in filters){
					console.log(each_item);
					if(each_item in filters[filter_item])var checkitem = "checked";
					else var checkitem = "";
				}else var checkitem = "";
				if(each_item[0] == 0)each_item2 = "less than " + each_item.split("-")[1];
				else if(each_item.split("-")[1] == 0)each_item2 = "more than " + each_item.split("-")[0];
				else{
					each_item2 = each_item;
				}
        	filter_append += '\
        	<div class="checkbox list-group-item">\
                                  <label><input type="checkbox" '+checkitem+' class="filter_item" value="'+each_item+'"><span>'+each_item2+'</span></label>\
                                </div>';
			}
		}
        else{
        	for(var each_item in filter_items[filter_item]){
        		if(filter_item in filters){
					console.log(each_item);
					if(each_item in filters[filter_item])var checkitem = "checked";
					else var checkitem = "";
				}else var checkitem = "";
        	filter_append += '\
        	<div class="checkbox list-group-item">\
                                  <label><input type="checkbox" '+checkitem+' class="filter_item" value="'+each_item+'"><span>'+each_item+'</span></label>\
                                </div>';
	        }
        }
        filter_append += '\
        </div>\
                            </div>\
                        </form>';
        $("#filters").append(filter_append);
        $('#searchlist_'+filter_item).btsListFilter('#searchinput_'+filter_item, {itemChild: 'span'});
	}

}
load_filters();


$(".filter_item").click(function(){
	var checked = this.checked;
	var $this1 = $(this);
	var filter_type = $(this).parent().parent().parent().attr("id").split("earchlist_")[1];
	if(checked){
		tags.addTag("filter_"+filter_type+"_"+$(this).val());
		$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(function(){
	            		location.replace("./catalog.html?category="+category+"&filters="+encodeURIComponent(JSON.stringify(filters)));
	            	}, 500);	
	}else{
		
		$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	        setTimeout(function(){
			tags.removeTag("filter_"+filter_type+"_"+$this1.val());
		}, 500);
	        	
	}
  
	
});



function sortData_price_aesc(data) {
    var sorted = [];
    Object.keys(data).sort(function(a,b){
        return data[a].mrp > data[b].mrp ? -1 : 1
    }).forEach(function(key){
        sorted.push(data[key]);
    });
    return sorted;
}
function sortData_price_desc(data) {
    var sorted = [];
    Object.keys(data).sort(function(a,b){
        return data[a].mrp < data[b].mrp ? -1 : 1
    }).forEach(function(key){
        sorted.push(data[key]);
    });
    return sorted;
}
function sort_ph2l(){
	$("#dLabel").html('Sort by Price - High to Low<span class="caret"></span>');
		$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(append_data(sortData_price_aesc(items_catalog)), 700);
}
function sort_pl2h(){
	$("#dLabel").html('Sort by Price - Low to High<span class="caret"></span>');
		$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(append_data(sortData_price_desc(items_catalog)), 700);
}
$(".sort-option").click(function(){
	var sort_option = $(this).find("a").text();
	if(sort_option == "Price - High to Low"){
		sort_ph2l();
		if(tags.hasTag("sort_ph2l")){}
		else tags.addTag("sort_ph2l");
		$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(function(){
	            		location.replace("./catalog.html?category="+category+"&filters="+encodeURIComponent(JSON.stringify(filters)));
	            	}, 1000);
	}
	else if(sort_option == "Price - Low to High"){
		sort_pl2h();
		if(tags.hasTag("sort_pl2h")){}
		else tags.addTag("sort_pl2h");
	$("#catalog_products").html('<div class="col-xs-12 text-center" style="padding-top:50px;"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" style="color:#000; font-size:1.3em;"></span></div>');
	            	setTimeout(function(){
	            		location.replace("./catalog.html?category="+category+"&filters="+encodeURIComponent(JSON.stringify(filters)));
	            	}, 1000);
	}
});

var toggle_filter = true;
if(media_sm.matches){
	$("#filters").hide();
	$("#view-filters").show();
	if(sessionStorage.getItem("filter") == "true"){
		console.log(sessionStorage.getItem("filter"));
		$("#filters").show();
		$("#view-filters-btn").html("Hide filters");
		toggle_filter= false;
	}	
	bool_sm = true;
}
else{
    bool_sm = false;
}

$("#view-filters-btn").click(function(){
	toggle_filter = !toggle_filter; 
	$("#filters").slideToggle("Slow");
	if(toggle_filter){$("#view-filters-btn").html("View Filters");sessionStorage.setItem("filter", false);}
	else 
		{$("#view-filters-btn").html("Hide filters");  sessionStorage.setItem("filter", true);}
});
var bool_sm = true;

$(window).resize(function(){
    if(media_sm.matches){
    	if(!bool_sm){
    		$("#filters").slideUp("fast");
    		$("#view-filters").show();
    		$("#view-filters-btn").html("View Filters");
    	}
    	bool_sm = true;
    }else{
    	if(bool_sm){
    		$("#filters").slideDown("fast");
    		$("#view-filters").hide();
    		sessionStorage.setItem("filter", true);
    	}
    	bool_sm = false;
    }
});


});



var filters = {
/*	"price": {
		"0-100":true,
		"100-200":true,
		"45000-0":true
	},
	"brand": {
		"Microsoft":true
	}*/
}

var filter_items = {
	"price": {
		"0-100":true,
		"100-200":true,
		"200-1000":true,
		"1000-5000":true,
		"5000-20000":true,
		"20000-42000":true,
		"42000-0":true
	}
}

var filter_items_mobile = {
	"price": {
		"0-2000":true,
		"2000-5000":true,
		"5000-15000":true,
		"15000-0":true
	},
	"brand": {
		"Microsoft":true,
		"Apple":true,
		"Google":true,
		"Nokia":true,
		"Micromax":true,
		"Spice":true,
		"Ericson":true
	},
	"shop": {
		"Nokia Store": true,
		"Microsoft Store": true,
		"eWorld": true,
		"Other": true
	}
}
var filter_items_books = {
	"price": {
		"0-100":true,
		"100-299":true,
		"299-600":true,
		"600-0":true
	},
	"publisher": {
		"Publisher 1":true,
		"Publisher 2":true,
		"Publisher 3":true,
		"Publisher 4":true,
		"Publisher 5":true,
		"Publisher 6":true,
		"Publisher 7":true
	},
	"author": {
		"J K Rowling": true,
		"Sydney Sheldon": true,
		"Satyajit Ray": true,
		"Stephen hawking": true,
		"Chetan Bhagat": true,
		"Other": true
	},
	"genre": {
		"comedy": true,
		"thriller": true,
		"murder mystery": true,
		"romance": true,
		"drama": true,
		"science": true,
		"Other": true
	}
}
var filter_items_music = {
	"price": {
		"0-100":true,
		"100-500":true,
		"500-1000":true,
		"1000-0":true
	},
	"artist": {
		"Pink Floyd":true,
		"Led Zeppelin":true,
		"John Lenon":true,
		"Bob Dylan":true,
		"Coldplay":true,
		"Dream Theater":true
	},
	"genre": {
		"Rock": true,
		"Alternative Rock": true,
		"Classic": true,
		"Soft Rock": true,
		"Heavy Metal": true
	}
}
var filter_items_furniture = {
	"price": {
		"0-2000":true,
		"200-7000":true,
		"7000-15000":true,
		"15000-0":true
	},
	"type": {
		"Sofa":true,
		"Bed":true,
		"Table":true,
		"Chair":true,
		"Recliner":true,
		"Other":true
	},
	"built": {
		"wooden": true,
		"plastic": true,
		"glass": true,
		"Other":true
	}
}
var filter_items_clothing = {
	"price": {
		"0-100":true,
		"100-500":true,
		"500-1000":true,
		"1000-5000":true,
		"5000-0":true
	},
	"brand": {
		"West Side":true,
		"Pantaloons":true,
		"Levis":true,
		"Lifestyle":true,
		"Raymond":true,
		"Woodland":true,
		"Other":true
	},
	"type": {
		"Shirt": true,
		"Jeans": true,
		"Trousers": true,
		"Blazer and Suit": true,
		"Sweater and Jacket": true,
		"Shoes": true
	},
	"gender": {
		"Men": true,
		"Women": true,
		"Kids": true
	}
}
var filter_items_sports = {
	"price": {
		"0-500":true,
		"500-2000":true,
		"2000-5000":true,
		"5000-0":true
	},
	"brand": {
		"Puma":true,
		"Addidas":true,
		"Reebok":true,
		"Spykar":true,
		"Other":true
	},
	"sport": {
		"Football": true,
		"Cricket": true,
		"Table tennis": true,
		"Tennis": true,
		"Basketball": true,
		"Boxing": true,
		"Mountaineering": true,
		"Other": true
	}
}
/*var items_all = {
	"0001":{
		name: "Lumia 1150",
		mrp: 40000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: "../img/item_id_1.png",
		in_cart: false,
		brand: "Microsoft",
		color: "blue",
		shop: "Microsoft Store",
		os: "Windows",
		ram: 2,
		internal_storage: 32,
		search_option: true
	},
	"0002":{
		name: "Iphone 7s",
		mrp: 60000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: "../img/item_id_1.png",
		thumbnail: "../img/products/thumbnail/iphone1.png",
		in_cart: false,
		brand: "Apple",
		color: "blue",
		shop: "eWorld",
		os: "Windows",
		ram: 2,
		internal_storage: 32,
		search_option: true
	},
	"0003":{
		name: "Nexus 10",
		mrp: 47000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: "../img/item_id_1.png",
		in_cart: false,
		brand: "Google",
		color: "blue",
		shop: "eWorld",
		os: "Windows",
		ram: 2,
		internal_storage: 32,
		search_option: true
	},
	"0004":{
		name: "Iphone 5",
		mrp: 47000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: "../img/item_id_1.png",
		in_cart: false,
		brand: "Apple",
		color: "blue",
		shop: "Other",
		os: "Other",
		ram: 2,
		internal_storage: 32,
		search_option: true
	},
	"0005":{
		name: "Nexus 5",
		mrp: 47000,
		discount: 20,
		outOfStock: false,
		rating: 4,
		reviews: 12,
		description: "One of the best smartphones",
		image_url: "../img/item_id_1.png",
		in_cart: false,
		brand: "Google",
		color: "blue",
		shop: "Other",
		os: "Windows",
		ram: 2,
		internal_storage: 32,
		search_option: true
	},

}*/
var items_mobile = {
	"0001":{
		name: "Lumia 1150",
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
		mrp: 47000,
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
	}

}

var items_books = {
	"1001":{
		name: "Harry Potter",
		mrp: 40000,
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
		mrp: 60000,
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
		mrp: 47000,
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
		mrp: 47000,
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
		mrp: 47000,
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
	}

}

/*
var category = {
	sports:{

	},
	books:{

	},
	electronics:{
		mobile: items_mobile,
		tablets: items_tablets,
		laptops: items_laptops
	},
	clothing:{
		men: items_men,
		women:items_women,
		kids: items_kids
	}
}*/