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
  for (var i = 0; i < tags.length; i++) {
    tagContent[i] = addToContent(tags[i]);
  }
  for (var i = 0; i < classes.length; i++) {
    classContent[i] = addToContentWithClass(classes[i]);
  }
  var count = document.getElementsByTagName("img").length;
  for (var i = 0; i < count; i++) {
    imageAlt += document.getElementsByTagName("img")[i].getAttribute("alt") + " ";
  }
});
