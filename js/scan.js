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

 function addToContent(content, tag) {
    var count = document.getElementsByTagName(tag).length;
    for (var i = 0; i < count; i++) {
      content += document.getElementsByTagName(tag)[i].innerHTML + " ";
     }
   console.log(content);
 }

 function addToContentWithClass(content, htmlclass) {
   var count = document.getElementsByClassName(htmlclass).length;
   for (var i = 0; i < count; i++) {
     content += document.getElementsByClassName(htmlclass)[i].innerHTML + " ";
   }
 }

 addToContent(sideBarContent, "aside");
 addToContentWithClass(sideBarContent, "nav");
 addToContentWithClass(sideBarContent, "breadcrumb-item");
 addToContentWithClass(sideBarContent, "tab-content");
 addToContentWithClass(sideBarContent, "page-link");
 addToContentWithClass(sideBarContent, "navigation");
 addToContent(headers, "h");
 addToContent(paragraphContent, "p");
 addToContentWithClass(paragraphContent, "content");
 addToContentWithClass(paragraphContent, "main");
 addToContent(lists, "li");
 addToContentWithClass(lists, "list-group-item");
 addToContent(tableContent, "th");
 addToContent(tableContent, "td");
 addToContent(navigationContent, "a");
 addToContentWithClass(blockQuotes, "blockquote");
 addToContentWithClass(footers, "footer");
 addToContentWithClass(buttons, "btn");
 addToContentWithClass(cards, "card");
 addToContentWithClass(carouselContent, "carousel-caption");

 var count = document.getElementsByTagName("img").length;
 for (var i = 0; i < count; i++) {
   imageAlt += document.getElementsByTagName("img")[i].getAttribute("alt") + " ";
 }

});
