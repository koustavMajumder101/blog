import React from "react";
import { data, imageData } from "./Data";
import PostCard from "../PostCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";
import { Grid } from "@mui/material";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   adaptiveHeight: true,
//   //   responsive: [
//   //     {
//   //       breakpoint: 1024,
//   //       settings: {
//   //         slidesToShow: 3,
//   //         slidesToScroll: 3,
//   //         infinite: true,
//   //         dots: true,
//   //       },
//   //     },
//   //     {
//   //       breakpoint: 600,
//   //       settings: {
//   //         slidesToShow: 2,
//   //         slidesToScroll: 2,
//   //         initialSlide: 2,
//   //       },
//   //     },
//   //     {
//   //       breakpoint: 480,
//   //       settings: {
//   //         slidesToShow: 1,
//   //         slidesToScroll: 1,
//   //       },
//   //     },
//   //   ],
// };

function AllPosts() {
  return (
    <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
      {/* <Slider {...settings}>
        {generatePostData().map((item) => (
          <Grid item xs={12} sm={4} key={item.title}>
            <PostCard post={item} />
          </Grid>
        ))}
      </Slider> */}
      {data.slice(0, 2).map((item, index) => (
        <Grid item xs={12} sm={6} key={item.title}>
          <PostCard post={{ ...item, image: imageData[index] }} />
        </Grid>
      ))}
    </Grid>
  );
}

export default AllPosts;
