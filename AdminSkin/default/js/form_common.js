//--常量
var _nav = "<option value=''>::请选择::</option><option value='live_category' >信息频道分类列表</option><option value='house_category' >房产资讯/价格分类列表</option><option value='shop_category' >_店铺展示分类列表</option><option value='wangzhikind' >_原主导航和黄页网址分类列表</option><option value='photo_category' >_图库分类列表</option><option value='category' >_其它分类列表</option><option value='daohang' >_新导航列表</option>";
var _list = "<option value=''>::请选择::</option><option value='article' >_资讯</option><option value='live' >_信息频道</option><option value='tg' >_团购频道</option><option value='house_chuzhu' >_房产出租(出售)</option><option value='house_loupan' >_房产楼盘</option><option value='house_news' >_房产资讯</option><option value='house_xiaoqu' >_房产小区</option><option value='house_zhongjie' >_中介(经纪人)</option><option value='active' >_活动频道</option><option value='rencai' >_人才信息</option><option value='zhiweijian' >_兼职人才信息</option><option value='zhiwei' >_职位信息</option><option value='mingqi' >_名企招聘</option><option value='vote' >_投票</option><option value='xuanshou' >_投票选手</option><option value='good' >_购物商品信息</option><option value='shop' >_店铺信息</option><option value='good_shop' >_快店信息</option><option value='shop_article' >_店铺动态(快店公告)</option><option value='link' >_友情链接地址</option><option value='bao' >_百宝箱</option><option value='cuxiao' >_打折促销</option><option value='tieba' >_贴吧帖子</option>"
    + "<option value='shop_link' >_店铺友情链接</option><option value='shop_pic' >_店铺图片</option><option value='shop_video' >_视频</option><option value='news' >_文章/新闻信息</option><option value='wangzhi' >_网址频道</option><option value='jiangpin' >_礼品兑换</option><option value='photo' >_图库信息</option><option value='bianming' >_黄页_服务机构</option><option value='qiye' >_企业网站</option><option value='revert' >_评论信息</option><option value='youhui_all' >_优惠券信息</option><option value='adv_all' >_自定义广告</option><option value='site' >_首页热门/分站数据</option><option value='config' >_综合设置</option>";
var _clienttype = "<option value='0' checked>电脑版主站</option><option value='1' >手机版主站模版</option><option value='2' >企业模版</option><option value='3' >口碑店铺模版</option><option value='4' >新闻专题模版</option><option value='5' >商城店铺模版</option><option value='6' >团购模版</option><option value='7' >数据接口模版</option>";
var _column1 = "<option value='1' checked>网站首页专用(电脑/手机)</option><option value='0'>通用:(该客户端/套系):)</option><option value='2'>_信息频道</option><option value='3'>_房产频道</option><option value='4'>_团购频道</option>" +
    "<option value='5'>_活动频道</option><option value='6'>_人才频道</option><option value='7'>_投票系统</option><option value='8'>_购物频道</option><option value='9'>_店铺频道</option><option value='24'>_快店频道</option><option value='25'>_贴吧频道</option>" +
    "<option value='10'>_视频频道</option><option value='11'>_文章/新闻</option><option value='12'>_网址频道</option><option value='13'>_礼品兑换</option><option value='14'>_图库频道</option><option value='15'>_黄页频道</option><option value='16'>_地图频道</option><option value='17'>_促销频道</option><option value='18'>_电台频道</option><option value='19'>_帮助频道</option><option value='20'>_历史上的今天</option><option value='21'>_音乐频道</option><option value='22'>_网站公告(家乡)页</option><option value='23'>_优惠券页</option>";
var _loginstate = "<option value='0' checked>不限制</option><option value='1' >未登陆(登陆输出空)</option><option value='2' >登陆会员显示</option>";

