import React from "react";
import Carousel from "react-material-ui-carousel";

const Slider = () => {

  const bannerData = [
    "https://ansunibaate.com/wp-content/uploads/2019/07/sai-baba-best-hd-image-download.jpg",
    "https://www.desktopbackground.org/download/o/2013/05/28/583022_shirdi-sai-baba-hd-wallpapers_1920x1080_h.jpg",
    "https://wallpaperaccess.com/full/721605.jpg",
    "https://ansunibaate.com/wp-content/uploads/2019/07/sai-baba-hd-image-download.jpg"

  ];
 
  return (
    <Carousel
      autoplay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#fff",
          color: "#494949",
          borderRadius: 0,
          margin: 0,
        },
      }}
      sx={{
       maxHeight: 900,
       maxWidth: 1800
      }}
    >
      {bannerData.map((item) => (
        <img key={item} src={item} alt="" />
      ))}
    </Carousel>
  );
};

export default Slider;