﻿var Dom={};Dom.get=function(a){return(typeof a=="object")?a:document.getElementById(a)};Function.prototype.method=function(a,b){this.prototype[a]=b;return this};if(typeof Alpha=="undefined"){var Alpha={}}(function(){Alpha.register=function(a){function b(f){this.elements=[];for(var e=0,c=f.length;e<c;++e){var d=f[e];if(typeof d=="string"){d=document.getElementById(d)}this.elements.push(d)}}b.method(a.each,function(e){for(var d=0,c=this.elements.length;d<c;++d){e.call(this,this.elements[d])}return this}).method(a.on,function(d,c){var e=function(g){var h=d.split(",");for(var f=0;f<h.length;f++){var j=h[f];if(window.addEventListener){g.addEventListener(j,c,false)}else{if(window.attachEvent){g.attachEvent("on"+j,c)}}}};this.each(function(f){e(f)});return this}).method(a.hide,function(){this.each(function(c){if(c===null){return}c.style.display="none"});return this}).method(a.show,function(){this.each(function(c){if(c===null){return}c.style.display="block"});return this}).method(a.toggle,function(){this.each(function(c){if(c.style.display=="none"){c.style.display="block"}else{c.style.display="none"}});return this}).method(a.create,function(d,e,c){var d=document.createElement(d);d.setAttribute("id",e);if(c){c.call(this,d)}return this}).method(a.append,function(c){this.each(function(d){d.appendChild(c)});return this}).method(a.setStyle,function(e,c){var d=function(f){if(f===null){return}f.style[e]=c};this.each(function(f){d(f)});return this}).method(a.setCss,function(c){for(var d in c){if(!c.hasOwnProperty(d)){continue}this.setStyle(d,c[d])}return this});window[a.namespace]=function(){return new b(arguments)};Alpha.extendChain=function(c,d){b.method(c,d)}}})();Alpha.register({namespace:"$$",each:"each",on:"on",hide:"hide",show:"show",toggle:"toggle",create:"create",append:"append",setStyle:"setStyle",setCss:"setCss"});var Ylmf={screenWidth:window.screen.width,Browser:{ie:/msie/.test(window.navigator.userAgent.toLowerCase()),ie6:/msie 6.0/.test(window.navigator.userAgent.toLowerCase()),moz:/gecko/.test(window.navigator.userAgent.toLowerCase()),opera:/opera/.test(window.navigator.userAgent.toLowerCase()),safari:/safari/.test(window.navigator.userAgent.toLowerCase())},Cookie:{set:function(b,d,a,e,c){if(typeof a=="undefined"){a=new Date(new Date().getTime()+1000*3600*24*30)}document.cookie=b+"="+escape(d)+((a)?"; expires="+a.toGMTString():"")+((e)?"; path="+e:"; path=/")+((c)?";domain="+c:"")},get:function(b){var a=document.cookie.match(new RegExp("(^| )"+b+"=([^;]*)(;|$$)"));if(a!=null){return unescape(a[2])}return null},clear:function(a,c,b){if(this.get(a)){document.cookie=a+"="+((c)?"; path="+c:"; path=/")+((b)?"; domain="+b:"")+";expires=Fri, 02-Jan-1970 00:00:00 GMT"}}},getStyle:function(b,a){if(document.defaultView){return document.defaultView.getComputedStyle(b,null).getPropertyValue(a)}else{a=a.replace(/\-([a-z])([a-z]?)/ig,function(e,d,c){return d.toUpperCase()+c.toLowerCase()});return b.currentStyle[a]}},Ajax:function(c,j){var h;if(typeof XMLHttpRequest!=="undefined"){h=new XMLHttpRequest()}else{var b=["Microsoft.XmlHttp","MSXML2.XmlHttp","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.5.0"];for(var d=0,a=b.length;d<a;d++){try{h=new ActiveXObject(b[d]);break}catch(f){}}}h.onreadystatechange=g;function g(){if(h.readyState<4){return}if(h.status!==200){return}if(h.readyState===4){j(h)}}h.open("GET",c,true);h.send("")},JsLoader:function(d,a,e,c){var b=document.createElement("script");if(c){b.setAttribute("charset",c)}else{b.setAttribute("charset","utf-8")}b.setAttribute("type","text/javascript");b.setAttribute("src",d);b.id=a;document.getElementsByTagName("head")[0].appendChild(b);if(e){if(Ylmf.Browser.ie){b.onreadystatechange=function(){if(this.readyState=="loaded"||this.readyStaate=="complete"){e()}}}else{if(Ylmf.Browser.moz){b.onload=function(){e()}}else{e()}}}},addFav:function(a){if(document.all){window.external.AddFavorite(location.href,a)}else{if(window.sidebar){window.sidebar.addPanel(a,location.href,"")}else{if(window.opera&&window.print){return true}}}},setHomepage:function(a){if(Ylmf.Browser.moz){alert("\u8bbe\u5b9a\u5931\u8d25\uff01\u8be5\u64cd\u4f5c\u4e0d\u652f\u6301FireFox\u6d4f\u89c8\u5668\uff01")}else{a.style.behavior="url(#default#homepage)";a.setHomePage(location.href)}}};

