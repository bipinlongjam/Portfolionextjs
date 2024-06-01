"use client"
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageSlider = ({images}) => {
    
    const [imageHeight, setImageHeight] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        // Calculate aspect ratio of the first image
        const firstImage = new Image();
        firstImage.onload = () => {
            const aspectRatio = firstImage.height / firstImage.width;
            setImageHeight(sliderRef.current.offsetWidth * aspectRatio);
        };
        firstImage.src = images[0];
    }, [images]);
    const settings = {
        dots:true,
        speed:1000,
        slidesToShow:1,
        slidesToScroll:1,
        initialSlide:0,
        pauseOnHover:true,
        autoplay:true,
        appendDots: (dots: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined) => (
            <div>
                <ul className="slick-dots bottom-5">{dots}</ul>
            </div>
        ),
        prevArrow: <div className="slick-prev left-0 z-10">◀</div>,
        nextArrow: <div className="slick-next right-0 z-10">▶</div>,
    }
    console.log(images)
  return (
    <div className='w-full h-full max-w-[600px] md:max-w-full rounded-lg overflow-hidden relative' ref={sliderRef}>
    {imageHeight && (
        <style>
            {`
                .slick-slide img {
                    height: ${imageHeight}px !important;
                }
            `}
        </style>
    )}
    <Slider {...settings}>
        {images.map((image: string | undefined, index: React.Key | null | undefined) => (
            <div key={index} className="h-full">
                <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            </div>
        ))}
    </Slider>
</div>
  )
}

export default ImageSlider
