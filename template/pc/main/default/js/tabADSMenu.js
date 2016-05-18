function Show_TabADSMenu(tabadid_num,tabadnum,num){
	for(var i=0;i<num;i++){
		if(document.getElementById("tabadcontent_"+tabadid_num+i))
			document.getElementById("tabadcontent_"+tabadid_num+i).style.display="none";	
	}
	for(var i=0;i<num;i++){document.getElementById("tabadmenu_"+tabadid_num+i).parentNode.className="";}
	document.getElementById("tabadmenu_"+tabadid_num+tabadnum).parentNode.className="selected";
	if(document.getElementById("tabadcontent_"+tabadid_num+tabadnum)){
		document.getElementById("tabadcontent_"+tabadid_num+tabadnum).style.display="block";
	}
}