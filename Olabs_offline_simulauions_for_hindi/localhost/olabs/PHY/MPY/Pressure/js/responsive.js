// Responsive Design Positioning For Toggled Screen
//04/004/2017
//@author-RESPONSIVE

function checkWidth(){
	var width=$("#sidebar-wrapper").width();
	var parentWidth=$("#sidebar-wrapper").offsetParent().width();
	var percent=100*width/parentWidth;
	var winWidth=$(window).width();	
	if(percent=="0"|| winWidth<768)
		{
			$("#tooltipText").css({ "font-size": "89%"})
		
		}
	else	
		{
			$("#tooltipText").css({ "font-size": "100%"})
			
		}
		
		var numInput = document.querySelector('input');
		numInput.addEventListener('input', function(){
			var num = this.value.match(/^\d+$/);
			if (num === null) {
				// If we have no match, value will be empty.
				this.value = "";
			}
		}, false)
	

}
