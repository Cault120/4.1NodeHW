const http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var pathname = url.parse(req.url, true).pathname;
    if(req.url === "/profile"){
        res.write("This is the Profile page!");
    } else if (pathname == "/products") {
        res.write("This is the Products page!<br>");
  
        var qry = url.parse(req.url, true).query;
  
        if (qry.search !== undefined) {
  
          // Get the search parameter
          let searchParam = [qry.search];
          let needleText = JSON.stringify(searchParam);
          // http://localhost:8081/products?search=Banana
          // http://localhost:8081/products?search=Chicken
  
          const arrayHaystack = [
            "Milk",
            "Eggs",
            "Cheese",
            "Pork",
            "Shrimp",
            "Chicken"
          ];
  
          let flag = false;
          function myFunction(item, index) {
            item = '["' + item.toString() + '"]';
  
            console.log("item = " + item + " | " + typeof item);
            if (item == needleText) {
              flag = true;
              console.log("Found the needle in the haystack.");
            }
          }
  
          needleTxt = needleText.toString();
          console.log("needleText = " + needleText + " | " + typeof needleText);
  
          arrayHaystack.forEach(myFunction);
  
          // let mySearch = arrayContains(needleText);
          console.log("Flag: " + flag);
          if (flag) {
            res.write(`Product ${needleText} was found.`);
          } else {
            res.write(`Product ${needleText} was NOT found.`);
          }
  
          // console.log("mySearch: " + typeof mySearch);
          // console.log("mySearch: " + mySearch);
          console.log("============================");
        }

    } else if (req.url === "/cart") {
        res.write("This is the Cart page!");
    } else if (req.url === "/register") {
        res.write("This is the Register page!");
    } else if (req.url === "/login") {
        res.write("This is the Login page!");
    } else {
        res.write("Page wasn't found: "+req.url);
    }
    res.end(); 
}).listen(8081);