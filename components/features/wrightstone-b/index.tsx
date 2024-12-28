import { SectionContainer } from '@/components/shared/wrightstone/section-container'
import { MailIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {
  dynamicProps: {
    badge: string
    title: string
    description: string
    card1: {
      title: string
      description: string
      actionLabel: string
      actionUrl: string
    }
    card2: {
      title: string
      description: string
      actionLabel: string
      actionUrl: string
    }
    card3: {
      title: string
      description: string
      actionLabel: string
      actionUrl: string
    }
  }
}

export const FeatureWrighstoneB = () => {
  const dynamicProps = {
    badge: 'Contact Us',
    title: 'Contact Information',
    description:
      'At Wrightstone & Partners, we deliver tailored solutions and expert guidance to help clients achieve their goals.',
    card1: {
      title: 'Phone Support',
      description:
        'Call us directly for prompt help. +88 08000 300 300 or +88 08000 300 300 Service horu: 8 AM to 8 PM | & Days a week',
      actionLabel: 'Call us Today',
      actionUrl: '#',
    },
    card2: {
      title: 'WhatsApp Us',
      description:
        'For quick responses and easy communication, reach out through WhatsApp! You can message us for product inquiries, troubleshooting, or any support you need.',
      actionLabel: 'WhatsApp Us',
      actionUrl: '#',
    },
    card3: {
      title: 'Email Support',
      description:
        'Send us an email with your question, concerns or requests. Our support team will get back to you as quickly as possible with detailed responses.',
      actionLabel: 'Send us Email',
      actionUrl: '#',
    },
  }
  return <_FeatureWrighstoneB dynamicProps={dynamicProps} />
}

const _FeatureWrighstoneB = (props: Props) => {
  const { dynamicProps } = props
  const { badge, title, description, card1, card2, card3 } = dynamicProps
  return (
    <section className="mb-8">
      <SectionContainer>
        <div className="max-w-lg mx-auto flex-col space-y-4 text-center">
          <div>
            <div className="text-sm flex justify-center items-center space-x-2">
              <span className="text-primary">{badge}</span>
            </div>
            <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" py-4 px-4 lg:px-8 bg-white shadow border border-black/10 rounded-lg">
            <div className="flex-col space-y-4">
              <div className="text-1xl font-medium leading-9 flex items-center justify-between ">
                <span>{card1.title}</span>
                <MailIcon />
              </div>
              <div className=" text-gray-500 text-sm font-normal leading-normal tracking-tight">
                {card1.description}
              </div>
              <Button className="rounded-sm">
                <Link href={card1.actionUrl}>{card1.actionLabel}</Link>
              </Button>
            </div>
          </div>
          <div className=" py-4 px-4 lg:px-8 bg-white shadow border border-black/10 rounded-lg">
            <div className="flex-col space-y-4">
              <div className="text-1xl font-medium leading-9 flex items-center justify-between ">
                <span>{card2.title}</span>
                <MailIcon />
              </div>
              <div className=" text-gray-500 text-sm font-normal leading-normal tracking-tight">
                {card2.description}
              </div>
              <Button className="rounded-sm bg-[#04383F]">
                <Link href={card2.actionUrl}>{card2.actionLabel}</Link>
              </Button>
            </div>
          </div>
          <div className=" py-4 px-4 lg:px-8 bg-white shadow border border-black/10 rounded-lg">
            <div className="flex-col space-y-4">
              <div className="text-1xl font-medium leading-9 flex items-center justify-between ">
                <span>{card3.title}</span>
                <MailIcon />
              </div>
              <div className=" text-gray-500 text-sm font-normal leading-normal tracking-tight">
                {card3.description}
              </div>
              <Button className="rounded-sm">
                <Link href={card3.actionUrl}>{card3.actionLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
