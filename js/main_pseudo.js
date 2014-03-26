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
	
	$(".nthChild").click(function() {
		var currentClass = $(this).attr("class");
	    $("#nth-child").attr('class', currentClass);
    });
	$("#test1").click(function(){
	    var currentVal = $("#text1").val();
	    $('#nth-child :nth-child('+currentVal+')').css('background-color', '#1c2931');          
	});
	$("#clear1").click(function(){
		$('#nth-child').removeAttr('class');
		$('#nth-child span').removeAttr('style');
		$('#nth-child h2').removeAttr('style');
		$('#nth-child p').removeAttr('style');
	})
	 
	$(".nthLastChild").click(function() {
	    var currentClassLast = $(this).attr("class");
	    $("#nth-last-child").attr('class', currentClassLast);
	});
	$("#test2").click(function(){
	    var currentValLast = $("#text2").val();
	    $('#nth-last-child span:nth-last-child('+currentValLast+')').css('background-color', '#1c2931');          
	});
	$("#clear2").click(function(){
		$('#nth-last-child').removeAttr('class');
	    $('#nth-last-child span').removeAttr('style');
	})
	
	$("#item4 input").click(function(){
        if ($(this).is(":checked")) {
            $("#block4 input").attr('disabled', 'disabled');
        }
    else
        $("#block4 input").removeAttr('disabled');
    })
    
    $("#block14 input").click(function(){
        if ($(this).is(":checked")) {
            $(":root").css("margin", "20px").css("background", "#fff");
        }
    else
        $(":root").css("margin", "0")
    })
    
    $("#item15 input#inpt151").click(function(){
        if ($(this).is(":checked")) {
            $("#block15 img:not([alt])").css("border", "2px solid yellow");
        }
    else
        $("#block15 img:not([alt])").css("border", "2px solid #51818d")
    })
    
    $("#item15 input#inpt152").click(function(){
        if ($(this).is(":checked")) {
            $("#block15 :not(p)").css("color", "yellow");
        }
    else
        $("#block15 :not(p)").css("color", "#e6ffff")
    });
	
	
      
});