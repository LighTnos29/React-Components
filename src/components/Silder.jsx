import React from "react";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { FaChevronCircleLeft , FaChevronCircleRight } from "react-icons/fa";


const Silder = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1624267439301-8147fff1a23d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "img1",
    },

    {
      url: "https://images.unsplash.com/photo-1564521456797-9f176245daa9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "img2",
    },

    {
      url: "https://images.unsplash.com/photo-1602013103994-02072c2f955c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "img3",
    },

    {
      url: "https://images.unsplash.com/reserve/vNE8214NS9GOvXOy7DCu_DSC_0266.JPG?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "img4",
    },
    {
      url: "https://images.unsplash.com/photo-1672681149507-d7bf765e9533?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "img5",
    },
    {
      url: "https://images.unsplash.com/photo-1713707131882-5086e8fd53b8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "img6",
    },
  ];

  const nextSlide = () => {
    const nextSlide = (currentIndex + 1) % slides.length;
    setcurrentIndex(nextSlide);
  };

  const prevSlide = () => {
    const nextSlide = (currentIndex - 1 + slides.length) % slides.length;
    setcurrentIndex(nextSlide);
  };
  const gotoSlide = (slidesIndex) => {
    setcurrentIndex(slidesIndex);
  };

  const [currentIndex, setcurrentIndex] = useState(3);
  console.log(slides[currentIndex].url);
  return (
    <div className="flex">
      <div className="h-[60vh] md:h-[100vh] p-0 relative mt-0 pt-0 group z-0 md:w-[100%]">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            transition: "background-image 0.5s ease-in-out",
          }}
          className="w-[100%] h-[100%] bg-cover overflow-hidden rounded-xl"
        ></div>
        <div className="absolute top-[50%]">
          <FaChevronCircleLeft
            size={40}
            onClick={prevSlide}
            className="text-white opacity-50"
          />
        </div>
        <div className="absolute top-[50%] left-[96.75%]">
          <FaChevronCircleRight
            size={40}
            onClick={nextSlide}
            className="text-white opacity-50"
          />
        </div>
        <div className="flex justify-center">
          {slides.map((slides, slidesIndex) => (
            <div key={slidesIndex}>
              <GoDotFill onClick={() => gotoSlide(slidesIndex)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Silder;
