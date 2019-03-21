function $(id){
	return document.getElementById(id);
}

$('logbtn').onclick=function(){ 
     var name=$('name').value;
       var password=$('password').value;
       url="./chklog.php";
    url+="?name="+name+"&password="+password;
    xmlHttp.open("GET",url,true);
    xmlHttp.send();
      xmlHttp.onreadystatechange=function(){
   if(xmlHttp.readyState===4&&xmlHttp.status===200){
           var xmlDoc=xmlHttp.responseText;
    if(xmlDoc==='0'){
         $('sperror').style.visibility="visible";
      $('sperror').innerHTML="用户名或密码错误，或尚未激活";  
    }
    else if(xmlDoc==='1'){
          $('sperror').style.visibility="visible";
       $('sperror').innerHTML="<font color=green>输入正确</font>";  
       location.href=name;
    }
}
}
}
 //$('sperror').