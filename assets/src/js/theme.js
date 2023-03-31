import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

window.lightGallery = lightGallery;
window.lgThumbnail = lgThumbnail;
window.lgZoom = lgZoom;

window.$ = window.jQuery = require("jquery");

// lightGallery(document.getElementById("gallery"), {
//     selector: ".swiper-image",
//     plugins: [lgZoom, lgThumbnail],
//     speed: 500,
//     galleryId: 1,
// });
//
// var sliderSwiper = new Swiper(".slider-swiper", {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     autoplay: {
//         delay: 5000,
//     },
// });

// $(document).ready(function () {
//
// });
