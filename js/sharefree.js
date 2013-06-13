var sfDialogWidth = 600
var sfDialogHeight = 450

var sfTitle = encodeURIComponent($("title").text());
var sfImage = $("img")[0].src;
var currentUrl= encodeURIComponent($(location).attr('href'))
var fblink= "https://www.facebook.com/sharer.php?u=" + currentUrl + "&amp;image=" + sfImage
var twlink = "http://twitter.com/share?text=" + sfTitle + "&amp;url=" + currentUrl
var gplink = "https://plus.google.com/share?url=" + currentUrl
var pilink = "http://pinterest.com/pin/create/button/?url=" + currentUrl + "&amp;media=" + sfImage + "&amp;description=" + sfTitle
var emlink = "mailto:?subject=" + sfTitle + "&body=" + currentUrl
$(".sf-facebook").click(function(){
    window.open(fblink, 'fbshare', 'width=' + sfDialogWidth + ',height=' + sfDialogHeight);
});
$(".sf-twitter").click(function(){
    event.preventDefault();
    window.open(twlink, 'twittershare', 'width=' + sfDialogWidth + ',height=' + sfDialogHeight);
}); 
$(".sf-gplus").click(function(){
    event.preventDefault();
    window.open(gplink, 'gplusshare', 'width=' + sfDialogWidth + ',height=' + sfDialogHeight);
}); 
$(".sf-pinterest").click(function(){
    event.preventDefault();
    window.open(pilink, 'pinshare', 'width=' + sfDialogWidth + ',height=' + sfDialogHeight);
});
$(".sf-email").attr("href",emlink);


