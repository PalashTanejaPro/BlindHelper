
  var page_contents = {
    sideBarContent: {
      tags: ["aside"],
      value: new Set(),
      class: [
        "nav",
        "breadcrumb-item",
        "tab-content",
        "page-link",
        "navigation"
      ]
    },
    navigationContent: { tags: ["a"], value: new Set(), class: [] },
    headers: { tags: ["h1", "h2", "h3", "h4", "h5", "h6"], value: new Set(), class: [] },
    paragraphContent: { tags: ["p"], value: new Set(), class: ["content", "main"] }, // What <p> has class of "content"? Solution: use a set
    lists: { tags: ["li"], value: new Set(), class: ["list-group-item"] },
    tableContent: { tags: ["th", "td"], value: new Set(), class: [] },
    imageAlt: { tags: [], value: new Set(), class: [] },
    blockQuotes: { tags: [], value: new Set(), class: ["blockquote"] },
    footers: { tags: ["footer"], value: new Set(), class: ["footer"] },
    buttons: { tags: ["button"], value: new Set(), class: ["button", "btn"] },
    cards: { tags: ["card"], value: new Set(), class: ["card", "cards"] },
    carouselContent: {
      tags: [],
      value: new Set(),
      class: ["carousel-caption", "carousel"]
    }
  };

  function addToContent(tag) {
    var count = document.getElementsByTagName(tag).length;
    content = [];
    for (var i = 0; i < count; i++) {
      content.push(document.getElementsByTagName(tag)[i].innerHTML);
    }
    return content;
  }

  function addToContentWithClass(htmlclass) {
    var count = document.getElementsByClassName(htmlclass).length;
    var content = [];
    for (var i = 0; i < count; i++) {
      content.push(document.getElementsByClassName(htmlclass)[i].innerHTML);
    }
    return content;
  }

  for (var key in page_contents) {
    for (var i = 0; i < page_contents[key].tags.length; ++i) {
    	var content = addToContent(page_contents[key].tags[i]);
    	var count = content.length;
    	for (var j = 0; j < count; j++) {
    		page_contents[key].value.add(content[j]);
    	}
    }
    for (var i = 0; i < page_contents[key].class.length; ++i) {
    	var content = addToContent(page_contents[key].class[i]);
   		var count = content.length;
    	for (var j = 0; j < count; j++) {
    		page_contents[key].value.add(content[j]);
    	}
    }
  }

  //console.log(page_contents["paragraphContent"].value);
  var count = document.getElementsByTagName("img").length;
  for (var i = 0; i < count; i++) {
    page_contents["imageAlt"].value +=
      document.getElementsByTagName("img")[i].getAttribute("alt") + " ";
  }
