'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './dot-buttons'
import { PrevButton, NextButton, usePrevNextButtons } from './arrow-buttons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Quote1 } from '@/icons/harrison/quote-1-icon'
import { Quote2 } from '@/icons/harrison/quote-2-icon'
import { QueryProps } from './quires'

type PropType = {
  slides: QueryProps['data']
  options?: EmblaOptionsType
  title: string
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options, title } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="block lg:flex justify-between items-center">
        <h2 className=" text-bold text-5xl font-semibold leading-relaxed">{title}</h2>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport mt-8" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div
                key={item.id}
                className="bg-white rounded-lg shadow border border-black/10 py-16 px-4 lg:p-8 flex space-x-4"
              >
                <div>
                  <Quote1 className="w-10 h-10" />
                </div>
                <div className="mt-4">
                  <div className=" text-gray-500 text-base font-normal  leading-7 tracking-tight">{item.content}</div>
                  <div className="flex justify-between ">
                    <div className="flex items-center mt-2 space-x-2">
                      <div>
                        <Image
                          width={30}
                          height={30}
                          alt="PLACEHOLDER"
                          className=" rounded-full "
                          src={item.author.image}
                        />
                      </div>
                      <div className="">
                        <div className=" font-normal leading-7">{item.author.name}</div>
                        <div className="text-sm text-gray-500 font-normal leading-7">{item.author.location}</div>
                      </div>
                    </div>
                    <Quote2 className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__controls"> */}
      {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
          />
        ))}
      </div>
      {/* </div> */}
    </section>
  )
}

export default Carousel