var hideSetting=false;var City="";City=Ylmf.Cookie.get("city");var showMoreweather=false;if(Ylmf.Cookie.get("clear")==null){clear();Ylmf.Cookie.set("clear",1)}function clear(){}$$(window).on("load",function(){$$(document.body).on("click",function(g){if(k=="setting"||k=="setting2"){$$("weather-box").hide();$$("setting-box").toggle()}else{if(hideSetting==true||k=="setting-close"){$$("setting-box").hide()}}if(k=="setting-reset"){setStyle(0);Ylmf.Cookie.clear("layout");Ylmf.Cookie.clear("style");Ylmf.Cookie.clear("font");Ylmf.Cookie.clear("bg");window.location.reload()}if(k=="simple_w"){$$("weather-box").toggle()}if(k=="weather-close"){$$("weather-box").hide()}if(k=="change-city"){var j=document.getElementById("city");if(Ylmf.getStyle(j,"display")=="none"){$$("weather-setting").hide();$$("city").show()}else{$$("weather-setting").show();$$("city").hide()}}if(k=="city-button"){$$("weather-setting").hide();$$("city").show();Ylmf.Cookie.set("province",document.getElementById("w_pro").value);Ylmf.Cookie.set("city",document.getElementById("w_city").value);var d=document.getElementById("w_city");settingCity(d.options[d.selectedIndex].innerHTML,d.value)}if(k=="cslayout"){if(f.className==""){f.className="alignleft";Ylmf.Cookie.set("cs",1);document.getElementById("list").className="left"}else{f.className="";Ylmf.Cookie.clear("cs");document.getElementById("list").className=""}}$$("suggest").hide();if(k=="setHomepage"){Ylmf.setHomepage(f)}});$$("setting-box").on("mouseover",function(){hideSetting=false});$$("setting-box").on("mouseout",function(){hideSetting=true});Hover(Dom.get("setting"),function(){$$("setting-box").show()});History.show();showColl();if(Ylmf.Browser.ie6){document.execCommand("BackgroundImageCache",false,true);var b=Dom.get("coolsites").getElementsByTagName("dl");for(var c=0,a=b.length;c<a;++c){b[c].onmouseover=function(){this.tmpClass=this.className;this.className="iehover"};b[c].onmouseout=function(){this.className=this.tmpClass}}}if(City){loadWeather(City)}else{Ylmf.JsLoader("http://pfpip.sina.com/ip.js","ipdata",function(){var e=location2.replace("\u5e02","");var d=location1.replace("\u7701","");var g=getCityId(e);var f=getProId(d);Ylmf.Cookie.set("province",f);Ylmf.Cookie.set("city",g);loadWeather(g);showCity("w_pro","w_city",Ylmf.Cookie.get("province"),Ylmf.Cookie.get("city"))},"gb2312")}initProvince("w_pro","w_city");Dom.get("date").innerHTML=clock();if(Ylmf.Cookie.get("layout")=="2"&&Ylmf.screenWidth>=1680){Dom.get("b1").innerHTML+='<iframe style="margin-left:5px;" src="http://www.xiazaiba.com/115.com/hot.htm" width="470" width="470" height="62" frameborder="0"></iframe>'}if(Ylmf.screenWidth<1440){$$("full").hide()}});var getBgimgstyle=false;function skinSelecter(d){var e=Dom.get(d).getElementsByTagName("a");var c=d.split("-")[0];for(var b=0,a=e.length;b<a;++b){$$(e[b]).on("click",function(j){var g=j.srcElement||j.target;var f=g.getAttribute("rel");switch(c){case"layout":Ylmf.Cookie.set("layout",f);window.location.reload();break;case"style":setStyle(f);break;case"font":setFont(f);break;case"bg":setBg(f);iscurBg(g);break}})}}function setStyle(d){var a=["","green/green.css","pink/pink.css"];var d=Number(d);var b=Dom.get("skin");var c="static/skins/";if(a[d]!==""){c+=a[d];Ylmf.Ajax(c,function(){b.href=c;switch(d){case 1:setFont("green");break;case 2:setFont("pink");break;default:setFont("blue")}})}else{b.href="";setFont("blue")}Ylmf.Cookie.set("style",d)}function setLayout(b){var a=["default","layout-medium","layout-full"];setStylesheet(a[b]);Ylmf.Cookie.set("layout",b)}function setFont(b){var a=Dom.get("font");var c="static/css/font/";c+=b;c+=".css";a.href=c;Ylmf.Cookie.set("font",b)}function setBg(a){var d=document.getElementsByTagName("style")[0];var c="";var b=a.split(".")[0];if(a!=="default"){c+=".wrap { background:none;}";c+="body { background:url(static/images/bg/"+a+");}";c+="#bg-setting a.img"+b+"{border:1px solid red;border-bottom-width:2px;}"}else{c+="#bg-setting a.default{border:1px solid red;border-bottom-width:2px;}"}if(d.styleSheet){d.styleSheet.cssText=c}else{d.innerHTML=c}Ylmf.Cookie.set("bg",a)}function getBgimg(b,a){if(a==Ylmf.Cookie.get("bg")){b.style.border="1px solid red";b.style.borderBottomWidth="2px"}else{b.style.border="1px solid #cccccc";b.style.borderBottomWidth="2px"}}function iscurBg(d){var c=document.getElementById("bg-setting").getElementsByTagName("a");for(var b=0,a=c.length;b<a;++b){c[b].style.border="1px solid #cccccc";c[b].style.borderBottomWidth="2px"}d.style.border="1px solid red";d.style.borderBottomWidth="2px"}function Hover(c,b){var a=400;var d;$$(c).on("mouseover",function(){d=window.setTimeout(b,a)});$$(c).on("mouseout",function(){if(d!=undefined){window.clearTimeout(d)}})}function tabMenu(a,g,k,j){var e=document.getElementById(a).getElementsByTagName("a");var l=document.getElementById(a).getElementsByTagName("li");var b=400;var c;var j="click,mouseover";for(var d=0,f=e.length;d<f;d++){$$(e[d]).on(j,function(o){var n=o.srcElement||o.target;function m(){var q=n.getAttribute("rel");var r=document.getElementById(q);var s=function(){for(var u=0,t=l.length;u<t;u++){if(l[u].className){l[u].className=""}}};s();n.parentNode.className="current";if(q=="more"){$$("search-more").show();return}for(var p=0;contentBox=document.getElementById(g+p);p++){$$(contentBox).hide()}$$(r).show();return k(r)}c=window.setTimeout(m,b)});$$(e[d]).on("mouseout",function(m){if(c!=undefined){window.clearTimeout(c)}})}}function setStylesheet(d){var a,b,c=[""];for(a=0;(b=document.getElementsByTagName("link")[a]);a++){if(b.getAttribute("rel").toLowerCase()=="alternate stylesheet"&&b.getAttribute("title")){b.disabled=true;c.push(b);if(b.getAttribute("title")==d){b.disabled=false}}}}var History={save:function(d){try{if(d.tagName=="A"&&d.href.indexOf("http://")==0&&d.href.indexOf("http://"+location.host)!=0&&d.getAttribute("rel")!=="sugitem"){var b=d.href;var a=d.innerHTML;if(a!="undefined"){h=a+"+"+b+"_114la_";h+=unescape(Ylmf.Cookie.get("history"));h=escape(h);Ylmf.Cookie.set("history",h);History.show()}}}catch(c){}return true},show:function(){try{var d=Ylmf.Cookie.get("history");d=unescape(d);var b="";if(d!="null"){history_arg=d.split("_114la_");i=0;linknum=0;len=history_arg.length;for(i=0;i<len;i++){var a=history_arg[i].split("+");if(history_arg[i]!="null"&&b.indexOf(a[0])==-1&&linknum<44){b+='<li><a href="'+a[1]+'" title="'+a[0]+'">'+a[0]+"</a></li>";linknum+=1}}Dom.get("history").innerHTML=b}else{Dom.get("history").innerHTML='<li class="none">\u5bf9\u4e0d\u8d77\uff0c\u60a8\u6ca1\u6709\u4efb\u4f55\u6d4f\u89c8\u8bb0\u5f55</li>'}}catch(c){}},clear:function(){clean=confirm("\u786e\u5b9a\u8981\u6e05\u9664\u6240\u6709\u7684\u6d4f\u89c8\u8bb0\u5f55\uff1f");if(clean){Ylmf.Cookie.clear("history");Dom.get("history").innerHTML='<li class="none">\u5bf9\u4e0d\u8d77\uff0c\u60a8\u6ca1\u6709\u4efb\u4f55\u6d4f\u89c8\u8bb0\u5f55</li>'}}};function searchlog(a){}function logad(){}function favoFuninput(a,b){if(b==1){a.className="int n";if(a.value=="\u7ad9\u540d"||a.value=="\u7f51\u5740"){if(a.value=="\u7f51\u5740"){a.value="http://"}else{a.value=""}}}else{if(!a.value||a.value=="http://"){a.className="int u";if(a.name=="urlName"){a.value="\u7ad9\u540d"}if(a.name=="Url"){a.value="\u7f51\u5740"}}}}function addColl(a){favoname=a.urlName;favourl=a.Url;err=0;if(favoname.value==""||favoname.value=="\u7ad9\u540d"){favoname.className="int e";favoname.value="\u7ad9\u540d";err=1}if(favourl.value==""||favourl.value=="http://"||favourl.value=="\u7f51\u5740"){favourl.className="int e";favourl.value="\u7f51\u5740";return false;err=1}if(favourl.value.indexOf("http://")!==0&&favourl.value.indexOf("https://")!==0){alert('\u7f51\u5740\u683c\u5f0f\u4e0d\u6b63\u786e\uff01\u5fc5\u987b\u4ee5 "http://" \u6216 "https://"\u5f00\u5934\uff01');err=1}if(err==1){return false}saveColl(favoname.value,favourl.value);Dom.get("addColl").style.display="none";Dom.get("addCollmsg").style.display="block";Dom.get("addCollmsg").innerHTML="\u6210\u529f\u6dfb\u52a0 [<a onclick=\"Dom.get('addColl').style.display='block';Dom.get('addCollmsg').style.display = 'none';\">\u8fd4\u56de\u7ee7\u7eed\u6dfb\u52a0</a>]";a.reset();return false}function delColl(f){var e=f.getElementsByTagName("a")[0];var c=e.innerHTML;var b=e.href;b=b.replace(/^(.*?)(\/)?$$/,"$$1");var d=c+"+"+b+"\u25a0";var a=Ylmf.Cookie.get("cl");a=unescape(a);newColl=a.replace(d,"");if(newColl==""){Ylmf.Cookie.clear("cl")}else{Ylmf.Cookie.set("cl",newColl)}showColl()}function saveColl(b,a){a=a.replace(/^(.*?)(\/)?$$/,"$$1");var c=b+"+"+a+"\u25a0";if(c){if(Ylmf.Cookie.get("cl")!==null&&unescape(Ylmf.Cookie.get("cl")).indexOf(c)!==0){c+=unescape(Ylmf.Cookie.get("cl"))}c=escape(c);Ylmf.Cookie.set("cl",c);showColl()}}function showColl(){try{var f=Ylmf.Cookie.get("cl");f=unescape(f);var c="";var a='<img src="static/images/del.gif" title="\u5220\u9664\u6b64\u7f51\u5740" onclick="delColl(this.parentNode)" align="absmiddle" />';if(f!=="null"){customsite_arg=f.split("\u25a0");i=0;linknum=0;len=customsite_arg.length;for(i=0;i<len;i++){var b=customsite_arg[len-i-1].split("+");if(f[i]!=="null"&&c.indexOf(b[0])==-1&&linknum<35){c+="<li>"+a+' <a href="'+b[1]+'" title="'+b[0]+'">'+b[0]+"</a></li>";linknum+=1}}Dom.get("Collbox").innerHTML=c}else{Dom.get("Collbox").innerHTML='<li class="none">\u60a8\u8fd8\u6ca1\u6709\u4efb\u4f55\u5df2\u6dfb\u52a0\u7684\u7f51\u5740\u6536\u85cf\u3002</li>'}}catch(d){}};









