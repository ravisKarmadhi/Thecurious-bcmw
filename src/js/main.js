import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';
import 'select2/dist/js/select2.min.js';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/datepicker.js';
import { App } from './parts/app.js'
import { Plugins } from './parts/plugins.js'
import { Parts } from './parts/parts.js'
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;
$(function () {
  window.windowWidth = $(window).width();
  window.windowHeight = $(window).height();
  window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
  window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
  window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');
  //Functions List Below
  window.app = new App();
  window.app.init();
  window.plugins = new Plugins();
  window.plugins.init();
  window.parts = new Parts();
  window.parts.init();
});
// ===========================================================================
// header js
$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();
  if (scroll >= 50) sticky.addClass("header-fixed");
  else sticky.removeClass("header-fixed");
});
$(window).scroll(function () {
  var sticky = $(".search-list"),
    scroll = $(window).scrollTop();
  if (scroll >= 50) sticky.addClass("search-list-scroll");
  else sticky.removeClass("search-list-scroll");
});
$(document).ready(function () {
  function removeClass() {
    $("#popup").removeClass("d-none");
    // if (windowWidth < 992) {
    //   $("html").addClass("overflow-hidden");
    // }
  }
  var delay = 3000;
  setTimeout(removeClass, delay);
  $("#closePopup").click(function () {
    $("#popup").addClass("d-none");
    // if (windowWidth < 992) {
    //   $("html").removeClass("overflow-hidden");
    // }
  });
  $("#read-more").click(function () {
    $("#details").removeClass("details");
    $("#read-more").addClass("d-none");
    $("#read-less").removeClass("d-none");
  });
  $("#read-less").click(function () {
    $("#details").addClass("details");
    $("#read-more").removeClass("d-none");
    $("#read-less").addClass("d-none");
  });
  $(document).ready(function() {
    // Handle quantity addition
    $('#add').on('click', function() {
      var $input = $('#quantity');
      var quantity = parseInt($input.val(), 10);
      $input.val(quantity + 1);
    });
    // Handle quantity subtraction
    $('#subtract').on('click', function() {
      var $input = $('#quantity');
      var quantity = parseInt($input.val(), 10);
      if (quantity > 1) {
        $input.val(quantity - 1);
      }
    });
  });
  $("#open-delivery-btn").click(function () {
    $("#delivery-modal").removeClass("d-none");
    $("html").addClass("overflow-hidden");
  });
  $("#close-delivery-btn").click(function () {
    $("#delivery-modal").addClass("d-none");
    $("html").removeClass("overflow-hidden");
  });
  $("#open-product-btn").click(function () {
    $("#product-modal").removeClass("d-none");
    $("html").addClass("overflow-hidden");
  });
  $("#close-product-btn").click(function () {
    $("#product-modal").addClass("d-none");
    $("html").removeClass("overflow-hidden");
  });
  $("#input-search").click(function () {
    if (windowWidth > 992) {
      $("#search-desktop").addClass("opacity-0");
      $("#input-search").val("");
    }
    $("#search-list").removeClass("d-none");
    if (windowWidth < 992) {
      $("#toggle-btn, #close-menu, #menu-links").addClass("d-none");
      $("#close-list-btn").removeClass("d-none");
      $("header").addClass("hide-top");
      $("html").addClass("overflow-hidden");
    }
  });
  $("#close-search-btn").click(function () {
    $("#search-desktop").removeClass("opacity-0");
    $("#search-list").addClass("d-none");
    $("#input-search").val("");
  });
  $("#close-list-btn").click(function () {
    $("#toggle-btn").removeClass("d-none");
    $("#close-list-btn").addClass("d-none");
    $("#search-list").addClass("d-none");
    $("header").removeClass("hide-top");
    $("html").removeClass("overflow-hidden");
  });
  $(function() {
    $("#datepicker").datepicker({
      dateFormat: "mm/y",
      changeMonth: true,
      changeYear: true,
      showButtonPanel: true,
      onClose: function(dateText, inst) {
        var year = inst.selectedYear % 100;
        $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        $(this).val($.datepicker.formatDate("mm/", new Date(inst.selectedYear, inst.selectedMonth, 1)) + year);
      }
    });
  });
  $("#open-complete-popup").click(function () {
    $("#complete-popup").removeClass("d-none");
    $("html").addClass("overflow-hidden");
  });
  $("#close-complete-popup").click(function () {
    $("#complete-popup").addClass("d-none");
    $("html").removeClass("overflow-hidden");
  });
  $("#close-offer").click(function () {
    $("#offer-lable").addClass("d-none");
  });
  $("#toggle-btn, #open-menu-icon").click(function () {
    $("#menu-links, #close-menu, #close-menu-icon").removeClass("d-none");
    $("#toggle-btn, #open-menu-icon").addClass("d-none");
    $("html").addClass("overflow-hidden");
  });
  $("#close-menu, #close-menu-icon").click(function () {
    $("#toggle-btn, #open-menu-icon").removeClass("d-none");
    $("#menu-links, #close-menu, #close-menu-icon").addClass("d-none");
    $("html").removeClass("overflow-hidden");
  });
  $("#search-toggle-card").click(function () {
    $("header").addClass("hide-top");
  });
  $("#open-filter-sidebar").click(function () {
    $("#filter-section").removeClass("d-none");
    $("html").addClass("overflow-hidden");
  });
  $("#close-filter-btn").click(function () {
    $("#filter-section").addClass("d-none");
    $("html").removeClass("overflow-hidden");
  });
});