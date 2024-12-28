import Image from 'next/image'
import { HorizontalLine } from '@/icons/wrightstone/horizontal-line'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import { ArrowRightCircleIcon } from 'lucide-react'

type Props = {
  dynamicProps: {
    image: string
    badge: string
    title: string
    description: string
    actionLabel: string
    actionUrl: string
    badge2: string
    description2: string
    overviewTitle: string
    globalPresence: string
    regionalReach: string
    businessAddresses: string
    awards: string
    network: string
  }
}

export const AboutUsWrightstoneA = () => {
  const dynamicProps = {
    image: '/wrightstone/about-us.png',
    badge: 'Firm Overview',
    title: 'About Us',
    description:
      'At Wrightstone & Partners, we deliver tailored solutions and expert guidance to help clients achieve their goals. Our experienced team drives growth, solves challenges, and seizes opportunities with innovation and excellence.',
    actionLabel: 'More About Us',
    actionUrl: '/wrightstone/about-us',
    badge2: 'Our Mission',
    description2:
      'At Wrightstone & Partners, our mission is to empower clients with innovative, tailored solutions that drive impactful results. We focus on understanding unique challenges and providing expert guidance that leads to long-term success.Committed to trust, transparency, and excellence, our team works to build lasting relationships and deliver transformative outcomes. We strive to be your trusted partner, helping you grow and thrive in an ever-changing world.',
    overviewTitle: 'The Reasons Why You Should Work With Us',
    globalPresence: '20+',
    regionalReach: '52+',
    businessAddresses: '180+',
    awards: '10',
    network: '52k+',
  }
  return <_AboutUsWrightstoneA dynamicProps={dynamicProps} />
}

export const _AboutUsWrightstoneA = (props: Props) => {
  const { dynamicProps } = props

  return (
    <section className="mb-8 ">
      <SectionContainer>
        <Image
          src={dynamicProps.image}
          alt="About Us"
          width={500}
          height={100}
          className="w-full rounded-lg object-contained"
        />

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-40">
          <div className="mt-2 lg:mt-0 flex-1">
            <div className="flex items-center space-x-4">
              <HorizontalLine className="bg-gray-400" />
              <span className="text-xs text-gray-500 font-semibold leading-6">{dynamicProps.badge}</span>
            </div>
            <h2 className="text-bold text-5xl font-semibold leading-relaxed">{dynamicProps.title}</h2>
            <div className=" text-gray-500 text-base font-normal leading-relaxed">{dynamicProps.description}</div>

            <div className="mt-8">
              <Button className="py-6 rounded-none">
                <Link href={dynamicProps.actionUrl} className="flex items-center space-x-2">
                  <span> {dynamicProps.actionLabel}</span>
                  <ArrowRightCircleIcon />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-2 lg:mt-0 flex-1 pt-16">
            <div className="flex items-center space-x-4">
              <HorizontalLine className="bg-gray-400" />
              <span className="text-xs text-gray-500 font-semibold leading-6">{dynamicProps.badge2}</span>
            </div>
            <div className=" text-gray-500 text-base font-normal leading-relaxed">{dynamicProps.description2}</div>
          </div>
        </div>
      </SectionContainer>
      <div className="bg-[#04383F] pt-8 pb-16 mt-10 text-white">
        <h4 className="text-sm uppercase text-center">{dynamicProps.overviewTitle}</h4>
        <SectionContainer>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            <div className="max-w-40 mx-auto">
              <p className="text-4xl text-primary text-center">{dynamicProps.globalPresence}</p>
              <p className="mt-2 text-sm text-center">Established Global Presence</p>
            </div>
            <div className="max-w-40  mx-auto">
              <p className="text-4xl text-primary text-center">{dynamicProps.regionalReach}</p>
              <p className=" mt-2 text-sm text-center">Estensive Regional Reach</p>
            </div>
            <div className=" max-w-40  mx-auto">
              <p className="text-4xl text-primary text-center">{dynamicProps.businessAddresses}</p>
              <p className="mt-2 text-sm text-center">Prestigious Business Addresses</p>
            </div>
            <div className=" max-w-40  mx-auto">
              <p className="text-4xl text-primary text-center">{dynamicProps.awards}</p>
              <p className="mt-2 text-sm text-center">We Achieved Awards</p>
            </div>
            <div className=" max-w-40  mx-auto">
              <p className="text-4xl text-primary text-center">{dynamicProps.network}</p>
              <p className="mt-2 text-sm text-center">Growing Global Network</p>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  )
}
