
$(document).ready(function() {
	
	console.log("i love lamp");

	var win   = $(window);
	var doc   = $(document);
	var body  = $('body');
	var $self = $(this);

/* --------------------------------------------------------------
		Google Analytics
-------------------------------------------------------------- */

var googleAnalyticsID = 'UA-';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', googleAnalyticsID]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();