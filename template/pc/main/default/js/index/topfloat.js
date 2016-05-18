    var time = 500;
    var htt = 0;
    function addCount()
    {
        if(time>0)
        {
            time--;
            htt = htt+5;
        }
        else
        {
            return;
        }
        if(htt>Tx)  //高度
        {
            return;
        }
        document.getElementById("hiddenLayer").style.display = "";
        document.getElementById("hiddenLayer").style.height = htt+"px";
        setTimeout("addCount()",50); 
    }
    
	if(topshow){
        addCount();
        setTimeout("noneAds()",10000); //停留时间自己适当调整
	}
    
   
    
    function noneAds()
    {
        if(Tx>0)
        {
            Tx--;
            Nx = Nx-5;
        }
        else
        {
            return;
        }
        if(Nx<0)
        {
            document.getElementById("hiddenLayer").style.display = "none";
            return;
        }
        
        document.getElementById("hiddenLayer").style.height = Nx+"px";
        setTimeout("noneAds()",50); 
    }
   