
if(document.referrer){
  var f=document.referrer;
}else{
  var f=top.document.referrer;
}
f=escape(f);
f=f.replace(/&/g,'%A7%A7');
if((f=='null') || (f=='unknown') || (f=='undefined')) f='';
var w=screen.width;
var h=screen.height;
var rand=Math.round(100000*Math.random());
var browser=navigator.appName;
var t=escape(document.title);
var NS_url="";
if(browser!="Netscape") c=screen.colorDepth; else c=screen.pixelDepth;
NS_url=document.URL;
NS_url=escape(NS_url);
NS_url=NS_url.replace(/&/g,'%A7%A7');
var sc1="<img src='/php-stats.php?w="+w+"&amp;h="+h +"&amp;c="+c+"&amp;f="+f+"&amp;NS_url="+NS_url+"&amp;t="+t+"' border='0' alt='' width='1' height='1'>";
document.write(sc1);