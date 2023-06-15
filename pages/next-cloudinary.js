import React from "react";
import { CldImage } from "next-cloudinary";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
function NextCloudinary() {
  return (
    <main className=" grid place-items-center py-10 bg-slate-200">
      <CldImage
        preserveTransformations
        width={1200}
        height={800}
        src="https://res.cloudinary.com/djmcqy8q1/image/upload/v1672308481/16_1dc2cadf08.png"
        alt="test"
      />
      <CldImage
        preserveTransformations
        width={1200}
        height={800}
        src="https://res.cloudinary.com/djmcqy8q1/image/upload/v1672308471/6_3ca47ce00d.png"
        alt="test"
        
      />
      <CldImage
        preserveTransformations
        width={1200}
        height={800}
        src="https://res.cloudinary.com/djmcqy8q1/image/upload/v1672308474/11_6c7c257cce.png"
        alt="test"
        
      />
      <CldImage
        preserveTransformations
        width={1200}
        height={800}
        src="https://res.cloudinary.com/djmcqy8q1/image/upload/v1672308479/14_7070a05482.png"
        alt="test"
        
      />
      <CldImage
        preserveTransformations
        width={1200}
        height={800}
        src="https://res.cloudinary.com/djmcqy8q1/image/upload/v1672308476/13_b427801d2f.png"
        alt="test"
        
      />
      <CldImage
        preserveTransformations
        width={1200}
        height={800}
        src="https://res.cloudinary.com/djmcqy8q1/image/upload/v1672308470/8_37668f5e8c.png"
        alt="test"
        
      />
      <CldImage
        preserveTransformations
        width={1200}
        height={800}
        src="https://res.cloudinary.com/djmcqy8q1/image/upload/v1672308470/7_cc208257af.png"
        alt="test"
        
      />
      <CldImage
        preserveTransformations
        width={1200}
        height={800}
        src="https://res.cloudinary.com/djmcqy8q1/image/upload/v1672308481/16_1dc2cadf08.png"
        alt="test"
        
      />
      <CldImage
        preserveTransformations
        width={1200}
        height={800}
        src="https://res.cloudinary.com/djmcqy8q1/image/upload/v1672308481/17_4540556816.png"
        alt="test"
        
      />
      <CldImage
        preserveTransformations
        width={1200}
        height={800}
        src="https://res.cloudinary.com/djmcqy8q1/image/upload/v1672308484/19_51df4cb6a0.png"
        alt="test"
        
      />
    </main>
  );
}

export default NextCloudinary;
