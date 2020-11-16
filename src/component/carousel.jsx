import React, { useState } from 'react';
import './css/carousel.css';
import port1 from './img/portfolio/port1.jpg';
import port2 from './img/portfolio/port2.jpg';
import port3 from './img/portfolio/port3.jpg';
import port4 from './img/portfolio/port4.jpg';
import port5 from './img/portfolio/port5.jpg';
import port6 from './img/portfolio/port6.jpg';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: port1,
        altText: 'Slide 1',
        caption: 'Sponsorship, Media Partner, Events, Digital Campaign, Brand Activities, Sales Leverage'
    },
    {
        src: port2,
        altText: 'Slide 2',
        caption: 'Sponsorship, Media Partner, Events, Media Placement, Digital Campaign,  Brand Activities, Sales Leverage'
    },
    {
        src: port3,
        altText: 'Slide 3',
        caption: 'Sponsorship, Media Placement, Digital Campaign, Brand Activities, Sales Leverage'
    },
    {
        src: port4,
        altText: 'Slide 4',
        caption: 'Sponsorship'
    },
    {
        src: port5,
        altText: 'Slide 5',
        caption: 'Sponsorship, Media Partner, Events, Media Placement, Digital Campaign, Brand Activities, Sales Leverage'
    },
    {
        src: port6,
        altText: 'Slide 6',
        caption: 'Sponsorship, Media Partner, Events, Media Placement, Digital Campaign,  Brand Activities, Sales Leverage'
    }

];

const Carousely = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
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
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <div className="carousell">
                    <div className="img-carousel">
                        <img src={item.src} alt={item.altText} class="center" />
                    </div>
                </div>

                <CarouselCaption captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Carousely;


