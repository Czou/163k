
//paging
function categoryData_set(categoryidStyleid,bigcategoryidName,JsonNum,categoryidselectID,categoryid){
	var bigcategoryid = $("#" + bigcategoryidName).val();//获取一级选中值
	if(categoryJson[JsonNum] != null){showcategory_sel(JsonNum,bigcategoryid,categoryidselectID,categoryid);return;}//带缓存直接运行数据分析
	var ajaxUrl = nowdomain + "request.ashx?action=category&id=" +　categoryidStyleid;
	var functionID = "categoryData(data," +JsonNum　+",'" + bigcategoryid + "','" + categoryidselectID + "','" + categoryid +"');"//配置数据返回需要执行的过程
	getJSON_common_data(ajaxUrl,functionID);
}
function categoryData(data,JsonNum,bigcategoryid,categoryidselectID,_categoryid){
      categoryJson[JsonNum] = data[0].MSG;//category接口不带islogin直接获取MSG
      showcategory_sel(JsonNum,bigcategoryid,categoryidselectID,_categoryid);
}
function showcategory_sel(JsonNum,bigcategoryid,categoryidselectID,_categoryid){
	/*
	JsonNum:读取缓存序列:当页面有多种sel分类时从0开始
	bigcategoryid:当前动态选中大类值
	categoryidselectID:二级分类selectID
	_categoryid:二级分类页面初始选中值
	*/
	if(categoryJson[JsonNum] == null){return;}
	var sel=document.getElementById(categoryidselectID);
	var val="::请选择::";
	sel.options.length=0;
	sel.options.add(new Option( val,""));
	for(var i=0;i<categoryJson[JsonNum].length;i++){
		if(categoryJson[JsonNum][i].id == bigcategoryid){
			for(var _Tcategory in categoryJson[JsonNum][i].arr){
				sel.options.add(new Option(categoryJson[JsonNum][i].arr[_Tcategory],_Tcategory)); 
				if(_categoryid==_Tcategory){
					sel.options[sel.options.length-1].selected=true;
				}
			}
			return;
		}
	}
}
function getNewPage(page){
	getPagingGlobal({'p':page});
	return false;
}

function getPagingGlobal(obj,node){
	keyvalues["p"]='1';
	//keyvalues["_key"] = "";
	keyvalues = $.extend({},keyvalues,obj);
	getNewPaging();
	if(!!$('#louzhuNode')[0]){
		if(keyvalues.p !== '1'){
			$('#louzhuNode').hide();
		}else{
			$('#louzhuNode').show();
		}
	}
	if(typeof node !== 'undefined'){
		$('#tiebaCatChr')[0]&&$('#tiebaCatChr').html($(node).html());
		$(node).parent().siblings('.cur').removeClass('cur');
		$(node).parent().addClass('cur');
	}
	return false;
}
function getNewPaging(){
	var ajaxUrl = nowdomain+"request_paging.ashx?";//接口地址
	var functionID = "getNewPaging_data(data);"//配置数据返回需要执行的过程
	getJSON_common_set(ajaxUrl,keyvalues,functionID);
}
function getNewPaging_data(data){
			if(data[0].islogin !== '1'){MSGwindowShow('revert','0',data[0].error,'','');return;}
	$('#pagingList').html(data[0].MSG);
	$('#pageNavigation').html(data[0].PageSplit);
}
//-----------------------数据接口核心(可以放到全站通用js中)
function getJSON_common_set(ajaxUrl,_keyvalues,functionID){
	for(var _Tkey in _keyvalues){
		ajaxUrl += _Tkey + "=" + _keyvalues[_Tkey] + "&";
	}
	getJSON_common_data(ajaxUrl,functionID);
}
function getJSON_common_data(ajaxUrl,functionID){
	var url = ajaxUrl+'&jsoncallback=?';
	var Digital=new Date();
	Digital=Digital+40000;
	url=url+"&_k="+encodeURIComponent(Digital);
	$.getJSON(url,function(data){
		eval(functionID);
	});
}
function getajax_common_set(ajaxUrl,_keyvalues,functionID){
	for(var _Tkey in _keyvalues){
		ajaxUrl += _Tkey + "=" + _keyvalues[_Tkey] + "&";
	}
	getajax_common_data(ajaxUrl,functionID);
}
function getajax_common_data(ajaxUrl,functionID){
	var url = ajaxUrl+'&jsoncallback=?';
	var Digital=new Date();
	Digital=Digital+40000;
	url=url+"&_k="+encodeURIComponent(Digital);
	$.ajax({url:url,success: function(data){
		eval(functionID);
	}});	
}
