'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './dot-buttons'
import { PrevButton, NextButton, usePrevNextButtons } from './arrow-buttons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Quote1 } from '@/icons/harrison/quote-1-icon'
import { Quote2 } from '@/icons/harrison/quote-2-icon'

type Data = {
  id: number
  content: string
  author: {
    name: string
    location: string
  }
}

type PropType = {
  slides: Data[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div key={item.id} className="bg-white rounded-lg shadow border border-black/10 py-16 px-4 lg:p-16">
                <Quote1 />
                <div className="ml-50">
                  <div className=" text-gray-500 text-base font-normal  leading-7 tracking-tight">{item.content}</div>
                  <div className="flex justify-between">
                    <div className="flex mt-2 space-x-2">
                      <div>
                        <Image
                          width={50}
                          height={50}
                          alt="PLACEHOLDER"
                          className=" rounded-full "
                          src="https://via.placeholder.com/50x50"
                        />
                      </div>
                      <div className="text-[#26343f]">
                        <div className="text-xl font-normal leading-7">{item.author.name}</div>
                        <div className="text-sm font-normal leading-7">{item.author.location}</div>
                      </div>
                    </div>
                    <Quote2 />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel
