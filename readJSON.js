var items;
function readJSON(myUrl , postItem, ReadSuccess,ReadFail){
	$.ajax({
		url: myUrl,
		type:'post',
		//dataType: 'json',
		data: postItem,
		//contentType: 'application/html; charset=utf-8',
        success: function (resp) {
			items = JSON.parse(resp);
			console.log(items);
			ReadSuccess(items);
		},
		error: function (resp) {
			ReadFail();
		}	
	});
}