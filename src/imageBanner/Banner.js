import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

const data = [
    {
        image: require('./banner-0.png'),
    },
    {
        image:require('./banner-1.jpg'),
    },
    {
        image:require('./banner-2.avif'),
    }
]

function HomeCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt="slider image"
                            style={{ "--bs-aspect-ratio": "50%", maxHeight: "460px" }}
                        />
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
}
export default HomeCarousel;
