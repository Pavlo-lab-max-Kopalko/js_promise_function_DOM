function e(e,t){return new Promise(function(n,c){e.addEventListener("click",function(c){c.target===e&&n("It was ".concat(t," on the element: ").concat(e.nodeName,", id: ").concat(e.id,"."))}),e.addEventListener("contextmenu",function(c){c.target===e&&n("It was ".concat(t," on the element: ").concat(e.nodeName,", id: ").concat(e.id,"."))}),e.addEventListener("blur",function(c){c.target===e&&n("It was ".concat(t," on the element: ").concat(e.nodeName,", id: ").concat(e.id,"."))})})}var t=function(e){var t=document.createElement("div"),n=document.createTextNode(e);t.className="message",t.appendChild(n),document.body.insertAdjacentElement("beforebegin",t)},n=document.getElementById("login"),c=document.getElementById("password"),o=document.getElementById("submit");e(n,"click").then(t),e(c,"click").then(t),e(o,"click").then(t),e(n,"input").then(t),e(c,"input").then(t),e(n,"blur").then(t),e(c,"blur").then(t),e(o,"blur").then(t);
//# sourceMappingURL=index.205296b7.js.map
