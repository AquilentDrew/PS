function getCookieVal (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name)  {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen)  {
var j = i + alen;

if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break; 
}
return null;
}
<!-- Begin
if(GetCookie('FreeStuffL') == null) {
alert ("I'm sorry.  You can not view this area!  You will be bounced to the login page...");
location.href="index.html";
}
document.write('Welcome ' + GetCookie('FreeStuffL'));
// End -->


document.write('code=' + hex_sha1('sonya'));
