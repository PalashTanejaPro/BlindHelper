$(document).ready(function() {
  page_contents = {
    sideBarContent: {
      tags: ["aside"],
      value: "",
      class: [
        "nav",
        "breadcrumb-item",
        "tab-content",
        "page-link",
        "navigation"
      ]
    },
    navigationContent: { tags: ["a"], value: "", class: [] },
    headers: { tags: ["h"], value: "", class: [] }, //Does "h" even work?
    paragraphContent: { tags: ["p"], value: "", class: ["content", "main"] }, // What <p> has class of "content"? Solution: use a set
    lists: { tags: ["li"], value: "", class: ["list-group-item"] },
    tableContent: { tags: ["th", "td"], value: "", class: [] },
    imageAlt: { tags: [], value: "", class: [] },
    blockQuotes: { tags: [], value: "", class: ["blockquote"] },
    footers: { tags: ["footer"], value: "", class: ["footer"] },
    buttons: { tags: ["button"], value: "", class: ["button", "btn"] },
    cards: { tags: ["card"], value: "", class: ["card", "cards"] },
    carouselContent: {
      tags: [],
      value: "",
      class: ["carousel-caption", "carousel"]
    }
  };

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

  for (var key in page_contents) {
    for (var i = 0; i < page_contents[key].tags.length; ++i) {
      page_contents[key].value += addToContent(page_contents[key].tags[i]);
    }
    for (var i = 0; i < page_contents[key].class.length; ++i) {
      page_contents[key].value += addToContentWithClass(
        page_contents[key].class[i]
      );
    }
  }

  // console.log(sideBarContent);
  var count = document.getElementsByTagName("img").length;
  for (var i = 0; i < count; i++) {
    page_content["imageAlt"].value +=
      document.getElementsByTagName("img")[i].getAttribute("alt") + " ";
  }
});