function data_change(_id)
{
    var _str = ""; 
    var arrstr;
    if (_id == "0") {  arrstr = new Array("20|::通用:该客户端/套系/有效::");}
    else if (_id == "1") {  arrstr = new Array("10|::首页专用::");}
    else if (_id == "2") {  arrstr = new Array("1001|信息首页标签", "1000|信息通用标签", "1002|_大类首页通用", "1010|••交易类首页", "1011|••房屋类首页", "1012|••活动类首页", "1013|••服务类1首页", "1014|••交友类首页", "1015|••服务类2首页", "1016|••通用类首页", "1017|••自定类首页", "1110|___内容页通用","1111|___交易类内容页", "1112|___房屋类内容页", "1113|___活动类内容页", "1114|___服务类1内容页", "1115|___交友类内容页", "1116|___服务类2内容页", "1117|___通用类内容页", "1119|___自定义分类内容页", "1118|___信息发布页"); }
    else if (_id == "3") { arrstr = new Array("2001|房产首页标签", "2000|房产通用标签", "2002|_大类首页通用", "2010|••新房(楼盘)首页", "2011|••二手房首页", "2012|••租房首页", "2013|••小区首页列表", "2014|••中介(经纪人)列表", "2015|••资讯首页", "2016|••求组求购列表", "2110|___楼盘概览", "2111|___楼盘详情", "2113|___房价走势", "2114|___楼盘视频", "2115|___楼盘图库", "2116|___房型图", "2117|___位置与周边", "2118|___点评", "2119|___在线问房", "2120|___二手房内容页", "2121|___出租内容页", "2122|___小区详情页", "2123|___小区出租房", "2124|___小区出售房", "2125|___小区房型图", "2126|___小区照片", "2127|___小区评价", "2128|___店铺首页", "2129|___店铺二手房", "2130|___店铺出租房", "2131|___店铺个人介绍", "2132|___店铺公司介绍", "2133|___求租求购填写页", "2134|___房产资讯内容页", "2135|___楼盘均价走势图"); }
    else if (_id == "4") { arrstr = new Array("3001|首页(今日团购)", "3000|团购通用标签", "3010|••更多团购", "3012|••专题团购", "3011|••流程问题合作", "3110|___团购详情", "3111|___团购兑换", "3112|___团购下单页"); }
    else if (_id == "5") { arrstr = new Array("4001|活动首页", "4000|活动通用标签", "4002|_大类首页通用", "4110|___活动详情", "4111|___自发团购页面", "4112|___活动报名页面"); }
    else if (_id == "6") {  arrstr = new Array("5001|人才首页", "5000|人才通用标签", "5002|_大类首页通用", "5010|••职位列表", "5011|••人才列表", "5012|••招聘企业列表", "5013|••资讯列表", "5110|___职位详情", "5111|___人才详情", "5112|___企业简介", "5113|___资讯内容"); }
    else if (_id == "7") {  arrstr = new Array("6001|投票首页", "6000|投票通用标签", "6010|••选手列表", "6110|___选手详情", "6111|___投票填写页"); }
   // else if (_id == "8") {  arrstr = new Array("7001|购物首页", "7000|购物通用标签", "7010|••购物列表", "7011|••品牌列表", "7012|••商品分类列表", "7110|___商品详情"); }
    else if (_id == "9") {  arrstr = new Array("8001|店铺首页(电脑/手机)", "8000|店铺通用标签(电脑/手机)", "8010|••商家店铺列表(电脑/手机)", "8110|___商家店铺首页(店铺客户端)", "8111|___店铺介绍(店铺客户端)", "8112|___店铺动态(店铺客户端)", "8113|___店铺展示(店铺客户端)", "8114|___商品展厅(店铺客户端)", "8115|___团购与折扣(店铺客户端)", "8116|___网友点评(店铺客户端)", "8117|___联系方式(店铺客户端)", "8118|___在线预约(店铺客户端)", "8119|___专柜(店铺客户端)", "8120|___商品详情(店铺客户端)", "8121|___店铺全景(店铺客户端)"); }
    else if (_id == "10") {  arrstr = new Array("9001|视频首页", "9000|视频通用标签", "9010|••视频列表", "9110|___视频播放页", "9111|___在线影视"); }
    else if (_id == "11") { arrstr = new Array("10001|文章/新闻首页", "10000|文章/新闻通用标签", "10002|_大类首页通用", "10010|••文章列表", "10110|___通用内容页", "10111|___文章内容页", "10112|___图文内容页"); }
    else if (_id == "12") { arrstr = new Array("11001|网址首页", "11000|网址通用标签", "11010|••网址分类列表"); }
    else if (_id == "13") {  arrstr = new Array("12001|礼品兑换首页列表"); }
    else if (_id == "14") { arrstr = new Array("13001|图库首页", "13000|图库通用标签", "13010|••图库类别列表", "13111|___图集展示页", "13112|___图文展示页"); }
    else if (_id == "15") { arrstr = new Array("14001|黄页首页", "14000|黄页通用标签", "14002|_分类首页通用", "14010|••服务机构列表", "14011|••公司企业列表", "14110|___通用内容页", "14111|___服务机构内容页"); }
    else if (_id == "16") { arrstr = new Array("16001|地图首页", "16000|地图通用标签", "16110|黄页_服务机构地图", "16111|出租房地图", "16112|出售地图", "16113|口碑商家地图", "16114|房源地图"); }
    else if (_id == "17") { arrstr = new Array("17001|促销首页", "17000|促销通用标签", "17110|促销卡页标签", "17111|商家动态标签", "17112|促销内容标签"); }
    else if (_id == "18") {  arrstr = new Array("18001|电台首页"); }
    else if (_id == "19") {  arrstr = new Array("19001|帮助通用", "19000|帮助(网站信息)通用", "19010|网站信息", "19011|会员中心", "19012|商家中心");}
    else if (_id == "20") {  arrstr = new Array("20001|历史上的今天"); }
    else if (_id == "21") {  arrstr = new Array("21001|音乐首页"); }
    else if (_id == "22") { arrstr = new Array("22001|公告列表页", "22000|公告(留言通用)", "22010|留言列表", "22110|公告内容页(家乡)"); }
   // else if (_id == "23") { arrstr = new Array("23001|优惠券首页", "23000|优惠券通用", "23110|优惠券内容页", "23111|优惠券打印页"); }
    else if (_id == "24") {  arrstr = new Array("24001|快店频道首页", "24000|快店通用标签", "24110|___快店店铺首页", "24111|___快店商品搜索页","24112|___快店评论页", "24113|___快店商品详情页"); }
    else if (_id == "25") {  arrstr = new Array("25001|贴吧频道首页", "25000|贴吧通用标签", "25110|___帖子内容页"); }
    	//历史上的今天
     _str = "";
    for (var i = 0; i < arrstr.length; i++) {
        var _arr = arrstr[i].split("|");
        _str += "<option value='" + _arr[0] + "'>" + _arr[1] + "</option>";
    }
    return _str;
}

