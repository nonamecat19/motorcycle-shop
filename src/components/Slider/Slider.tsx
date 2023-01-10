import React, {FC, useState} from 'react'
import './Slider.scss'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import {Variation} from "../../Types";

export interface SliderProps {
    variation: Variation[]
    color: string
    sliderStyle?: string
}

export const Slider: FC<SliderProps> = ({variation, color, sliderStyle}) => {
    if (variation.length === 0) {
        return (
            <div
                style={{backgroundImage: `url(http://localhost:8888/data/no-photo.png)`}}
                className='w-full h-[195px] bg-center bg-cover duration-500'
            />
        )
    }

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = (): void => {
        setCurrentIndex(currentIndex === 0 ? variation.length - 1 : currentIndex - 1)
    }

    const nextSlide = (): void => {
        setCurrentIndex(currentIndex === variation.length - 1 ? 0 : currentIndex + 1)
    }

    const goToSlide = (slideIndex: number): void => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className={`h-[195px] w-full relative group ${sliderStyle ?? ''}`}>
            <div
                style={{
                    backgroundImage: `url(http://localhost:8888/data/${variation[currentIndex].photo})`,
                    backgroundSize: '95%',
                    backgroundRepeat: 'no-repeat',
                }}
                className='w-full h-full bg-center bg-cover duration-500'
            />
            <div
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-3 cursor-pointer'>
                <BsChevronCompactLeft
                    onClick={prevSlide}
                    size={70}
                    color={color}
                />
            </div>
            <div
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 cursor-pointer'>
                <BsChevronCompactRight
                    onClick={nextSlide}
                    size={70}
                    color={color}
                />
            </div>
            <div className='flex justify-center -my-16'>
                {variation.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='cursor-pointer text-3xl'
                    >
                        <RxDotFilled
                            className={'duration-500 ' + (currentIndex === slideIndex ? 'scale-150' : '')}
                            color={color}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

