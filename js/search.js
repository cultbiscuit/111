/*
搜索引擎（JSONP实现）
*/  
function pangc(json){ 
		 var oUl=searchBox.childNodes[1];
	     var html = '';
	     if (json.s.length) {
		      oUl.style.display = 'block';		  
		      for (var i=0; i<json.s.length; i++) {	  
			     html += '<li><a href="http://www.baidu.com/s?wd='+json.s[i]+'">'+ json.s[i] +'</a></li>';
			  }
		      oUl.innerHTML = html;
	     }else {
			  searchBox.style.display = 'none';
		      oUl.style.display = 'none';
	     }			
  }
function startSearch(clickBtn,contentView){       			     			
 			var val=this.value;
		    contentView.style.display=val?"block":"none";	 
            this.onkeydown=function(e){			       
					  var e=e||window.event;
					  var key=e.keyCode;		 
					  if(key==13){    
						  window.location.href="https://www.baidu.com/s?wd="+val; 									 
						}	   
			 } 
		    clickBtn.onclick=function(){  			
				      window.location.href="https://www.baidu.com/s?wd="+val;
		     }
			var os=document.createElement("script");//创建js脚本
			os.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&cb=pangc";					 
			document.body.appendChild(os);	
  } 
 