var CityArr=[["CategoryName","ParentId","Id"],["\u534e\u5317\u5730\u533a","0","1"],["\u5317\u4eac","1","109"],["\u5317\u4eac","109","101010100"],["\u5929\u6d25","1","110"],["\u5929\u6d25","110","101030100"],["\u6cb3\u5317","1","111"],["\u77f3\u5bb6\u5e84","111","101090101"],["\u4fdd\u5b9a","111","101090201"],["\u5f20\u5bb6\u53e3","111","101090301"],["\u627f\u5fb7\u5e02","111","101090402"],["\u5510\u5c71","111","101090501"],["\u5eca\u574a","111","101090601"],["\u6ca7\u5dde","111","101090701"],["\u8861\u6c34","111","101090801"],["\u90a2\u53f0","111","101090901"],["\u90af\u90f8","111","101091001"],["\u79e6\u7687\u5c9b","111","101091101"],["\u5c71\u897f","1","112"],["\u592a\u539f","112","101100101"],["\u5927\u540c","112","101100201"],["\u9633\u6cc9","112","101100301"],["\u664b\u4e2d","112","101100401"],["\u957f\u6cbb","112","101100501"],["\u664b\u57ce","112","101100601"],["\u4e34\u6c7e","112","101100701"],["\u8fd0\u57ce","112","101100801"],["\u6714\u5dde","112","101100901"],["\u5ffb\u5dde","112","101101001"],["\u5415\u6881","112","101101100"],["\u5185\u8499\u53e4","1","113"],["\u547c\u548c\u6d69\u7279","113","101080101"],["\u5305\u5934","113","101080201"],["\u4e4c\u6d77","113","101080301"],["\u96c6\u5b81","113","101080401"],["\u901a\u8fbd","113","101080501"],["\u8d64\u5cf0","113","101080601"],["\u9102\u5c14\u591a\u65af","113","101080701"],["\u4e34\u6cb3","113","101080801"],["\u9521\u6797\u6d69\u7279","113","101080901"],["\u547c\u4f26\u8d1d\u5c14","113","101081000"],["\u4e4c\u5170\u6d69\u7279","113","101081101"],["\u963f\u62c9\u5584\u5de6\u65d7","113","101081201"],["\u4e1c\u5317\u5730\u533a","0","2"],["\u8fbd\u5b81","2","114"],["\u6c88\u9633","114","101070101"],["\u5927\u8fde","114","101070201"],["\u978d\u5c71","114","101070301"],["\u629a\u987a","114","101070401"],["\u672c\u6eaa","114","101070501"],["\u4e39\u4e1c","114","101070601"],["\u9526\u5dde","114","101070701"],["\u8425\u53e3","114","101070801"],["\u961c\u65b0","114","101070901"],["\u8fbd\u9633","114","101071001"],["\u94c1\u5cad","114","101071101"],["\u671d\u9633","114","101071201"],["\u76d8\u9526","114","101071301"],["\u846b\u82a6\u5c9b","114","101071401"],["\u5409\u6797","2","115"],["\u957f\u6625","115","101060101"],["\u5409\u6797","115","101060201"],["\u5ef6\u5409","115","101060301"],["\u56db\u5e73","115","101060401"],["\u901a\u5316","115","101060501"],["\u767d\u57ce","115","101060601"],["\u8fbd\u6e90","115","101060701"],["\u677e\u539f","115","101060801"],["\u767d\u5c71","115","101060901"],["\u9ed1\u9f99\u6c5f","2","116"],["\u54c8\u5c14\u6ee8","116","101050101"],["\u9f50\u9f50\u54c8\u5c14","116","101050201"],["\u7261\u4e39\u6c5f","116","101050301"],["\u4f73\u6728\u65af","116","101050401"],["\u7ee5\u5316","116","101050501"],["\u9ed1\u6cb3","116","101050601"],["\u5927\u5174\u5b89\u5cad","116","101050701"],["\u4f0a\u6625","116","101050801"],["\u5927\u5e86","116","101050901"],["\u4e03\u53f0\u6cb3","116","101051002"],["\u9e21\u897f","116","101051101"],["\u9e64\u5c97","116","101051201"],["\u53cc\u9e2d\u5c71","116","101051301"],["\u534e\u4e1c\u5730\u533a","0","3"],["\u4e0a\u6d77","3","117"],["\u4e0a\u6d77","117","101020100"],["\u5c71\u4e1c","3","118"],["\u6d4e\u5357","118","101120101"],["\u9752\u5c9b","118","101120201"],["\u6dc4\u535a","118","101120301"],["\u5fb7\u5dde","118","101120401"],["\u70df\u53f0","118","101120501"],["\u6f4d\u574a","118","101120601"],["\u6d4e\u5b81","118","101120701"],["\u6cf0\u5b89","118","101120801"],["\u4e34\u6c82","118","101120901"],["\u83cf\u6cfd","118","101121001"],["\u6ee8\u5dde","118","101121101"],["\u4e1c\u8425","118","101121201"],["\u5a01\u6d77","118","101121301"],["\u67a3\u5e84","118","101121401"],["\u65e5\u7167","118","101121501"],["\u83b1\u829c","118","101121601"],["\u804a\u57ce","118","101121701"],["\u5b89\u5fbd","3","119"],["\u5408\u80a5","119","101220101"],["\u868c\u57e0","119","101220201"],["\u829c\u6e56","119","101220301"],["\u6dee\u5357","119","101220401"],["\u9a6c\u978d\u5c71","119","101220501"],["\u5b89\u5e86","119","101220601"],["\u5bbf\u5dde","119","101220701"],["\u961c\u9633","119","101220801"],["\u4eb3\u5dde","119","101220901"],["\u9ec4\u5c71","119","101221001"],["\u6ec1\u5dde","119","101221101"],["\u6dee\u5317","119","101221201"],["\u94dc\u9675","119","101221301"],["\u5ba3\u57ce","119","101221401"],["\u516d\u5b89","119","101221501"],["\u5de2\u6e56","119","101221601"],["\u6c60\u5dde","119","101221701"],["\u6c5f\u82cf","3","120"],["\u5357\u4eac","120","101190101"],["\u65e0\u9521","120","101190201"],["\u9547\u6c5f","120","101190301"],["\u82cf\u5dde","120","101190401"],["\u5357\u901a","120","101190501"],["\u626c\u5dde","120","101190601"],["\u76d0\u57ce","120","101190701"],["\u5f90\u5dde","120","101190801"],["\u6dee\u5b89","120","101190901"],["\u8fde\u4e91\u6e2f","120","101191001"],["\u5e38\u5dde","120","101191101"],["\u6cf0\u5dde","120","101191201"],["\u5bbf\u8fc1","120","101191301"],["\u6d59\u6c5f","3","121"],["\u676d\u5dde","121","101210101"],["\u6e56\u5dde","121","101210201"],["\u5609\u5174","121","101210301"],["\u5b81\u6ce2","121","101210401"],["\u7ecd\u5174","121","101210501"],["\u53f0\u5dde","121","101210601"],["\u6e29\u5dde","121","101210701"],["\u4e3d\u6c34","121","101210801"],["\u91d1\u534e","121","101210901"],["\u8862\u5dde","121","101211001"],["\u821f\u5c71","121","101211101"],["\u6c5f\u897f","3","122"],["\u5357\u660c","122","101240101"],["\u4e5d\u6c5f","122","101240201"],["\u4e0a\u9976","122","101240301"],["\u629a\u5dde","122","101240401"],["\u5b9c\u6625","122","101240501"],["\u5409\u5b89","122","101240601"],["\u8d63\u5dde","122","101240701"],["\u666f\u5fb7\u9547","122","101240801"],["\u840d\u4e61","122","101240901"],["\u65b0\u4f59","122","101241001"],["\u9e70\u6f6d","122","101241101"],["\u798f\u5efa","3","123"],["\u798f\u5dde","123","101230101"],["\u53a6\u95e8","123","101230201"],["\u5b81\u5fb7","123","101230301"],["\u8386\u7530","123","101230401"],["\u6cc9\u5dde","123","101230501"],["\u6f33\u5dde","123","101230601"],["\u9f99\u5ca9","123","101230701"],["\u4e09\u660e","123","101230801"],["\u5357\u5e73","123","101230901"],["\u4e2d\u5357\u5730\u533a","0","4"],["\u6cb3\u5357","4","124"],["\u90d1\u5dde","124","101180101"],["\u5b89\u9633","124","101180201"],["\u65b0\u4e61","124","101180301"],["\u8bb8\u660c","124","101180401"],["\u5e73\u9876\u5c71","124","101180501"],["\u4fe1\u9633","124","101180601"],["\u5357\u9633","124","101180701"],["\u5f00\u5c01","124","101180801"],["\u6d1b\u9633","124","101180901"],["\u5546\u4e18","124","101181001"],["\u7126\u4f5c","124","101181101"],["\u9e64\u58c1","124","101181201"],["\u6fee\u9633","124","101181301"],["\u5468\u53e3","124","101181401"],["\u6f2f\u6cb3","124","101181501"],["\u9a7b\u9a6c\u5e97","124","101181601"],["\u4e09\u95e8\u5ce1","124","101181701"],["\u6d4e\u6e90","124","101181801"],["\u6e56\u5317","4","125"],["\u6b66\u6c49","125","101200101"],["\u8944\u6a0a","125","101200201"],["\u9102\u5dde","125","101200301"],["\u5b5d\u611f","125","101200401"],["\u9ec4\u5188","125","101200501"],["\u9ec4\u77f3","125","101200601"],["\u54b8\u5b81","125","101200701"],["\u8346\u5dde","125","101200801"],["\u5b9c\u660c","125","101200901"],["\u6069\u65bd","125","101201001"],["\u5341\u5830","125","101201101"],["\u795e\u519c\u67b6","125","101201201"],["\u968f\u5dde","125","101201301"],["\u8346\u95e8","125","101201401"],["\u5929\u95e8","125","101201501"],["\u4ed9\u6843","125","101201601"],["\u6f5c\u6c5f","125","101201701"],["\u6e56\u5357","4","126"],["\u957f\u6c99","126","101250101"],["\u6e58\u6f6d","126","101250201"],["\u682a\u6d32","126","101250301"],["\u8861\u9633","126","101250401"],["\u90f4\u5dde","126","101250501"],["\u5e38\u5fb7","126","101250601"],["\u76ca\u9633","126","101250701"],["\u5a04\u5e95","126","101250801"],["\u90b5\u9633","126","101250901"],["\u5cb3\u9633","126","101251001"],["\u5f20\u5bb6\u754c","126","101251101"],["\u6000\u5316","126","101251201"],["\u9ed4\u9633","126","101251301"],["\u6c38\u5dde","126","101251401"],["\u5409\u9996","126","101251501"],["\u5e7f\u4e1c","4","127"],["\u5e7f\u5dde","127","101280101"],["\u97f6\u5173","127","101280201"],["\u60e0\u5dde","127","101280301"],["\u6885\u5dde","127","101280401"],["\u6c55\u5934","127","101280501"],["\u6df1\u5733","127","101280601"],["\u73e0\u6d77","127","101280701"],["\u4f5b\u5c71","127","101280800"],["\u8087\u5e86","127","101280901"],["\u6e5b\u6c5f","127","101281001"],["\u6c5f\u95e8","127","101281101"],["\u6cb3\u6e90","127","101281201"],["\u6e05\u8fdc","127","101281301"],["\u4e91\u6d6e","127","101281401"],["\u6f6e\u5dde","127","101281501"],["\u4e1c\u839e","127","101281601"],["\u4e2d\u5c71","127","101281701"],["\u9633\u6c5f","127","101281801"],["\u63ed\u9633","127","101281901"],["\u8302\u540d","127","101282001"],["\u6c55\u5c3e","127","101282101"],["\u4e1c\u6c99\u5c9b","127","101282105"],["\u5e7f\u897f","4","128"],["\u5357\u5b81","128","101300101"],["\u5d07\u5de6","128","101300201"],["\u67f3\u5dde","128","101300301"],["\u6765\u5bbe","128","101300401"],["\u6842\u6797","128","101300501"],["\u68a7\u5dde","128","101300601"],["\u8d3a\u5dde","128","101300701"],["\u8d35\u6e2f","128","101300801"],["\u7389\u6797","128","101300901"],["\u767e\u8272","128","101301001"],["\u94a6\u5dde","128","101301101"],["\u6cb3\u6c60","128","101301201"],["\u5317\u6d77","128","101301301"],["\u9632\u57ce\u6e2f","128","101301401"],["\u6d77\u5357","4","129"],["\u6d77\u53e3","129","101310101"],["\u743c\u5c71","129","101310102"],["\u4e09\u4e9a","129","101310201"],["\u4e1c\u65b9","129","101310202"],["\u4e34\u9ad8","129","101310203"],["\u6f84\u8fc8","129","101310204"],["\u510b\u5dde","129","101310205"],["\u660c\u6c5f","129","101310206"],["\u767d\u6c99","129","101310207"],["\u743c\u4e2d","129","101310208"],["\u5b9a\u5b89","129","101310209"],["\u5c6f\u660c","129","101310210"],["\u743c\u6d77","129","101310211"],["\u6587\u660c","129","101310212"],["\u6e05\u5170","129","101310213"],["\u4fdd\u4ead","129","101310214"],["\u4e07\u5b81","129","101310215"],["\u9675\u6c34","129","101310216"],["\u897f\u6c99","129","101310217"],["\u73ca\u745a\u5c9b","129","101310218"],["\u6c38\u7f72\u7901","129","101310219"],["\u5357\u6c99\u5c9b","129","101310220"],["\u4e50\u4e1c","129","101310221"],["\u901a\u4ec0","129","101310222"],["\u897f\u5317\u5730\u533a","0","5"],["\u9655\u897f","5","130"],["\u897f\u5b89","130","101110101"],["\u54b8\u9633","130","101110200"],["\u5ef6\u5b89","130","101110300"],["\u6986\u6797","130","101110401"],["\u6e2d\u5357","130","101110501"],["\u5546\u6d1b","130","101110601"],["\u5b89\u5eb7","130","101110701"],["\u6c49\u4e2d","130","101110801"],["\u5b9d\u9e21","130","101110901"],["\u94dc\u5ddd","130","101111001"],["\u7518\u8083","5","131"],["\u5170\u5dde","131","101160101"],["\u5b9a\u897f","131","101160201"],["\u5e73\u51c9","131","101160301"],["\u5e86\u9633","131","101160401"],["\u6b66\u5a01","131","101160501"],["\u91d1\u660c","131","101160601"],["\u5f20\u6396","131","101160701"],["\u9152\u6cc9","131","101160801"],["\u5929\u6c34","131","101160901"],["\u6b66\u90fd","131","101161001"],["\u4e34\u590f","131","101161101"],["\u5408\u4f5c","131","101161201"],["\u767d\u94f6","131","101161301"],["\u5b81\u590f","5","132"],["\u94f6\u5ddd","132","101170101"],["\u77f3\u5634\u5c71","132","101170201"],["\u5434\u5fe0","132","101170301"],["\u56fa\u539f","132","101170401"],["\u4e2d\u536b","132","101170501"],["\u9752\u6d77","5","133"],["\u897f\u5b81","133","101150101"],["\u6d77\u4e1c","133","101150201"],["\u9ec4\u5357","133","101150301"],["\u6d77\u5357","133","101150401"],["\u679c\u6d1b","133","101150501"],["\u7389\u6811","133","101150601"],["\u6d77\u897f","133","101150701"],["\u6d77\u5317","133","101150801"],["\u65b0\u7586","5","134"],["\u4e4c\u9c81\u6728\u9f50","134","101130101"],["\u514b\u62c9\u739b\u4f9d","134","101130201"],["\u77f3\u6cb3\u5b50","134","101130301"],["\u660c\u5409","134","101130401"],["\u5410\u9c81\u756a","134","101130501"],["\u5e93\u5c14\u52d2","134","101130601"],["\u963f\u62c9\u5c14","134","101130701"],["\u963f\u514b\u82cf","134","101130801"],["\u5580\u4ec0","134","101130901"],["\u4f0a\u5b81","134","101131001"],["\u5854\u57ce","134","101131101"],["\u54c8\u5bc6","134","101131201"],["\u548c\u7530","134","101131301"],["\u963f\u52d2\u6cf0","134","101131401"],["\u963f\u56fe\u4ec0","134","101131501"],["\u535a\u4e50","134","1011301601"],["\u897f\u5357\u5730\u533a","0","6"],["\u91cd\u5e86","6","135"],["\u91cd\u5e86","135","101040100"],["\u56db\u5ddd","6","136"],["\u6210\u90fd","136","101270101"],["\u6500\u679d\u82b1","136","101270201"],["\u81ea\u8d21","136","101270301"],["\u7ef5\u9633","136","101270401"],["\u5357\u5145","136","101270501"],["\u8fbe\u5dde","136","101270601"],["\u9042\u5b81","136","101270701"],["\u5e7f\u5b89","136","101270801"],["\u5df4\u4e2d","136","101270901"],["\u6cf8\u5dde","136","101271001"],["\u5b9c\u5bbe","136","101271101"],["\u5185\u6c5f","136","101271201"],["\u8d44\u9633","136","101271301"],["\u4e50\u5c71","136","101271401"],["\u7709\u5c71","136","101271501"],["\u51c9\u5c71","136","101271601"],["\u96c5\u5b89","136","101271701"],["\u7518\u5b5c","136","101271801"],["\u963f\u575d","136","101271901"],["\u5fb7\u9633","136","101272001"],["\u5e7f\u5143","136","101272101"],["\u8d35\u5dde","6","137"],["\u8d35\u9633","137","101260101"],["\u9075\u4e49","137","101260201"],["\u5b89\u987a","137","101260301"],["\u90fd\u5300","137","101260401"],["\u51ef\u91cc","137","101260501"],["\u94dc\u4ec1","137","101260601"],["\u6bd5\u8282","137","101260701"],["\u516d\u76d8\u6c34","137","101260801"],["\u9ed4\u897f","137","101260901"],["\u4e91\u5357","6","138"],["\u6606\u660e","138","101290101"],["\u5927\u7406","138","101290201"],["\u7ea2\u6cb3","138","101290301"],["\u66f2\u9756","138","101290401"],["\u4fdd\u5c71","138","101290501"],["\u6587\u5c71","138","101290601"],["\u7389\u6eaa","138","101290701"],["\u695a\u96c4","138","101290801"],["\u601d\u8305","138","101290901"],["\u662d\u901a","138","101291001"],["\u4e34\u6ca7","138","101291101"],["\u6012\u6c5f","138","101291201"],["\u4e2d\u7538","138","101291301"],["\u4e3d\u6c5f","138","101291401"],["\u5fb7\u5b8f","138","101291501"],["\u666f\u6d2a","138","101291601"],["\u897f\u85cf","6","139"],["\u62c9\u8428","139","101140101"],["\u65e5\u5580\u5219","139","101140201"],["\u5c71\u5357","139","101140301"],["\u6797\u829d","139","101140401"],["\u660c\u90fd","139","101140501"],["\u90a3\u66f2","139","101140601"],["\u963f\u91cc","139","101140701"],["\u6e2f\u6fb3\u53f0","0","7"],["\u9999\u6e2f","7","140"],["\u9999\u6e2f","140","101320101"],["\u6fb3\u95e8","7","141"],["\u6fb3\u95e8","141","101330101"],["\u53f0\u6e7e","7","142"],["\u53f0\u5317\u53bf","142","101340101"],["\u9ad8\u96c4","142","101340201"],["\u53f0\u5357","142","101340301"],["\u53f0\u4e2d","142","101340401"],["\u6843\u56ed","142","101340501"],["\u65b0\u7af9\u53bf","142","101340601"],["\u5b9c\u5170","142","101340701"],["\u9a6c\u516c","142","101340801"],["\u5609\u4e49","142","101340901"],["\u82b1\u83b2","142","101341001"],["\u53f0\u4e1c","142","101341101"],["\u5f6d\u4f73\u5c7f","142","101341201"]];
var CityName={},Province={},CityKey={};for(var i=0,len=CityArr.length;i<len;i++){CityName[CityArr[i][2]]={Name:CityArr[i][0],Parent:CityArr[i][1],Key:CityArr[i][2]};if(Province[CityArr[i][1]]==undefined){Province[CityArr[i][1]]=CityArr[i][0]}}var getCityObj=function(a){var b=[];for(var c in CityName){if(CityName[c].Parent==a){b.push(CityName[c])}}return b};function showCity(d,g,a,e){var b;if(a){b=a;document.getElementById(d).value=a}else{b=document.getElementById(d).value}var h=document.getElementById(g);var j=getCityObj(b);h.innerHTML="";if(e){for(var c=0,f=j.length;c<f;c++){h.options[c]=new Option(j[c].Name,j[c].Key);if(j[c].Key==e){h.options[c].selected=true}}}else{for(var c=0,f=j.length;c<f;c++){h.options[c]=new Option(j[c].Name,j[c].Key)}}}var initProvince=function(b,c){var a=document.getElementById(b);a.onchange=function(){showCity(b,c)};showCity(b,c,Ylmf.Cookie.get("province"),Ylmf.Cookie.get("city"))};var getCityId=function(a){for(var b=0;b<CityArr.length;b++){if(CityArr[b][2].length!=3&&CityArr[b][0]==a){return CityArr[b][2]}}return""};var getProId=function(a){for(var b=0;b<CityArr.length;b++){if(CityArr[b][2].length==3&&CityArr[b][0]==a){return CityArr[b][2]}}return""};
