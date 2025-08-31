import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
const CategoryCarousel = () => {
    const category = [
        "Frontend Developer",
        "Backend Developer",
        "FullStack Developer",
        "Network Engineer",
        "Graphic Designer"
    ];
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default CategoryCarousel;