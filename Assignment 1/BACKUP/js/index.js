$(document).ready( () => {
			$("#save").click( () => {
				var name = $("#name").val();
				var email = $("#email").val();
				var room = $("#room").val();
				var width = $("#width").val();
				var length = $("#length").val();
				var colour = $("#colour").val();
				var paint = $("#paint").val();
				localStorage.setItem("name",name);
				localStorage.setItem("email",email);
				localStorage.setItem("room",room);
				localStorage.setItem("width",width);
				localStorage.setItem("length",length);
				localStorage.setItem("colour",colour);
				localStorage.setItem("paint",paint);
				$(".content").append("<br> Saved!");
			});	
		});
		
$(document).ready( () => {
	$("#quote").click( () => {
		var name = localStorage.getItem("name");
		var email = localStorage.getItem("email");
		var room = localStorage.getItem("room");
		var l = localStorage.getItem("length");
		var w = localStorage.getItem("width");
		var area = l* w * 4;
		var colour = localStorage.getItem("colour");
		var cans = area/400;
		var totalcans = Math.ceil(cans);
		var paint = localStorage.getItem("paint");
		var ppc;
		
		if (paint == 'standard'){
			ppc = 24.99;
		}
		else if (paint == 'premium'){
			ppc = 39.99;
		}
		
		var finalprice = ppc * totalcans * 1.13;
		
		$(".header").html("<h1>Quotation System</h1>");
		
		$(".content").css("background","white");
		
		$(".content").html("<br>Your name: " + name +"<br>" +
		"Your email: " + email + "<br>" +
		"Room selected: " + room.toUpperCase() + " ROOM<br>"+
		"Total room area: " + area.toFixed(2) + " sq ft.<br>" +
		"Total cans: " + totalcans + " " + paint.toUpperCase() +"<br>"+
		"Final Price: $" + finalprice.toFixed(2) + "<p></p>");
		
		$(".footer").css("background",colour) ;
		
		if (colour == 'black'){
			$(".footer").css("background","white") ;
		}
		
		$(".footer").prepend("<br> This is the room colour you chose: " + colour.toUpperCase() +"!<br>");

	});	
});