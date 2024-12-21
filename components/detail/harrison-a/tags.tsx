'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { QueryProps } from './queries'

type Props = {
  tags: QueryProps['tags']
  tag: QueryProps['tag']
}
export const Tags = (props: Props) => {
  const { tags, tag } = props
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current?.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current?.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }
  return (
    <div className="flex items-center mb-8 space-x-2">
      <button onClick={scrollLeft} className="bg-white shadow p-2 rounded-full focus:outline-none">
        <ChevronLeft size={24} />
      </button>
      <div ref={scrollContainerRef} className="flex-1 overflow-x-auto flex space-x-2 scrollbar-hide">
        <div className="flex w-max space-x-2">
          {tags.map((item) => (
            <span
              key={item.id}
              className={`text-xs uppercase ${
                tag.id === item.id ? 'bg-red-600 text-white' : 'bg-red-200 text-red-600'
              } rounded-md p-4 whitespace-nowrap`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
      <button onClick={scrollRight} className="bg-white shadow p-2 rounded-full focus:outline-none">
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
