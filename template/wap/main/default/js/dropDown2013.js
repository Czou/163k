function getObject(objectId) { 
 if(document.getElementById && document.getElementById(objectId)) { 
 return document.getElementById(objectId); 
 } 
 else if (document.all && document.all(objectId)) { 
 return document.all(objectId); 
 } 
 else if (document.layers && document.layers[objectId]) { 
 return document.layers[objectId]; 
 } 
 else { 
 return false; 
 } 
} 

function showHide(e,objname){     
    var obj = getObject(objname),
		inner = $('#list_nav_2013'),
		uls = inner.find('ul:visible'),
		btns = inner.find('.xias');
	
    if(obj.style.display == "none"){
        obj.style.display = "block";
        e.className="xias";
    }else{ 
        obj.style.display = "none";
        e.className="rights";
    }
	uls.css({'display':'none'});
	btns.removeClass('xias').addClass('rights');
}