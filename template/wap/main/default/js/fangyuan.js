function overtime(){
	$('#keytishi').hide();
}
function getKeyWord(){
    var obj = $("#xiaoqu");
	var Digital=new Date();
	Digital=Digital+40000;
	var url = window['siteUrl']+"request.ashx?action=getxiaoqu&keyword="+encodeURIComponent(obj.val())+"&tt="+(Digital);
    $.ajax({url:url,success:function(data){
		console.info(data);
		if(data.islogin === '1'){
			var txt = '';
			
			for(var i=0;i<data.MSG.length;i++){
				txt+='<li><span onclick="javascript:selectCommName(\''+data.MSG[i].chrloupan+'\', \''+data.MSG[i].loupanid+'\', \''+data.MSG[i].chraddress+'\', \''+data.MSG[i].quyuid+'\', \''+data.MSG[i].diduanid+'\', \''+data.MSG[i].loupan_x+'\', \''+data.MSG[i].loupan_y+'\', \'2\')">'+data.MSG[i].chrloupan+'</span></li>';
			}
			$("#keytishi").html(txt).css({'display':'block'});
		}
	}});
}
function selectCommName(commName,commId,commAddr,CommOtherName,wiki_CommOtherName,lx,ly,lz) {
    var houseAddr1 = document.getElementById('xiaoqu')
    if(houseAddr1!=null){
        houseAddr1.value = commName;
    }
	var houseAddr2 = document.getElementById('chraddress')
    if(houseAddr2!=null){
        houseAddr2.value = commAddr;
    }
	var CommIdt = document.getElementById('CommId')
    if(CommIdt!=null){
        CommIdt.value = commId;
    }
	var i,num,op
	num=document.getElementById('loupancategory').length
	for(i=0;i<num;i++){
		op=document.getElementById('loupancategory').options[i]
		if(op.value==CommOtherName) op.selected=true;
	}
	showloupancategory(CommOtherName,wiki_CommOtherName);
	
	var tt2 = document.getElementById('listComm')
    if(tt2!=null){
        tt2.src="";;
    }
	var tt1 = document.getElementById('keytishi')
    if(tt1!=null){
        tt1.style.display="none";;
    }
	var x = document.getElementById('shop_x')
    if(x!=null){
        x.value=lx;
    }
	var y = document.getElementById('shop_y')
    if(y!=null){
        y.value=ly;
    }
}