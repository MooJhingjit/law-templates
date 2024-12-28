import { SectionContainer } from '@/components/shared/harrison/section-container'
import { Map } from './map'
import Link from 'next/link'
import { MapPinIcon, MoveRightIcon, MailIcon } from 'lucide-react'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

type Props = {
  dynamicProps: {
    badge: string
    title: string
    description: string
    card1: {
      badge: string
      image: string
      title: string
      location: string
      email: string
      actionLabel: string
      actionUrl: string
    }
    card2: {
      badge: string
      title: string
      location: string
      email: string
      actionLabel: string
      actionUrl: string
    }
    card3: {
      badge: string
      title: string
      location: string
      email: string
      actionLabel: string
      actionUrl: string
    }
    card4: {
      badge: string
      title: string
      location: string
      email: string
      actionLabel: string
      actionUrl: string
    }
  }
}

export const ContactInfoWrightstoneA = () => {
  const dynamicProps = {
    badge: 'Firm Location',
    title: 'Our Office Locations',
    description:
      'At Wrightstone & Partners, we deliver tailoured soluctions and expert guidance to help clients achieve their goals.',
    card1: {
      badge: 'Los Angeles',
      image: '/wrightstone/placeholder.png',
      title: 'Serving customer from across the globe',
      location: 'San Francisco, California',
      email: 'support@beylearning.com',
      actionLabel: 'View Location',
      actionUrl: '#',
    },
    card2: {
      badge: 'San Francisco',
      image: '/wrightstone/placeholder.png',
      title: 'Serving customer from across the globe',
      location: 'San Francisco, California',
      email: 'support@beylearning.com',
      actionLabel: 'View Location',
      actionUrl: '#',
    },
    card3: {
      badge: 'Barcelona',
      image: '/wrightstone/placeholder.png',
      title: 'Serving customer from across the globe',
      location: 'San Francisco, California',
      email: 'support@beylearning.com',
      actionLabel: 'View Location',
      actionUrl: '#',
    },
    card4: {
      badge: 'New York',
      image: '/wrightstone/placeholder.png',
      title: 'Serving customer from across the globe',
      location: 'San Francisco, California',
      email: 'support@beylearning.com',
      actionLabel: 'View Location',
      actionUrl: '#',
    },
  }
  return <_ContactInfoWrightstoneA dynamicProps={dynamicProps} />
}

const _ContactInfoWrightstoneA = (props: Props) => {
  const { dynamicProps } = props
  const { badge, title, description, card1, card2, card3, card4 } = dynamicProps
  return (
    <section className="mb-8">
      <div className="mb-8">
        <Map />
      </div>
      <SectionContainer>
        <div className="max-w-lg mx-auto flex-col space-y-4 text-center mb-8">
          <div>
            <div className="text-sm flex justify-center items-center space-x-2">
              <span className="text-primary">{badge}</span>
            </div>
            <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className=" grid grid-cols-1 gap-4 xl:px-8">
            <p className="text-sm text-gray-400">{card1.badge.toUpperCase()}</p>
            <AspectRatio ratio={4 / 3}>
              <Image src={card1.image} alt={''} fill className="rounded-t-xl object-cover" />
            </AspectRatio>
            <h4 className="text-1xl">{card1.title}</h4>
            <p className="flex text-gray-400 text-sm space-x-2">
              <MapPinIcon className="w-5 h-5" /> <span>{card1.location}</span>
            </p>
            <p className="flex text-gray-400 text-sm space-x-2">
              <MailIcon className="w-5 h-5" />
              <span>{card1.email}</span>
            </p>
            <Link href={card1.actionUrl}>
              <div className="text-sm flex space-x-2 ">
                <span>{card1.actionLabel}</span> <MoveRightIcon />
              </div>
            </Link>
          </div>
          <div className=" grid grid-cols-1 gap-4 xl:px-8">
            <p className="text-sm text-gray-400">{card2.badge.toUpperCase()}</p>
            <AspectRatio ratio={4 / 3}>
              <Image src={card2.image} alt={''} fill className="rounded-t-xl object-cover" />
            </AspectRatio>
            <h4 className="text-1xl">{card2.title}</h4>
            <p className="flex text-gray-400 text-sm space-x-2">
              <MapPinIcon className="w-5 h-5" /> <span>{card2.location}</span>
            </p>
            <p className="flex text-gray-400 text-sm space-x-2">
              <MailIcon className="w-5 h-5" />
              <span>{card2.email}</span>
            </p>
            <Link href={card2.actionUrl}>
              <div className="text-sm flex space-x-2 ">
                <span>{card2.actionLabel}</span> <MoveRightIcon />
              </div>
            </Link>
          </div>
          <div className=" grid grid-cols-1 gap-4 xl:px-8">
            <p className="text-sm text-gray-400">{card3.badge.toUpperCase()}</p>
            <AspectRatio ratio={4 / 3}>
              <Image src={card3.image} alt={''} fill className="rounded-t-xl object-cover" />
            </AspectRatio>
            <h4 className="text-1xl">{card3.title}</h4>
            <p className="flex text-gray-400 text-sm space-x-2">
              <MapPinIcon className="w-5 h-5" /> <span>{card3.location}</span>
            </p>
            <p className="flex text-gray-400 text-sm space-x-2">
              <MailIcon className="w-5 h-5" />
              <span>{card3.email}</span>
            </p>
            <Link href={card3.actionUrl}>
              <div className="text-sm flex space-x-2 ">
                <span>{card3.actionLabel}</span> <MoveRightIcon />
              </div>
            </Link>
          </div>
          <div className=" grid grid-cols-1 gap-4 xl:px-8">
            <p className="text-sm text-gray-400">{card4.badge.toUpperCase()}</p>
            <AspectRatio ratio={4 / 3}>
              <Image src={card4.image} alt={''} fill className="rounded-t-xl object-cover" />
            </AspectRatio>
            <h4 className="text-1xl">{card4.title}</h4>
            <p className="flex text-gray-400 text-sm space-x-2">
              <MapPinIcon className="w-5 h-5" /> <span>{card4.location}</span>
            </p>
            <p className="flex text-gray-400 text-sm space-x-2">
              <MailIcon className="w-5 h-5" />
              <span>{card4.email}</span>
            </p>
            <Link href={card4.actionUrl}>
              <div className="text-sm flex space-x-2 ">
                <span>{card4.actionLabel}</span> <MoveRightIcon />
              </div>
            </Link>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
