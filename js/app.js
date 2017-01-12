
(function myFunction() {
    
        var bodycolor = document.getElementById("demo");
        
  document.onkeydown = function (e) {
   switch (e.keyCode || e.which) {
     case 81:
         console.log("The code works");
         bodycolor.style.backgroundColor = "red";
       break;
     case 87:
         console.log("The code works");
         bodycolor.style.backgroundColor = "green";
       break;
     case 69:
         console.log("The code works");
         bodycolor.style.backgroundColor = "blue";
       break;
     case 82:
         console.log("The code works");
         bodycolor.style.backgroundColor = "yellow";
       break;
     case 84:
         console.log("The code works");
         bodycolor.style.backgroundColor = "pink";
       break;
     case 89:
         console.log("The code works");
         bodycolor.style.backgroundColor = "orange";
       break;
     default:
       bodycolor.style.backgroundColor = "white";
   }
 };

})();

/*(function myfun1() {

  document.onkeydown = function (e) {

    console.log(e.keyCode);
    var k=e.keyCode;
    
  
  }
})();*/
//comment for commit