var Xpos = 0;
var Ypos = 0;
var Ypos1 = 0;
var Ygravity = 0.9;
var scrollPos = 0;
var oldScrollPos = 0;




function FloatMenu() { 
	docWidth = -130; // update document width
	docWidth1 = 775;
	docHeight = document.body.clientHeight+document.documentElement.clientHeight; // update document height
	
	oldScrollPos = scrollPos;
	scrollPos = document.body.scrollTop+document.documentElement.scrollTop; // update scrollbar position
	//if(scrollPos > 600) scrollPos = 580;
	Xpos = docWidth; 
	Xpos1 = docWidth1; 
	Yboundary = scrollPos + 25;
	if($$("floater1"))
	{
		if ($$("floater1").offsetTop < Yboundary - 10) // Object is behind boundary
		Ypos += 3;
		if ($$("floater1").offsetTop > Yboundary + 10) // Object is past boundary
		Ypos -= 3;
	}
	
	if($$("floater2"))
	{
		if ($$("floater2").offsetTop < Yboundary - 10) // Object is behind boundary
		Ypos1 += 3;
		if ($$("floater2").offsetTop > Yboundary + 10) // Object is past boundary
		Ypos1 -= 3;
	}
	
	Ypos *= Ygravity; // Slow object down
	Ypos1 *= Ygravity; // Slow object down
	
	if($$("floater1"))
	{
		$$("floater1").style.pixelLeft = Xpos + 135;
		$$("floater1").style.pixelTop += Ypos; // Make object bounce
	}
	//floater1.style.pixelLeft = Xpos1 + 116;
	if($$("floater2")){
		$$("floater2").style.pixelRight = 15;
		$$("floater2").style.pixelTop += Ypos1; // Make object bounce
	}
}

window.setInterval("FloatMenu()", 30); 
