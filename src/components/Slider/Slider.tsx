import React, {FC, useState} from 'react'
import './Slider.scss'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {Variation} from "../../Types";
import {dividerClasses} from "@mui/material";

export interface SliderProps {
    variations: Variation[]
}

export const Slider: FC<SliderProps> = ({variations}) => {
    if (variations.length === 0) {
        return (
            <div
                style={{ backgroundImage: `url(http://localhost:8888/data/no-photo.png)` }}
                className='w-full h-[225px] bg-center bg-cover duration-500'
            ></div>
        )
    }

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = (): void => {
        setCurrentIndex(currentIndex === 0 ? variations.length - 1 : currentIndex - 1)
    }

    const nextSlide = (): void => {
        setCurrentIndex(currentIndex === variations.length - 1 ? 0 : currentIndex + 1)
    }

    const goToSlide = (slideIndex: number): void => {
        setCurrentIndex(slideIndex)
    }

    return (

        <div className='h-[225px] w-full relative group'>
            <div
                style={{ backgroundImage: `url(http://localhost:8888/data/${variations[currentIndex].photo})` }}
                className='w-full h-full bg-center bg-cover duration-500'
            ></div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 cursor-pointer'>
                <BsChevronCompactLeft
                    onClick={prevSlide}
                    size={90}
                />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 cursor-pointer'>
                <BsChevronCompactRight
                    onClick={nextSlide}
                    size={90}
                />
            </div>
            <div className='flex justify-center -my-10'>
                {variations.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='cursor-pointer text-3xl'
                    >
                        <RxDotFilled
                            color={slideIndex === currentIndex ? '#000' : ''}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

