/* global $ */

$(document).ready(function () {
    gridCreate();
	gridUpdate();
	colorDiv();
	clearCanvas();
});

var userInput = 64;

function gridCreate() {
    var gridSpacing = 100/userInput;

    for (var i = 0; i < userInput * userInput; i++) {
        $('.container').append('<div class="grid"></div>');
    }
    
	var elements = document.querySelectorAll('.grid');

	for (var i = 0; i < elements.length; i++) {
    	elements[i].style.width = gridSpacing + "%";
    	elements[i].style.height = gridSpacing + "%";
	}
}

function gridUpdate() {
 	$("#updateButton").click(function() {
		userInput = $("#densityAdjuster").val();
    
    	$("#container").empty();

		gridCreate();
		colorDiv();
		clearCanvas();
	});
}

function colorDiv() {
    var down = false;

    $(document).mousedown(function() {
    	down = true;
	}).mouseup(function() {
    	down = false;  
	});

	$(".grid").mouseout(function() {
    	if (down) {
            $(this).css("background-color", "black");
    	} 
	});
}

function clearCanvas() {
    $('#clearButton').click(function () {
       $('.grid').css("background-color","white");
    });
}

/*
https://filipjovanovic.github.io/Etch-A-Sketch/
*/