function tsjx_add_event() {
    //外部表单选择事件
    $("#c_form1").click(function () {
        $("#txt_value1").val("{$ID}");
    });
	$("#c_form1_1").click(function () {
        $("#txt_value1").val("{$bigid}");
    });
	$("#c_form1_2").click(function () {
        $("#txt_value1").val("{$categoryid}");
    });
    $("#c_form2").click(function () {
       $("#txt_value2").val("{$ID}");
    });
	$("#c_form2_1").click(function () {
       $("#txt_value2").val("{$bigid}");
    });
	$("#c_form2_2").click(function () {
       $("#txt_value2").val("{$categoryid}");
    });
    $("#c_form3").click(function () {
       $("#txt_value3").val("{$ID}");
    });
	$("#c_form3_1").click(function () {
       $("#txt_value3").val("{$bigid}");
    });
	$("#c_form3_2").click(function () {
       $("#txt_value3").val("{$categoryid}");
    });
}
//初始加载状态
function tsjx_top_clear(){
    //最上层 标签使用说明
    $("#sel_clienttype").html(_clienttype);
    $("#sel_column1").html(_column1);
    $("#sel_column2").html("");
    $("#s_column2").hide();
    $("#sel_loginstate").html(_loginstate);
    $("#sel_clienttype").change(tsjx_clienttype_change);
    $("#sel_column1").change(tsjx_column1_change);
    tsjx_clienttype_change();
}
function tsjx_clienttype_change() {
    var _clienttype = $("#sel_clienttype").val();
    var new_data = new Date();
    $.ajax({
        url: "/request.ashx?action=files&_clienttype=" + _clienttype + "&newdate=" + new_data,
        success: function (_msg) {
            $("#sel_template").html(_msg);
            if ($("#hid_template").val() != undefined) {
                var _template = $("#hid_template").val();
                $("#sel_template").val(_template);
            }
        }
    });
}
    function top_init() {
        tsjx_top_clear();
        $("#sel_clienttype").val($("#hid_clienttype").val());
        tsjx_clienttype_change();
        $("#sel_template").val($("#hid_template").val());
        $("#sel_loginstate").val($("#hid_loginstate").val());                    
        var _column = $("#hid_column").val();
        var _tmp =0;
        if (_column.length==2) {
        	if(_column==10){
            $("#sel_column1").val(1);
          }else{$("#sel_column1").val(0);}
        } // 11001
        else if (_column.length == 4) {
            _tmp = parseInt(_column.substr(0, 1)) + 1;
            $("#sel_column1").val(_tmp);
            tsjx_column1_change();
            $("#sel_column2").val(_column);
        }
        else if (_column < 16000) {
            _tmp = parseInt(_column.substr(0, 2)) + 1;
            $("#sel_column1").val(_tmp);
            tsjx_column1_change();
            $("#sel_column2").val(_column);
        }else if (_column > 99999) {
            _tmp = parseInt(_column.substr(0, 3));
            $("#sel_column1").val(_tmp);
            tsjx_column1_change();
            $("#sel_column2").val(_column);
        }
        else {
            _tmp = parseInt(_column.substr(0, 2));
            $("#sel_column1").val(_tmp);
            tsjx_column1_change();
            $("#sel_column2").val(_column);
        }
    }
