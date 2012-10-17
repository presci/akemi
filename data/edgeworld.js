self.port.on("resizeEdge", function(){
	console.log("resize called");
	var myframe=document.getElementById("edgeworld");
	if ( !myframe){
	    console.log("myframe not found");
	    return;
	}
	var check_ele = myframe.contentDocument.getElementById("fancast");
	if( !check_ele){
	    console.log("check_ele not found");
	    return;
	}
	console.log("found check_ele");
	// check_ele.style.display="none";
	check_ele.style.height="650";

	
    });