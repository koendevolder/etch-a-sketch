/* global $ */

$(document).ready(function () {
    var down = false;
    
    for (var i = 0; i < 4096; i++) {
            $('.container').append('<div class="grid" style="width: 1.5625%; height: 1.5625%;"></div>');
    }
    
    $('#clearButton').click(function () {
        $('.grid').css("background-color","white");
    });
    
    $(document).mousedown(function() {
    	down = true;
	}).mouseup(function() {
    	down = false;  
	});

	$(".grid").mouseout(function() {
    	if(down) {
            $(this).css("background-color", "black");
    	} 
	});
});

/*
    $('#updateButton').click(function () {
        var canvas = $('input[name=canvas]').val();
        for (var i = 0; i < canvas; i++) {
            $('.container').append('<div class="grid"></div>');
        }
    });
    
    $(document).on('click', '.grid', function() {
        $(this).css("background-color", "black");
    });
    
https://filipjovanovic.github.io/Etch-A-Sketch/
*/