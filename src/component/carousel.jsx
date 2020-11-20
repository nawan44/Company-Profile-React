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
import { Table } from 'reactstrap';


const items = [
    {
        src: port1,
        altText: 'Slide 1',
        caption: 'Sponsorship, Media Partner, Events, Digital Campaign, Brand Activities, Sales Leverage',
        brand: 'Berniaga.com, Kacang Garuda,  Hotels for Roadshow, 30 Media partners, in 5 cities, Gala Premiere, Press Screening, Nobar,Meet and Greet, Talkshow, Interview, Road Show'
    },
    {
        src: port2,
        altText: 'Slide 2',
        caption: 'Sponsorship, Media Partner, Events, Media Placement, Digital Campaign,  Brand Activities, Sales Leverage',
        brand: 'Yamaha, Pejaten Village, Labels, Restaurants, Clothes, Insurance, 30 Media partners, in 5 cities, Gala Premiere, Press Screening, Nobar,Meet and Greet, Talkshow, Interview, 4 Days Event'

    },
    {
        src: port3,
        altText: 'Slide 3',
        caption: 'Sponsorship, Media Placement, Digital Campaign, Brand Activities, Sales Leverage',
        brand: 'Huawei, Mercy, Jaguar, Metrox, Gala Premiere, Press Screening, Nobar,Meet and Greet, Talkshow, Interview, Roadshow'

    },
    {
        src: port4,
        altText: 'Slide 4',
        caption: 'Sponsorship',
        brand: 'Berniaga.com, Kacang Garuda,  Hotels for Roadshow'

    },
    {
        src: port5,
        altText: 'Slide 5',
        caption: 'Sponsorship, Media Partner, Events, Media Placement, Digital Campaign, Brand Activities, Sales Leverage',
        brand: 'Ayana Hotel and Resort Bali, Rock Bar, Max One, Citilink, Audi'

    },
    {
        src: port6,
        altText: 'Slide 6',
        caption: 'Sponsorship, Media Partner, Events, Media Placement, Digital Campaign,  Brand Activities, Sales Leverage',
        brand: ' '

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
            <CarouselItem className="carousel-item"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <div className="carousell">
                    <div className="img-carousel">
                        <img src={item.src} alt={item.altText} class="img-carousel" />
                    </div>
                    <CarouselCaption captionHeader={item.caption} className="caption1" />

                </div>
                <hr className="hrred" />

                <CarouselCaption captionHeader={item.brand} className="caption2" />

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
