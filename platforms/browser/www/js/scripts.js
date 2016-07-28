$(document).ready(function(){


	$("#af-one").click(function(){
		$(".affirmation").hide();
		$(".one").show("slow");
		return false;
	});

	$("#af-two").click(function(){
		$(".affirmation").hide();
		$(".two").show("slow");

		$("#af-one").removeClass("a-one");//remove the class that makes item one grey
		return false;
	});

	$("#af-three").click(function(){
		$(".affirmation").hide();
		$(".three").show("slow");

		$("#af-one").removeClass("a-one");//remove the class that makes item one grey
		return false;
	});

	$("#af-four").click(function(){
		$(".affirmation").hide();
		$(".four").show("slow");

		$("#af-one").removeClass("a-one");//remove the class that makes item one grey
		return false;
	});

	$("#showall").click(function(){
		$(".affirmation").show("slow");

		$("#af-one").removeClass("a-one");//remove the class that makes item one grey
		return false;
	});


});