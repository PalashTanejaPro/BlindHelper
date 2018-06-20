$(document).ready(function() {
 var sourceCode = document.getElementsByTagName('html')[0].innerHTML;
 var sideBarContent = "";
 var navigationContent = "";
 var headers = "";
 var paragraphContent = "";
 var lists = "";
 var tableContent = "";
 var imageAlt = "";
 var blockQuotes = "";
 var footers = "";
 var buttons = "";
 var cards = "";
 var carouselContent = "";

 function addToContent(tag) {
    var count = document.getElementsByTagName(tag).length;
    content = "";
    for (var i = 0; i < count; i++) {
      content += document.getElementsByTagName(tag)[i].innerHTML + " ";
     }
    return content;
 }

 function addToContentWithClass(htmlclass) {
   var count = document.getElementsByClassName(htmlclass).length;
   var content = "";
   for (var i = 0; i < count; i++) {
     content += document.getElementsByClassName(htmlclass)[i].innerHTML + " ";
   }
   return content;
 }

 sideBarContent = addToContent("aside") + addToContentWithClass(sideBarContent, "nav") + addToContentWithClass("breadcrumb-item") +
 				  addToContentWithClass("tab-content") + addToContentWithClass("page-link") + addToContentWithClass("navigation");
 headers = addToContent("h");
 paragraphContent = addToContent("p") + addToContentWithClass("content") + addToContentWithClass("main");
 lists = addToContent("li") + addToContentWithClass("list-group-item");
 tableContent = addToContent(tableContent, "th") + addToContent(tableContent, "td");
 navigationContent = addToContent("a");
 blockQuotes = addToContentWithClass("blockquote");
 footers = addToContentWithClass("footer");
 buttons = addToContentWithClass("btn");
 cards = addToContentWithClass("card");
 carouselContent = addToContentWithClass("carousel-caption");

 // console.log(sideBarContent);
 var count = document.getElementsByTagName("img").length;
 for (var i = 0; i < count; i++) {
   imageAlt += document.getElementsByTagName("img")[i].getAttribute("alt") + " ";
 }

});
