document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */

  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("loaded");
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }
  /* Navbar */
  // Autohide

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-500px";
    }
    prevScrollpos = currentScrollPos;
  };
  
  function test() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  $(document).ready(function () {
    setTimeout(function () {
      test();
    });
  });

  $(window).on("resize", function () {
    setTimeout(function () {
      test();
    }, 100);
  });

  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(100);
    setTimeout(function () {
      test();
    });
  });

  $(document).ready(function () {
    $(".indexbtn").click(function (e) {
      $("#index").load("indexload.html");
    });
    $(".indexbtn").click(function (e) {
      $("#gallery").load("indexgallery.html");
    });
    $(".contactbtn").click(function (e) {
      $("#index").load("contact.html");
    });
    $(".contactbtn").click(function (e) {
      $("#gallery").load("contactgallery.html");
    });
    $(".certificatesbtn").click(function (e) {
      $("#index").empty();
    });
    $(".certificatesbtn").click(function (e) {
      $("#gallery").load("certifications.html");
    });
  });

  /**
   * Scroll top button
   */

  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Animation on scroll function and init
   */

  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }

  window.addEventListener("load", () => {
    aos_init();
  });
});
