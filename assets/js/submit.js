


$('form').submit(function (e) {

	e.preventDefault();
	
	var data = $(this).serialize();

	$.ajax({
		type: "POST",
		url: "dispatcher/",
		data: data,
		dataType: "json",
		error: function (res){
			alert("An error has occured! Please try again");
		},
		success: function (res){
			if(res.status==="Success"){

				$('#info').html(res.message);

			}else{
				alert(res.message);
			}
		}
	});
});