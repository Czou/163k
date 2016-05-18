var markersArray = [];
var infoWindowArray =  [];
if(typeof GoogleMap === 'undefined'){
	var GoogleMap = {};
}
(function(){
	if (!document.getElementById("map-cnt")) {
		return false;
	}
	else {
		// 上一次的查询地址
		var lastAddress = '';
		// 上一次的查询坐标
		var lastPoint = null;
		// 最后一个创建的标记控件
		var lastMarker = null;
		// 用户标记的最后一个坐标点
		var cusLastPoint = null; 
		GoogleMap.mapMsg = [];
		
		
		var geocoder = new google.maps.Geocoder();
		var myOptions = {
		  zoom: 15,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById("map-cnt"), myOptions);
		
		// 将查询坐标添加到地图
		GoogleMap.addPointToMap = function(cPoint){
			map.setCenter(cPoint);
			var marker = new google.maps.Marker({
			  map: map,
			  position: cPoint
			});
			if (GoogleMap.mapMsg) {
				google.maps.event.addListener(marker, "click", function(){
					var msg = '<span class="fgmap_markerMsg">', j;
					msg += '<h4>' + GoogleMap.mapMsg[1][0] + '</h4>';
					for (var j = 1; j < GoogleMap.mapMsg[1].length; j++) {
						msg += GoogleMap.mapMsg[1][j] + "<br />";
					}
					msg += "</span>";
					var infowindow = new google.maps.InfoWindow({
					  content:msg
					});
					infoWindowArray.push(infowindow);
					infowindow.open(map, marker);
					infowindow.setPosition(cPoint);
 				    infowindow.open(map);
				});
			}
			lastPoint = cPoint;
		};
		// 通过地址/坐标将Marker显示到地图上
		GoogleMap.showLocation = function(cPoint){
			if (typeof cPoint === 'string') {
				codeAddress(cPoint,map);
			}
			else{
				var myLatlng = new google.maps.LatLng(cPoint[0], cPoint[1]);
				GoogleMap.addPointToMap(myLatlng);
			}
		};
		// 创建标记
		GoogleMap.createMarker = function(latlng){
			var marker = new google.maps.Marker({
				map: map,
				position: latlng
			});
			markersArray.push(marker);
		};
		// 用户自定义标注
		GoogleMap.customMarkPoint = function(){
			google.maps.event.addListener(map, 'click', function(event) {
				placeMarker(event.latLng,map);
			});
		};
		// 取消用户自定义坐标操作
		GoogleMap.MapCancel = function(){
			GoogleMap.clearOverlays();
			GoogleMap.resetInfoWindow();
		};
		// 保存用户自定义坐标
		GoogleMap.MapOk = function(){
			var savedPoint = GoogleMap.lastPoint;
			var lat = savedPoint.lat(), lng = savedPoint.lng();
			var markTip = document.getElementById('cusMarkTip');
			markTip.innerHTML = '<h4>正在上传您所保存的坐标信息...</h4>';
			
			window.opener.document.getElementById('shop_x').value=lat;
			if(window.opener.document.getElementById('ggmap')){
				window.opener.document.getElementById('ggmap').value="1";
			}
			else{
				window.opener.document.getElementById('shop_z').value="1";
			}
			window.opener.document.getElementById('shop_y').value=lng;
			alert("保存成功!");
			window.close();
		};
		GoogleMap.clearOverlays = function(){
		  if (markersArray) {
			for (i in markersArray) {
			  markersArray[i].setMap(null);
			}
		  }
		}
		GoogleMap.resetInfoWindow= function(){
			if(infoWindowArray){
				for(i in infoWindowArray){
					infoWindowArray[i].close();
				}
			}
		}
	}
})();

function placeMarker(location,map){
	GoogleMap.clearOverlays();
	GoogleMap.resetInfoWindow();
 	var marker = new google.maps.Marker({
		position: location, 
		map: map
	});
	GoogleMap.lastPoint = location;
	markersArray.push(marker);
	var markTip = '<div class="fgmap_markerMsg" id="cusMarkTip">';
	markTip += '<h4>用户地图标注</h4>';
	markTip += '<div id="mapTips" style="font-size:12px;"><p>当前经纬度：' + location + '<br />';
	markTip += '是否将新位置设置为您要的默认位置？</p>';
	markTip += '<div class="MDB" style="text-align:center;"><button id="MapOK" onclick="GoogleMap.MapOk()"> 确 认 标 注 </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></div></div>';
	var infowindow = new google.maps.InfoWindow({
	  content:markTip
	});
	infoWindowArray.push(infowindow);
	infowindow.open(map, marker);
}
function codeAddress(address,map) {
	var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
		  GoogleMap.lastPoint = results[0].geometry.location;
           var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
		  markersArray.push(marker);
		  if (GoogleMap.mapMsg) {
				google.maps.event.addListener(marker, 'click', function() {
					var msg = '<span class="fgmap_markerMsg">', j;
					msg += '<h4>' + GoogleMap.mapMsg[1][0] + '</h4>';
					for (var j = 1; j < GoogleMap.mapMsg[1].length; j++) {
						msg += GoogleMap.mapMsg[1][j] + "<br />";
					}
					msg += "</span>";
					var infowindow = new google.maps.InfoWindow({
					  content:msg
					});
					infoWindowArray.push(infowindow);
					infowindow.open(map, marker);
				});
			}
      } else {
        alert("未能解析该地址的原因: " + status);
      }
    });
  }