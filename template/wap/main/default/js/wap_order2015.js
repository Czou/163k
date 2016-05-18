function setOrderAddress(orderid,sid,node){
	var url = siteUrl+'request.ashx?action=editmyorder&id='+orderid+'&styleid=0&addressid='+sid+'&remark=&jsoncallback=?&timer='+Math.random();
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			node.find('.inneraddress').html(data[0].MSG);
		}else{
			MSGwindowShow('shopping','0',data[0].error,'','');
		}
	});
}
function delMyOrder(o,orderid){
	var url = siteUrl+'request.ashx?action=delmyorder&id='+orderid+'&remark=&jsoncallback=?&timer='+Math.random();
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			MSGwindowShow('shopping','0','取消订单成功！','','');
			$(o).parents('.item').remove();
		}else{
			MSGwindowShow('shopping','0',data[0].error,'','');
		}
	});
}
function getMyAddress(node,tonode){
	var url=siteUrl+'request.ashx?action=getmyaddress&delid=&ishtml=1&jsoncallback=?&timer='+Math.random();
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			node.html(data[0].MSG).attr('data-isok','1');
			tonode.parent().append(node.parent().detach());
			node.parent().slideDown();
			$('#addressid').val($('input[name="sleAdress"]:checked').val());
		}else{
			MSGwindowShow('shopping','0',data[0].error,'','');
		}
	});
}
function changeAddress(o,sid){
	$('#changeAddressId').val(sid);
	var node = $('#changeAddressNode'),$o=$(o),addressList=$('#addressList');
	if(addressList.attr('data-isok') !== '1'){
		getMyAddress(addressList,$o);
		$('#changeAddressSubmit').click(function(){
			if($('#addressid').val()===''){MSGwindowShow('shopping','0','请先选择一个地址！','',''); return false;}
			setOrderAddress($('#changeAddressId').val(),$('#addressid').val(),$o.parent());
		});
		$('#changeAddressColse').click(function(){
			node.slideUp();
		});
	}else{
		$o.parent().append(node.detach());
		node.slideDown();
	}
}
function countdown(){
	var i_switch = $('#countdownswitch'),countdown = $('#countdown'), i_timer = null,sec = 11;
	
	function settimer(){
		i_timer = window.setInterval(function(){
			countdown.html(--sec);
			if(sec === 0){
				sec = 11
				orderPagePolling();
			}
		},1000);
	}
	i_switch.bind('click',function(){
		if(!$(this).prop('checked')){
			clearInterval(i_timer);
		}else{
			settimer();
		}
	});
	if(!!i_switch.prop('checked')){settimer();}
}
//模板:2：admin_order_div.html   0：myorder_div.html
function getNewPageSplit(KeyValJson,HtmlSplitDivID,callback){
	$.getJSON(siteUrl+'request.ashx?jsoncallback=?',KeyValJson,function(data){
		if(data[0].islogin === '1'){
			$('#'+HtmlSplitDivID).html(data[0].MSG);
			callback&&setTimeout(function(){callback.call();},100);
		}else{
			MSGwindowShow('shopping','0',data[0].error,'','');
		}
    });
}
function getNewPage(NewPageNo){
	var iskill = $('#iskill').val(),
		skill = $('#skill').val(),
		startdate = $('#startdate').val(),
		enddate = $('#enddate').val(),
		colname = $('#colname').val(),
		payid = $('#payid').val();
	var _keyValJson={"action":"pagemyorder","isadmin":"2","iskill":iskill,'skill':skill,'startdate':startdate,'enddate':enddate,'colname':colname,'payid':payid,"keyword":"","PageNo":NewPageNo};
		
	getNewPageSplit(_keyValJson,"orderAjaxNode",getInitTime);
}
function getNewOrder(){
	var _keyValJson={"action":"pagemyorder","isadmin":"2","iskill":'','skill':'','startdate':'','enddate':'','colname':'','payid':'',"keyword":'',"PageNo":'1','neworder':'1'};
	getNewPageSplit(_keyValJson,"orderAjaxNode",getInitTime);
}

