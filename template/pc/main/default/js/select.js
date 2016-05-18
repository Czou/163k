DOMhelp={
	addEvent: function(elm, evType, fn, useCapture){
		if (elm.addEventListener){
			elm.addEventListener(evType, fn, useCapture);
			return true;
		} else if (elm.attachEvent) {
			var r = elm.attachEvent('on' + evType, fn);
			return r;
		} else {
			elm['on' + evType] = fn;
		}
	},
	closestSibling:function(node,direction){
		var tempObj;
		if(direction==-1 && node.previousSibling!=null){
			tempObj=node.previousSibling;
			while(tempObj.nodeType!=1 && tempObj.previousSibling!=null){
				 tempObj=tempObj.previousSibling;
			}
		}else if(direction==1 && node.nextSibling!=null){
			tempObj=node.nextSibling;
			while(tempObj.nodeType!=1 && tempObj.nextSibling!=null){
				 tempObj=tempObj.nextSibling;
			}
		}
		return tempObj.nodeType==1?tempObj:false;
	},
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

	function goSelect(e){
		if(!document.getElementById || !document.createTextNode) return false;
		if(!DOMhelp.cssjs('check',e,'searchtype')){ return false;}
		var ul = DOMhelp.closestSibling(e,1);
		var li = ul.getElementsByTagName('li');
		e.onclick = function(){
			ul.style.display = 'block';
		}
		var timeId;
		ul.onmouseout = function(){
			timeId= setTimeout(function(){ul.style.display = 'none';},500);
		}
		ul.onmouseover = function(){ clearTimeout(timeId);}
		for(var j=0;j<li.length;j++){
			li[j].onclick = function(){
				var testElement = this.getElementsByTagName('a')[0];
				if(testElement.firstChild.nodeType == 3){
				var text = testElement.firstChild.nodeValue;
				}
				e.value=text;
				ul.style.display='none';
				return false;
			}
		}
	}

function init_select(){
	var s = document.getElementsByTagName('input');
	for(var i=0;i<s.length;i++){
		goSelect(s[i]);
	}
}

DOMhelp.addEvent(window, 'load', init_select, false);