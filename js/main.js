 function mainJS(){ 
	    var oSet=document.getElementById("setting"),
		    oSetBox=document.getElementById("settingBox"),
		    aLi=oSetBox.getElementsByTagName("li"),
		    oDetail=document.getElementById("pro_detail"),
		    oPro=document.getElementsByClassName("moreProducts")[0],
	        searchBar=document.getElementById('searchBar'),	
            oCam=oCon.getElementsByClassName('camera_pic')[0];	
	 //显示设置栏 
	        oSet.onmouseover=oSetBox.onmouseover=function(){
		             oSetBox.style.display="block";     
		        };
	        oSetBox.onmouseout=function(){        
                     oSetBox.style.display="none"; 
               };
            			   
	        for(var i=0,aLen=aLi.length;i<aLen;i++)
		     {    
		        aLi[i].onmouseover=function(){
					 for(var i=0;i<aLen;i++)
					 {
						aLi[i].className='';
					 }
					 this.className="settingColor";
		        };	  
		     }	 
		  
	//显示更多产品	  
		     oPro.onmouseover=oDetail.onmouseover=function(){
	                 oDetail.style.display="block"; 
					 oSetBox.style.display="none";
		        };
		     oDetail.onmouseout=function(){
	                 oDetail.style.display="none"; 
			    };	
   //搜索引擎区			
			searchBar.onkeyup=function(){
					 startSearch.call(this,searchBtn,searchBox);
			   };	   		
   //图片上传区         
		    oCam.onclick=function(){
		             picArea.call(this);
		       };	
   //搜索栏边框变化	
			searchBar.onfocus=function(){
				     this.style.borderColor="#3385ff";
			   };
			searchBar.onblur=function(){
				     this.style.borderColor="gray";
					// searchBox.style.display="none";无法点击联想内容链接				
			  }; 
            			  
  }