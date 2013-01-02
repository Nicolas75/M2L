<!-- DEBUT DU SCRIPT -->
<STYLE TYPE="text/css">
<!--   
#cache {
    position:absolute; top:200px; z-index:10; visibility:hidden;
}
-->
</STYLE>
<DIV ID="cache"><TABLE WIDTH=400 BGCOLOR=#000000 BORDER=0 CELLPADDING=2 CELLSPACING=0><TR><TD ALIGN=center VALIGN=middle><TABLE WIDTH=100% BGCOLOR=#FFFFFF BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD ALIGN=center VALIGN=middle><FONT FACE="Verdana" SIZE=4 COLOR=#000000><BR><img src="../img/loader.gif" /><BR><BR></FONT></TD>  </TR></TABLE></TD>  </TR></TABLE></DIV>

<SCRIPT LANGUAGE="JavaScript">
/*
SCRIPT EDITE SUR L'EDITEUR JAVASCRIPT
http://www.editeurjavascript.com
*/
var nava = (document.layers);
var dom = (document.getElementById);
var iex = (document.all);
if (nava) { cach = document.cache }
else if (dom) { cach = document.getElementById("cache").style }
else if (iex) { cach = cache.style }
largeur = screen.width;
cach.left = Math.round((largeur/2)-200);
cach.visibility = "visible";

function cacheOff()
	{
	cach.visibility = "hidden";
	}
window.onload = cacheOff
</SCRIPT>
<!-- FIN DU SCRIPT --><noscript><a href="http://www.editeurjavascript.com/mycircle/">echange de lien</a></noscript>