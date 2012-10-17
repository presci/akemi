var widgets=require("widget");
var tabs=require("tabs");
var self=require("self");
var windows=require("windows");

var widget=widgets.Widget({
	id: "jquery-link",
	label:"Jquery Website",
	contentURL:"http://www.jquery.com/favicon.ico",
	onClick:function(){
	   worker= tabs.activeTab.attach({
		    contentScriptFile:self.data.url("edgeworld.js"),
		});
	   worker.port.emit("resizeEdge");
	}
});

