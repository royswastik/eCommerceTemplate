var media_xs = window.matchMedia( "(max-width: 768px)" );
var media_sm = window.matchMedia( "(max-width: 992px)" );
var media_md = window.matchMedia( "(min-width: 992px) and (max-width: 1200px)" );
var media_lg = window.matchMedia( "(min-width: 1200px)" );









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

	var cart_value = cart["info"]["item_count"];

	

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