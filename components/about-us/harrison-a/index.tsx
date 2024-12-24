import Image from 'next/image'
import { ListItem } from '@/icons/harrison/list-item'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SectionContainer } from '@/components/shared/harrison/section-container'

type Props = {
  dynamicProps: {
    image: string
    title: string
    description: string
    items: { id: number; item: string }[]
    actionLabel: string
    actionUrl: string
  }
}

export const AboutUsHarrisonA = () => {
  const dynamicProps = {
    image: '/harrison/about-us.png',
    title: 'About Us',
    description:
      'When you are facing a legal challenge, turn to Pate & Knott for  steadfast legal representation when you need it most. At the law firm of Pate & Knott, we have been serving clients throughout Tennessee  since 1979. What sets our firm apart and makes us the ideal choice for  all your legal needs is our relentless focus on the fundamentals of a  traditional, trusted law firm. Our strengths include:',
    items: [
      { id: 1, item: 'We enjoy a reputation for success throughout our community 1.' },
      { id: 2, item: 'We enjoy a reputation for success throughout our community 2.' },
      { id: 3, item: 'We enjoy a reputation for success throughout our community 3.' },
    ],
    actionLabel: 'Learn More',
    actionUrl: '/harrison/about-us',
  }
  return <_AboutUsHarrisonA dynamicProps={dynamicProps} />
}

export const _AboutUsHarrisonA = (props: Props) => {
  const { dynamicProps } = props

  return (
    <section className="py-24 mb-16 bg-red-50">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14">
          <AspectRatio ratio={4 / 3}>
            <Image src={dynamicProps.image} alt="About Us" fill className="h-full w-full rounded-lg object-cover" />
          </AspectRatio>
          <div className="mt-2 lg:mt-0 flex-1">
            <h2 className="text-bold text-5xl font-semibold leading-relaxed">{dynamicProps.title}</h2>
            <div className=" text-gray-500 text-base font-normal leading-relaxed">{dynamicProps.description}</div>
            <ul className=" text-gray-500 mt-4">
              {dynamicProps.items.map((item) => (
                <li key={item.id} className="flex items-center space-x-1 my-4">
                  <ListItem />
                  <span>{item.item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button className="p-6">
                <Link href={dynamicProps.actionUrl}>{dynamicProps.actionLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
