import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';

export const Card = () => {
   

     // State for Active index
     const [activeIndex, setActiveIndex] = React.useState(0);
  
     // State for Animation
     const [animating, setAnimating] = React.useState(false);
   
     // Sample items for Carousel
     const items = [
         {src: 
 'https://govinsider.asia/wp-content/uploads/2018/07/40454841765_49277f9ab4_o-e1530495211369.jpg',
         },
         {src: 
 'https://thebetterindia-english.s3.ap-south-1.amazonaws.com/uploads/2019/10/Untitled-design-40.jpg',
         }
     ];
   
     // Items array length
     const itemLength = items.length - 1
   
     // Previous button for Carousel
     const previousButton = () => {
         if (animating) return;
         const nextIndex = activeIndex === 0 ?
             itemLength : activeIndex - 1;
         setActiveIndex(nextIndex);
     }
   
     // Next button for Carousel
     const nextButton = () => {
         if (animating) return;
         const nextIndex = activeIndex === itemLength ?
             0 : activeIndex + 1;
         setActiveIndex(nextIndex);
     }
   
     // Carousel Item Data
     const carouselItemData = items.map((item) => {
         return (
             <CarouselItem
                 key={item.src}
                 onExited={() => setAnimating(false)}
                 onExiting={() => setAnimating(true)}
             >
                 <img src={item.src} alt={item.altText} />
             </CarouselItem>
         );
     });
   
     return (
         <div  classname="carousel" style={{
             display: 'block', padding: 30
         }} align='center' >
             <Carousel previous={previousButton} next={nextButton} 
                 activeIndex={activeIndex}>
                 <CarouselIndicators items={items}
                     activeIndex={activeIndex}
                     onClickHandler={(newIndex) => {
                         if (animating) return;
                         setActiveIndex(newIndex);
                     }} />
                 {carouselItemData}
             </Carousel>
         </div >

         
     );
}
