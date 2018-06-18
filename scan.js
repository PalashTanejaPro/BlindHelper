<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
 var sourceCode = document.getElementsByTagName('html')[0].innerHTML;
 var sideBarContent = "";
 var navigationContent = "";
 var headers = "";
 var paragraphContent = "";
 var lists = "";
 var tableContent = "";

 function addToContent(content, tag) {
    var count = document.getElementsByTagName(tag).length;
    for (var i = 0; i < count; i++) {
    content += document.getElementsByTagName(tag)[i].innerHTML + " ";
     }
   console.log(content);
 }

 /*
  * SIDEBAR CONTENT
  */
 addToContent(sideBarContent, "aside");
 // (?) body sourceCode.search(/>*<\/body/gm);


 /*
  * BODY CONTENT
  */
 addToContent(headers, "h");
 addToContent(paragraphContent, "p");
 addToContent(lists, "li");
 addToContent(tableContent, "table");

 // (?) span sourceCode.search(/>*<\/span>/gm);

 /*
  * NAVIGATION CONTENT
  */
  // a
 addToContent(navigationContent, "a");

});
</script>
