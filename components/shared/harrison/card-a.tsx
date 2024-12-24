import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import { SectionContainer } from './section-container'

type Props = {
  title: string
  content: string
  image: string
  imageOnRight: boolean
}

export const CardA = (props: Props) => {
  const { title, content, image, imageOnRight } = props

  return (
    <SectionContainer>
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2  gap-x-12">
        <div className={`${imageOnRight ? 'order-1' : 'order-2'} my-auto`}>
          <h2 className="text-5xl font-semibold leading-relaxed">{title}</h2>
          <p className="text-gray-500 text-base font-normal">{content}</p>
        </div>
        <div className={`${!imageOnRight ? 'order-1' : 'order-2'}`}>
          <AspectRatio ratio={4 / 3}>
            <Image src={image} alt={title} fill className="h-full w-full rounded-lg object-cover" />
          </AspectRatio>
        </div>
      </div>
    </SectionContainer>
  )
}