function getpeisonuser(){
	var url = window['siteUrl']+'request.ashx?action=peisongusers&ishtml=1';
	var Digital=new Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	$.ajax({url:url,success:function(data){
		if(data.islogin === '1'){
			$('.peisonuser').append(data['MSG']);
		}else{
			//MSGwindowShow('revert','0',data.error,'','');
		}
	}});
}
function setpeisonuser(o,sid){
	var t = $(o);
	var val = t.parent().find('.peisonuser').val();
	if(val === '' || !val){
		MSGwindowShow('revert','0','请先选择一个配送员！','','');
		return false;
	}
	var url = window['siteUrl']+'request.ashx?action=peisongfahuo&styleid=1&id='+sid+'&suserid='+val;
	var Digital=new Date();
	Digital=Digital+40000;
	url=url+"&k="+encodeURIComponent(Digital);
	$.ajax({url:url,success:function(data){
		if(data.islogin === '1'){
			MSGwindowShow('revert','1','配送员设置成功！',window.location.href,'');
		}else{
			MSGwindowShow('revert','0',data.error,'','');
		}
	}});
}



//循环加载新订单获取接口
var orderPollingFrame = (function(){       
	return function(callback,speed){       
		window.setTimeout(callback, speed);       
	};       
})();   
function orderPolling(notplay){
	orderPollingFrame(orderPolling,60000);
	
	//轮询处       
	var url = window['siteUrl']+'request.ashx?action=getnewmyorder&jsoncallback=?&timer='+Math.random();
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			
			hasNewOrder(notplay);
		}else{
			$('#newOrderId:visible').hide();
		}
	}); 
}
function orderPagePolling(){
	var url = window['siteUrl']+'request.ashx?action=getnewmyorder&jsoncallback=?&timer='+Math.random();
	
	$.getJSON(url,function(data){
		if(data[0].islogin === '1'){
			hasPageNewOrder();
		}else{
			$('#newOrderId:visible').hide();
		}
	}); 
}
function hasPageNewOrder(notplay){
	var newOrderId='newOrderId';
	var node = $("#reload_order");
	var newOrderNode = '<a href="#" class="'+newOrderId+'" style="display:none;" id="'+newOrderId+'">您有未处理的新订单</a>';
	if(!$('#'+newOrderId)[0]){
		
		node.addClass('po_re').append(newOrderNode);
		
		$('#'+newOrderId).show().bind('click',function(event){
			event.preventDefault();
			$(this).hide();
			//加载新订单
			getNewOrder();
		});
	}else{
		$('#'+newOrderId).show();
	}
}
function hasNewOrder(notplay){
	var newOrderId='newOrderId';
	var node = $("#login_info");
	var newOrderNode = '<a href="'+window['siteUrl']+'member/manage_order.aspx" target="_blank" class="'+newOrderId+'" style="display:none;" id="'+newOrderId+'"><span class="arrow"></span>有新订单</a>';
	if(!$('#'+newOrderId)[0]){
		$.ajax({url:window['tplPath']+"js/jquery.jplayer.min.js",dataType:'script'}).done(function(){
			setTimeout(function(){
				$('body').append('<div id="jquery_jplayer"></div>');
				window['my_jPlayer'] = $("#jquery_jplayer");
				
				my_jPlayer.jPlayer({
						ready: function (event) {
							$(this).jPlayer("setMedia",{mp3: window['tplPath']+'images/message.mp3'});
							if(typeof notplay === 'undefined'){window['my_jPlayer'].jPlayer('play');}
						},
						ended:function(){
							
						},
						swfPath: window['tplPath']+"js", // jquery.jplayer.swf 文件存放的位置
						supplied: "mp3",
						wmode: "window"
				});
				
			},200);
		});
		node.addClass('po_re').append(newOrderNode);
		$('#'+newOrderId).show().bind('click',function(){$(this).hide();setTimeout(function(){orderPolling(!0);},2000);});
	}else{
		$('#'+newOrderId).show();
		if(typeof notplay === 'undefined'){window['my_jPlayer'].jPlayer('play');}
	}
}