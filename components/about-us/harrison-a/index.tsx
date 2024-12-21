import Image from 'next/image'
import { ListItem } from '@/icons/harrison/list-item'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import messages from './messages.json'

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
      'Harrison is a full-service digital agency that specializes in web design and development, branding, and digital marketing. We are a team of creative professionals who are passionate about helping businesses succeed online. Our goal is to create beautiful, functional websites that drive results for our clients. We work closely with each of our clients to understand their unique needs and develop custom solutions that meet their goals. Whether you need a new website, a brand refresh, or help with your digital marketing strategy, we can help. Contact us today to learn more about how we can help your business grow online. We work closely with each of our clients to understand their unique needs and develop custom solutions that meet their goals. Whether you need a new website, a brand refresh, or help with your digital marketing strategy, we can help. Contact us today to learn more about how we can help your business grow online.',
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
  const _trans = messages.en
  return (
    <section className="py-24 mb-16 bg-red-50">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AspectRatio ratio={4 / 3}>
            <Image src={dynamicProps.image} alt="About Us" fill className="h-full w-full rounded-lg object-cover" />
          </AspectRatio>
          <div className="mt-2 lg:mt-0 flex-1">
            <h2 className="text-bold text-5xl font-semibold leading-relaxed">{_trans.title}</h2>
            <div className=" text-gray-500 text-base font-normal ">{_trans.description}</div>
            <ul className=" text-gray-500 mt-4">
              {_trans.items.map((item) => (
                <li key={item.id} className="flex items-center space-x-1">
                  <ListItem />
                  <span>{item.item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button>
                <Link href={dynamicProps.actionUrl}>{_trans.actionLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
