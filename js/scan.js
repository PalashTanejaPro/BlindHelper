$(document).ready(function() {
  var sourceCode = document.getElementsByTagName('html')[0].innerHTML;
   var sideBarContent = {}; sideBarContent.title = "";
   var navigationContent = {}; navigationContent.title = "";
   var headers = {}; headers.title = "";
   var paragraphContent = {}; paragraphContent.title = "";
   var lists = {}; lists.title = "";
   var tableContent = {}; tableContent.title = "";
   var imageAlt = {}; imageAlt.title = "";
   var blockQuotes = {}; blockQuotes.title = "";
   var footers = {}; footers.title = "";
   var buttons = {}; buttons.title = "";
   var cards = {}; cards.title = "";
   var carouselContent = {}; carouselContent.title = "";
   var tags = ["aside", "h", "p", "li", "th", "td", "a"];
   var tagContent = [sideBarContent, headers, paragraphContent, lists, tableContent,
                     tableContent, navigationContent];
   var classes = ["nav", "breadcrumb-item", "tab-content", "page-link",
                   "navigation", "content", "main", "list-group-item", "blockquote",
                   "footer", "btn", "card", "carousel-caption"];
   var classContent = [sideBarContent, sideBarContent, sideBarContent, sideBarContent,
                       sideBarContent, paragraphContent, paragraphContent, lists,
                       blockQuotes, footers, buttons, cards, carouselContent];

   function addToContent(tag) {
      var count = document.getElementsByTagName(tag).length;
      var content = "";
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
   sideBarContent += addToContent("aside") + addToContentWithClass("nav") + addToContentWithClass("breadcrumb-item")
   	+ addToContentWithClass("tab-content") + addToContentWithClass("page-link") + addToContentWithClass("navigation");
   console.log(sideBarContent);
   for (var i = 0; i < tags.length; i++) {
     tagContent[i].title = addToContent(tags[i]);
   }
   for (var i = 0; i < classes.length; i++) {
     classContent[i].title = addToContentWithClass(classes[i]);
   }
   var count = document.getElementsByTagName("img").length;
   for (var i = 0; i < count; i++) {
     imageAlt += document.getElementsByTagName("img")[i].getAttribute("alt") + " ";
   }
   console.log(sideBarContent.title);
});
