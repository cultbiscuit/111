function picArea(){
	      
			     searchBar.onkeyup=null;
				 var oriValue=searchBar.value;
				 var that;
			     var oCamBtn=oCon.getElementsByClassName('cameraPicBtn')[0];
				 var oDraPic=oCon.getElementsByClassName('dragPicWarp')[0];
				 var oEsc=oDraPic.getElementsByClassName('escPic')[0];
			     searchBar.style.cssText="border-top-color:#3385ff;border-left-color:#3385ff;color:#999;font-size:13px;";                       
				 searchBar.value='';
				 searchBar.placeholder="在此处粘贴图片网址";
    			 oDraPic.style.display="block";			
				 this.style.display="none";
				 searchBtn.innerHTML="";
				 oCamBtn.style.display="block";
				 that=this; 
				 
				 searchBar.onfocus=function(){
				       searchBox.style.display="none";
				   }
                     
                 oEsc.onclick=function(){
			           oDraPic.style.display="none";	
					   that.style.display="block";
					   oCamBtn.style.display="none";
					   searchBtn.innerHTML="百度一下";
					   searchBar.placeholder="";
				       searchBar.style.cssText="border-top-color:#999;border-left-color:#999;";
                       searchBar.value=oriValue;
					   
					   searchBar.onkeyup=function(){
					          startSearch.call(this,searchBtn,searchBox);
					   };
                       searchBar.onfocus=function(){
						      this.style.borderColor="#3385ff";
				              startSearch.call(this,searchBtn,searchBox);
				       };	                 
			     } 
 }