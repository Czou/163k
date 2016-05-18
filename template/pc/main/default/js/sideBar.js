function sidebar_collapse(){
	var warp = document.getElementById('node_box');
	var alink = document.getElementById('sidebar_menu');
	var main = document.getElementById('mainbar');
	var side = document.getElementById('sidebar');
	
	if(alink.className=="collapsed_open"){
		alink.innerHTML="打开边栏";
		alink.className="collapsed_close";
		DOMhelp.cssjs('swap',warp,'bg_close','bg_open');
	}else{
		alink.innerHTML="关闭边栏";
		alink.className="collapsed_open";
		DOMhelp.cssjs('swap',warp,'bg_open','bg_close');
	}
}
DOMhelp={
cssjs:function(a,o,c1,c2){
		switch (a){
			case 'swap':
				o.className=!DOMhelp.cssjs('check',o,c1)?o.className.replace(c2,c1):o.className.replace(c1,c2);
			break;
			case 'add':
				if(!DOMhelp.cssjs('check',o,c1)){o.className+=o.className?' '+c1:c1;}
			break;
			case 'remove':
				var rep=o.className.match(' '+c1)?' '+c1:c1;
				o.className=o.className.replace(rep,'');
			break;
			case 'check':
				var found=false;
				var temparray=o.className.split(' ');
				for(var i=0;i<temparray.length;i++){
					if(temparray[i]==c1){found=true;}
				}
				return found;
			break;
		}
	}
}