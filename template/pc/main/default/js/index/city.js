document.writeln("<style>");
document.writeln("<!--");
document.writeln(".citydiv_box{width:260px;border:1px solid #A6D0F5;font-size:12px;background-color:#ffffff}");
document.writeln(".citydiv_box li{text-align:center;line-height:18px; height:18px; padding:0;margin:5px;float:left;}");
document.writeln("#tt");
document.writeln("{");
document.writeln("position:absolute;");
document.writeln("visibility:hidden;");
document.writeln("}");
document.writeln("-->");
document.writeln("<\/style>");
document.writeln("<div id=\"city-pop\" style=\"DISPLAY: none;POSITION: absolute;top:25px; left:0;overflow:hidden;border:none;\">");
document.writeln("<div class=\"citydiv_box\">");
document.writeln("  <div style=\"margin:5px; height:20px;\">");
document.writeln("    <span><a onmouseover=\"this.style.cursor=\'hand\';\" onclick=\"itMouse();\">");
document.writeln("    <img src=\"http://life.163k.org/template/default/images\/city_close.gif\" border=\"0\" style=\"float:right;padding:5px;\"\/><\/a>");
document.writeln("    当前：");
document.writeln("    <font style=\"color:#FF0000\">卡尔加里<\/font><\/span>");
document.writeln("  <\/div>");
document.writeln("<ul class=\"clearfix\">");
document.writeln(" <li><A href='http://'>上海 </A></li><li><A href='http://'>江苏 </A></li><li><A href='http://'><font color='#2248DD'>天津</font> </A></li><li><A href='http://'><font color='#888888'>武汉</font> </A></li>");
document.writeln("<\/ul>");
document.writeln("<\/div>");
document.writeln("<\/div>");