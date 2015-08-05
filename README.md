JSON Library in javascript
----------
## Usage
* ** link them to you project **
* readJSON.js
* jquery-1.11.3.min.js
* ** usage in code **
```
<script>
	readJSON(url,postItem,Success,Fail);
	function Success(myitems){
		// myitems is json array.
		console.log("Read JSON success");
	}
	function Fail(){
		console.log("Read JSON Fail");
	}
</script>
```