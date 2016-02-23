/*

Author: bgh39679 - Arjun, Aricent
Accepts Range as param , sample function:

$('#example').spinner({
	min:0, 
	max:9999
})


*/
;(function($) {
	/*
		Get the spinner element from where it is clicked,  
		html elements - '.spinner-input', '.spinner-up', '.spinner-down'
		are used. Changing these may cause not to work properly
	*/
	
	$.fn.spinner = function(options) {
		
		var $this = $(this);
		var addMouseDown = false;
		var minusMouseDown = false;
		var addSetTimeOut;
		var minusSetTimeOut;
		var defaults= {
			max : 9999, 
			min : 0, 
		}
	
		var spinnerElement  = $this.find('.spinner-input');
		$.extend( {}, defaults, options );

	
		var increment = function() {
			var value = spinnerElement.val();
			if(value < defaults.max){
				++value;
			}
			spinnerElement.val(value);
			if(addMouseDown){
		        addSetTimeOut = setTimeout(increment, 100);
		    }
		}
	
		var decrement= function() {
			
			var value = spinnerElement.val();
				if(value > defaults.min) {
					--value;
				}
			spinnerElement.val(value);
			
			if(minusMouseDown){
	        	minusSetTimeOut = setTimeout(decrement, 100);
	    	}
		}
	

		$this.find('.spinner-up').mousedown(function(){	
			addMouseDown = true;
			increment();
		});
			
		$this.find('.spinner-up').mouseleave(function(){
			if(addSetTimeOut)
			clearTimeout(addSetTimeOut);
			addMouseDown = false;
		})
			
		$this.find('.spinner-down').mouseleave(function(){
			if(minusSetTimeOut)
			clearTimeout(minusSetTimeOut);
			minusMouseDown = false;
		})
			
		$this.find('.spinner-up').mouseup(function(){
			clearTimeout(addSetTimeOut);
			addMouseDown = false;
		});
		
		$this.find('.spinner-down').mousedown(function(){
			minusMouseDown = true;
			decrement();
		});
		
		$this.find('.spinner-down').mouseup(function(){	
			clearTimeout(minusSetTimeOut);
			minusMouseDown = false;
		});
	}
	
	$.fn.getSpinnerValue = function() {
		return $(this).find('.spinner-input').val();
	}
	
}(jQuery));