function tsjx_type_clear() {
    //调用范围          
    $("#d_range").hide();
    $("#s_category1").html();
    $("#s_category2").html();
    $("#s_category3").html();
    $("#s_category4").html();
    $("#s_category5").html();
    $("#s_category1").hide();
    $("#s_category2").hide();
    $("#s_category3").hide();
    $("#s_category4").hide();
    $("#s_category5").hide();
    //调用内容
    $("#d_display").hide();
    $("#s_ctrl").html("");
    $("#hid_fields").html("");
     
    //调用条件
    $("#d_condition").hide();
    $("#sel_field").html("<option value=''>::请选择内容范围::</option>");
    $("#txt_condition").val();
    //调用条数
    $("#d_count").hide();
    //排序方式
    $("#d_order").hide();
    $("#sel_orderfield1").html("<option value=''>::请选择内容范围::</option>");
    $("#sel_orderfield2").html("<option value=''>::请选择内容范围::</option>");
    //SQL文本
    $("#d_sql").hide();
    $("#sel_type").change(tsjx_type_change);
}
function tsjx_form_clear() {
    $("#s_category1").html();
    $("#s_category2").html();
    $("#s_category3").html();
    $("#s_category4").html();
    $("#s_category5").html();
    $("#s_category1").hide();
    $("#s_category2").hide();
    $("#s_category3").hide();
    $("#s_category4").hide();
    $("#s_category5").hide();
       $("#hid_column").val();
    //调用内容
    $("#d_display").hide();
    $("#s_ctrl").html("");
    $("#hid_fields").html("");
    
   
    //调用条件
    $("#d_condition").hide();
    $("#sel_field").html("<option value=''>::请选择内容范围::</option>");
    $("#txt_condition").val();
    //调用条数
    $("#d_count").hide();
    //排序方式
    $("#d_order").hide();
    $("#sel_orderfield1").html("<option value=''>::请选择内容范围::</option>");
    $("#sel_orderfield2").html("<option value=''>::请选择内容范围::</option>");
}
//标签类型发生改变
function tsjx_type_change() {
    tsjx_type_clear();
    var _type = $("#sel_type").val();
    $("#hid_column").val();
    if (_type == "") {
        return;
    }
    if (_type == 1) {
        $("#d_range").show();
        $("#d_count").show();
        $("#sel_table").html(_nav);
        $("#sel_table").change(tsjx_table_change); //切换表
        return;
    }
    if (_type == 2) {
        $("#d_range").show();
        $("#d_count").show();
        $("#sel_table").html(_list);
        $("#sel_table").change(tsjx_table_change); //切换表
        return;
    }
    if (_type == 3) {
        return;
    }
    if (_type == 4) {
        $("#d_sql").show();
    }
}
function tsjx_column1_change() {
    var _sel = $("#sel_column1").val();
    var _op = data_change(_sel);
    if (_op == "") {
        $("#sel_column2").html();
        $("#s_column2").hide();
    }
    else {
        $("#sel_column2").html(_op);
        $("#s_column2").show();
    }
}
function tsjx_category1_change() {
	
    var _table = $("#sel_table").val();
    var _category1 = $("#sel_category1").val();
    $("#sel_category2").html("");
        $("#s_category2").hide();
    if (_category1 == "") {
        return;
    }
    var new_data = new Date();
    $.ajax({
        url: "/request.ashx?action=lable_category&_table=" + _table + "&_categoriyid=" + _category1 + "&newdate=" + new_data,
        success: function (_msg) {
            if (_msg == "") {
                $("#sel_category2").html("");
                $("#s_category2").hide();
                return;
            }
            var _obj = JSON.parse(_msg);
            var _str = "<option value=''>:所有分类:</option>";
            for (var i = 0; i < _obj.Rows.length; i++) {
                _str += "<option value='" + _obj.Rows[i].CategoryID + "'>" + _obj.Rows[i].Chrcategory + "</option>";
            }
            //主类别赋值
            $("#s_category2").show();
            $("#sel_category2").html(_str);
            if ($("#hid_category").val() != undefined) {
                            var _category = $("#hid_category").val().split('|');
                            if (_category.length > 1 && _category[1] != "") {
                                $("#sel_category2").val(_category[1]);
                            }
                            if (_category.length > 2 && _category[2] != "") {
                                $("#sel_category3").val(_category[2]);
                            }
                            if (_category.length > 3 && _category[3] != "") {
                                $("#sel_category4").val(_category[3]);
                            }
                            if (_category.length > 4 && _category[4] != "") {
                                $("#sel_category5").val(_category[4]);
                            }
            }

        }
    });

}
function tsjx_table_change() {

    var _table = $("#sel_table").val();
     $("#hid_column").val();
    tsjx_form_clear();
    if (_table == "") {
        return;
    }
    
var new_data = new Date();
    $.ajax({
        url: "/request.ashx?action=lable_category&_table=" + _table + "&newdate=" + new_data,
        success: function (_msg) {
            if (_msg == "") {
                return;
            }
            $("#d_count").show();
			
            var _obj = JSON.parse(_msg);
            var _str = "<option value=''>:所有分类:</option>";
            for (var i = 0; i < _obj.Rows.length; i++) {
                _str += "<option value='" + _obj.Rows[i].CategoryID + "'>" + _obj.Rows[i].Chrcategory + "</option>";
            }
            //主类别赋值
            $("#s_category1").show();
            $("#sel_category1").html(_str);
            //主类别添加事件
            $("#sel_category1").change(tsjx_category1_change);
            if ($("#hid_category").val() != undefined) {
                var _category = $("#hid_category").val().split('|');
                if (_category.length > 0) {
                    $("#sel_category1").val(_category[0]);
                }
                if (_category < 1) {
                    $("#s_category2").hide();
                    $("#sel_category2").html("");
                }
                else {
                    tsjx_category1_change();
                }
            }


        }
    });
    //调用345分类
  $.ajax({
      url: "../request.ashx?action=category3&_table=" + _table + "&newdate=" + new_data,
      success: function (_msg) {
          if (_msg != "") {
         for(var i=0;i<_msg["msg"].length;i++)
         {
         	 var _str = "<option value=''>:所有分类:</option>";
         	 for(var key in _msg["msg"][i]){_str += "<option value='" + key + "'>" + _msg["msg"][i][key] + "</option>";         	 	
         	 	}
         	 $("#s_category" + (i+3)).show();
           $("#sel_category" + (i+3)).html(_str);
         }
           if ($("#hid_category").val() != undefined) {
                            var _category = $("#hid_category").val().split('|');
                            if (_category.length > 2 && _category[2] != "") {
                                $("#sel_category3").val(_category[2]);
                            }
                            if (_category.length > 3 && _category[3] != "") {
                                $("#sel_category4").val(_category[3]);
                            }
                            if (_category.length > 4 && _category[4] != "") {
                                $("#sel_category5").val(_category[4]);
                            }
            }
         
       }
      }
  });

    //调用内容与条件
    $.ajax({
        url: "/request.ashx?action=fields&_table=" + _table + "&newdate=" + new_data,
        success: function (_msg) {
            if (_msg == "") {
                $("#d_condition").hide();
                $("#sel_field1").html("<option value=''>::请选择内容范围::</option>");
                $("#sel_field2").html("<option value=''>::请选择内容范围::</option>");
                $("#sel_field3").html("<option value=''>::请选择内容范围::</option>");
                $("#txt_condition").val();
                $("#d_display").hide();
                $("#s_ctrl").html("");
                $("#hid_fields").html("");
                $("#d_order").hide();
                $("#sel_orderfield1").html("<option value=''>::请选择内容范围::</option>");
                $("#sel_orderfield2").html("<option value=''>::请选择内容范围::</option>");
                return;
            }
            $("#d_display").show();
            $("#d_condition").show();
            $("#d_order").show();
            var _obj = JSON.parse(_msg);
            var _str = "";
            var _fields = "";
            
            for (var i = 0; i < _obj.Rows.length; i++) {
                _str += "<li calss\"column\">";
                _str += "<input  name='sel_display' id='" + _obj.Rows[i].ckeyword + "' value='" + _obj.Rows[i].ckeyword + "' type='checkbox' onclick=\"checkboxcolumn('" + _obj.Rows[i].ckeyword + "');\" />"+ _obj.Rows[i].cdescription;
                _str += "</li>";
                _fields += _obj.Rows[i].ckeyword + ",";
            }

            //复选框                    
            $("#s_ctrl").html(_str);
            //条件下拉框
            _str = "<option value=''>::请选择内容范围::</option>";
            for (var ai = 0; ai < _obj.Rows.length; ai++) {
                _str += "<option value='" + _obj.Rows[ai].ckeyword + "'>" + _obj.Rows[ai].cdescription + "</option>";
            }
     
            $("#sel_field1").html(_str);
            $("#sel_field2").html(_str);
            $("#sel_field3").html(_str);
            $("#sel_orderfield1").html(_str);
            $("#sel_orderfield1").val(_obj.Rows[0].ckeyword);
            $("#sel_orderfield2").html(_str);

            //复选框赋值
            if ($("#hid_display").val() != undefined && $("#hid_display").val() != "") {
                var _display = $("#hid_display").val().split(",");
                
                for (var aai = 0; aai < _display.length; aai++) {
                	$("#" + _display[aai]).attr("checked", true);
                }
            }
            //条件赋值
            if ($("#hid_condition1").val() != undefined) {
                var condition1 = $("#hid_condition1").val().split("|");
                $("#sel_field1").val(condition1[0]);
                $("#sel_oper1").val(condition1[1]);
                $("#txt_value1").val(condition1[2])
            }
            if ($("#hid_condition2").val() != undefined) {
                var condition2 = $("#hid_condition2").val().split("|");
                $("#sel_field2").val(condition2[0]);
                $("#sel_oper2").val(condition2[1]);
                $("#txt_value2").val(condition2[2])
            }
            if ($("#hid_condition3").val() != undefined) {
                var condition3 = $("#hid_condition3").val().split("|");
                $("#sel_field3").val(condition3[0]);
                $("#sel_oper3").val(condition3[1]);
                $("#txt_value3").val(condition3[2])
            }
            //            //复选框赋值
            if ($("#hid_display").val() != undefined) {
                var _display = $("#hid_display").val().split(",");
            }
            //排序赋值
            if ($("#hid_order").val() != undefined) {
                var _order = $("#hid_order").val().split(",");
                if (_order.length >= 1) {
                    var _tmp = _order[0].split(" ");
                    $("#sel_orderfield1").val(_tmp[3]);
                    $("#sel_orderrule1").val(_tmp[4]);
                }
                if (_order.length > 1) {
                    var _tmp = _order[1].split(" ");
                    $("#sel_orderfield2").val(_tmp[0]);
                    $("#sel_orderrule2").val(_tmp[1]);
                }
            }
            
        }
    });
         
}

function insertunit(text, obj) {
		if(!obj) {
			obj = 'txt_content';
		}
		$(obj).focus();
	}
		function checkboxcolumn(txt) {
			
		var _obj = document.getElementsByName("sel_display");
		var str="";
		var sub_str="";
        for (var i = 0; i < _obj.length; i++) {
                if(_obj[i].checked){
                	str+= " " +"{$" + _obj[i].value + "} ";
                	sub_str+= "," + _obj[i].value;
                }
        }
        sub_str = sub_str.substr(1);
        $("#temp_display").html(str);
        $("#hid_display").val(sub_str);
    }

function locationhref(url)
{
	var word=Request.QueryString(url,"keyword") ;
	url = url.replace(word,escape(word));
	setTimeout(function(){window.location.href=url;},10);
}
Request = {
QueryString : function(str,item){
var svalue = str.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
return svalue ? svalue[1] : svalue;
}
}
