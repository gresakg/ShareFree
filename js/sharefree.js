/**
 * ShareFree - Free social bookmarks for your site.
 *
 *  Copyright 2013 by Gregor Gresak <design@gresak.net>
 * 
 * ShareFree free software: you can redistribute 
 * it and/or modify it under the terms of the GNU General Public 
 * License as published by the Free Software Foundation, either 
 * version 3 of the License, or (at your option) any later version.
 * 
 * Some open source application is distributed in the hope that it will 
 * be useful, but WITHOUT ANY WARRANTY; without even the implied warranty 
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license GPL-3.0+ <http://spdx.org/licenses/GPL-3.0+>
 */




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


