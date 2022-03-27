import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function OwlCarous() {
    const Responsive = {
        0:{
            items:1.2,
            margin:5
        },
        500:{
            items:2,
            margin:10
        },
        768:{
            items:2.5,
            margin:10
        },
        900:{
            items:3,
            margin:10
        },
        1200:{
            items:3.5,
            margin:20
        },
        1400:{
            items:4,
            margin:20
        }
    }
    const images = [
        "https://www.whatsappimages.in/wp-content/uploads/2021/07/nice-lord-Sai-Baba-hd-wallpaper.jpg",
        "https://hindutrend.com/wp-content/uploads/2020/10/ultra-hd-sai-baba-images-hd-1080p-for-mobile.jpg",
        "https://i.pinimg.com/originals/a6/86/c0/a686c01ba47fb8ebea2ca408f8aa0404.jpg",
        "https://i.pinimg.com/736x/99/87/f5/9987f5db2fcb986b4f187e8a7ced2d1a.jpg",
        "http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Sai-Baba-Images-3.jpg"

    ];
  return (
    <div>
      <OwlCarousel
      loop
      autoplay={true}
      responsive={Responsive}
      autoplaySpeed={2000}
      autoplayTimeout={2000}
      autoplayHoverPause={true}
      >
          {images.map((item) => (
          
          <div style={{margin:10, height:450}}>
          <img key={item} src={item} alt="" />
        </div>

          ))}
       
        
      </OwlCarousel>
    </div>
  );
}