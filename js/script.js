// var list = document.querySelectorAll(".socail li");

// for (var i = 0; i < list.length; i++) {
//     list[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//     });
// }

// var icon = document.querySelector("i");
// icon.addEventListener("click", function() {
//     if (icon.classList.contains("fa-angle-down")) {
//         icon.classList.replace("fa-angle-down", "fa-angle-up");
//     } else {
//         icon.classList.replace("fa-angle-up", "fa-angle-down");
//     }
// });

// var accList = document.querySelectorAll(".accordion .title");

// for (var i = 0; i < accList.length; i++) {
//     accList[i].addEventListener("click", function() {

//         var opened = document.querySelector(".accordion .open");
//         if (opened != null && opened != this.parentNode) {
//             opened.children[1].style.maxHeight = null;
//             opened.children[0].children[1].classList.replace("fa-angle-up", "fa-angle-down");
//             opened.classList.remove("open");
//         }

//         if (this.nextElementSibling.style.maxHeight == "") {
//             this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
//         } else {
//             this.nextElementSibling.style.maxHeight = null;
//         }

//         this.parentNode.classList.toggle("open");

//         if (this.children[1].classList.contains("fa-angle-down")) {
//             this.children[1].classList.replace("fa-angle-down", "fa-angle-up");
//         } else {
//             this.children[1].classList.replace("fa-angle-up", "fa-angle-down");
//         }
//     });
// }
// // -----------------------------------------------------------------------------------------------------------

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

// $(document).ready(function() {
//     $(".set > a").on("click", function() {
//       if ($(this).hasClass("active")) {
//         $(this).removeClass("active");
//         $(this)
//           .siblings(".content")
//           .slideUp(200);
//         $(".set > a i")
//           .removeClass("fa-minus")
//           .addClass("fa-plus");
//       } else {
//         $(".set > a i")
//           .removeClass("fa-minus")
//           .addClass("fa-plus");
//         $(this)
//           .find("i")
//           .removeClass("fa-plus")
//           .addClass("fa-minus");
//         $(".set > a").removeClass("active");
//         $(this).addClass("active");
//         $(".content").slideUp(200);
//         $(this)
//           .siblings(".content")
//           .slideDown(200);
//       }
//     });
//   });
  $(document).ready(function(){
    $(".accordion").on("click", ".accordion-header", function() {
     $(this).next().toggleClass("active").slideToggle();
    });
  })
