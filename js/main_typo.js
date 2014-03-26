$(document).ready(function(){
	var currentNum = $("#counterVal").text();
	$("#item"+currentNum).fadeIn();
	$("#block"+currentNum).fadeIn();
	$("#num"+currentNum).addClass("activ");
	$(".carrousel").click(function() {
		$(".tlo3").show();
		var num = $(this).attr("id").split("num")[1];
		if (num != currentNum) {
			$(this).addClass("activ");
			$("#num"+currentNum).removeClass("activ");
			$("#item"+currentNum).hide();
			$("#item"+num).fadeIn();
			$("#block"+currentNum).hide();
			$("#block"+num).fadeIn();
			currentNum = num;
		}
	});
	
	$("#item1 input#inpt1").click(function(){
        if ($(this).is(":checked")) {
            $("#block1 h2").addClass('stroke');
        }
    else
        $("#block1 h2").removeClass('stroke');
    })
    
    $("#item1 input#inpt2").click(function(){
        if ($(this).is(":checked")) {
            $("#block1 h2").addClass('fillColor');
        }
    else
        $("#block1 h2").removeClass('fillColor');
    })
    
    $("#item1 input#inpt3").click(function(){
        if ($(this).is(":checked")) {
            $("#block1 h2").addClass('fillTransparent');
        }
    else
        $("#block1 h2").removeClass('fillTransparent');
    })
    
    $("#item1 input#inpt4").click(function(){
        if ($(this).is(":checked")) {
            $("#block1 h2").addClass('shadow');
        }
    else
        $("#block1 h2").removeClass('shadow');
    })
    
    $("#item1 input#inpt5").click(function(){
        if ($(this).is(":checked")) {
            $("#block1 h2").addClass('shadow1');
        }
    else
        $("#block1 h2").removeClass('shadow1');
    })
    
    $("#item1 input#inpt6").click(function(){
        if ($(this).is(":checked")) {
            $("#block1 h2").addClass('shadow2');
        }
    else
        $("#block1 h2").removeClass('shadow2');
    })
    
    $("#item1 input#inpt7").click(function(){
        if ($(this).is(":checked")) {
            $("#block1 h2").addClass('shadow3');
        }
    else
        $("#block1 h2").removeClass('shadow3');
    })
    
    $("#item1 input#inpt8").click(function(){
        if ($(this).is(":checked")) {
            $("#block1 h2").addClass('font');
        }
    else
        $("#block1 h2").removeClass('font');
    })
    
    $("#item1 input#inpt9").click(function(){
        if ($(this).is(":checked")) {
            $("#block1 h2").addClass('tlo');
        }
    else
        $("#block1 h2").removeClass('tlo');
    })
    
    $("#item2 input#inpt12").click(function(){
        if ($(this).is(":checked")) {
            $("#block2 h2").addClass('below');
        }
    else
        $("#block2 h2").removeClass('below');
    })
    
    $("#item2 input#inpt13").click(function(){
        if ($(this).is(":checked")) {
            $("#block2 h2").addClass('belowOdstep');
        }
    else
        $("#block2 h2").removeClass('belowOdstep');
    })
    
    $("#item2 input#inpt14").click(function(){
        if ($(this).is(":checked")) {
            $("#block2 h2").addClass('belowGradient');
        }
    else
        $("#block2 h2").removeClass('belowGradient');
    })
    
    $("#item2 input#inpt15").click(function(){
        if ($(this).is(":checked")) {
            $("#block2 h2").addClass('above');
        }
    else
        $("#block2 h2").removeClass('above');
    });
      
});