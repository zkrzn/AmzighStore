import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      // Add a transition-delay to the carousel item
      const carouselItem = document.querySelector('.carousel-item');
      carouselItem.style.transitionDelay = '0.6s';

      // Change the current image
      setCurrentImage((currentImage + 1) % images.length)
    }, 9000)
    return () => clearInterval(interval)
  }, [currentImage])

  const previousImage = () => {
    // Add a transition-delay to the carousel item
    const carouselItem = document.querySelector('.carousel-item');
    carouselItem.style.transitionDelay = '0.6s';

    // Change the current image
    setCurrentImage((currentImage - 1 + images.length) % images.length)
  }

  const nextImage = () => {
    // Add a transition-delay to the carousel item
    const carouselItem = document.querySelector('.carousel-item');
    carouselItem.style.transitionDelay = '0.6s';

    // Change the current image
    setCurrentImage((currentImage + 1) % images.length)
  }

  return (
    <div className="relative h-96 w-full bg-center bg-cover hidden md:block carousel-item" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <button onClick={previousImage}>
        <img src="/previous-button.png" alt="Previous" className="w-8 absolute inset-y-1/3 left-0 transition duration-500 ease-out transform hover:scale-110" />
      </button>
      <button onClick={nextImage}>
        <img src="/next-button.png" alt="Next" className="w-8 absolute inset-y-1/3 right-0 transition duration-500 ease-out transform hover:scale-110" />
      </button>
    </div>
  )
}



export default function pageCenter() {
  return <>
    {ImageCarousel()}
  </>
};
