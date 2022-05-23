import "./imgList.css";
import React from "react";
import ImgCard from "./imgCard";

const ImageList = (props) => {
  const images = props.images.map((img) => {
    return <ImgCard key={img.id} img={img} />;
  });
  return <div className="img-list">{images}</div>;
};

export default ImageList;

// const ImageList = (props) => {
//   const images = props.images.map(({description,id,urls}) => {
//     return <img key={id} alt={description} src={urls.regular} />;
//   });
//   return <div>{images}</div>;
// };
