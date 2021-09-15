import React, { useState } from 'react';
import './Carousel.css';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    id: 1,
    text: 'Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!',
    capt: '- Aakriti Malik, DM Intern'
  },
  {
    id: 2,
    text: 'I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.Thank you team TEN!',
    capt: '- Kshema Unni, Business Development Intern'
  },
  {
    id: 3,
    text: 'Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.',
    capt: '- Harsh Rajput, General Management Intern'
  },
  {
    id: 4,
    text: 'TEN was my first ever experience into internship. Even though I didnt have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout',
    capt: '- Anjali Srivastava, Content Intern'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const prev = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="caro"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div>
          <p className="para"> {item.text} </p>
          <p className="name"> {item.capt} </p>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
        <Carousel activeIndex={activeIndex} next={next} previous={prev} >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
        <CarouselControl direction="prev" directionText=" " onClickHandler={prev} />
        <CarouselControl direction="next" directionText=" " onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Example;