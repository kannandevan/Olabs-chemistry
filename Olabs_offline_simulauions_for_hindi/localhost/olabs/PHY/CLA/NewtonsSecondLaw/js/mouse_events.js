
function touchHandler(event)
{
	
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
         switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type="mousemove"; break;        
        case "touchend":   type="mouseup"; break;
        default: return;
    }

             //initMouseEvent(type, canBubble, cancelable, view, clickCount, 
    //           screenX, screenY, clientX, clientY, ctrlKey, 
    //           altKey, shiftKey, metaKey, button, relatedTarget);
    
    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                              first.screenX, first.screenY, 
                              first.clientX, first.clientY, false, 
                              false, false, false, 0/*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function initEvent() 
{

    var canvas1=document.getElementById("drag1");
	var canvas2=document.getElementById("drag2");
	var canvas3=document.getElementById("drag3");
	var canvas4=document.getElementById("drag4");
	
	canvas1.addEventListener("touchstart", touchHandler, true);
  	canvas1.addEventListener("touchmove", touchHandler, true);
    canvas1.addEventListener("touchend", touchHandler, true);
    canvas1.addEventListener("touchcancel", touchHandler, true);    
	
	canvas2.addEventListener("touchstart", touchHandler, true);
  	canvas2.addEventListener("touchmove", touchHandler, true);
    canvas2.addEventListener("touchend", touchHandler, true);
    canvas2.addEventListener("touchcancel", touchHandler, true);    
	
	canvas3.addEventListener("touchstart", touchHandler, true);
  	canvas3.addEventListener("touchmove", touchHandler, true);
    canvas3.addEventListener("touchend", touchHandler, true);
    canvas3.addEventListener("touchcancel", touchHandler, true); 
	 
	canvas4.addEventListener("touchstart", touchHandler, true);
  	canvas4.addEventListener("touchmove", touchHandler, true);
    canvas4.addEventListener("touchend", touchHandler, true);
    canvas4.addEventListener("touchcancel", touchHandler, true);   
}


