import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import Link from 'next/link'
import { Case } from '@/icons/harrison/case'
import { Certificate } from '@/icons/harrison/certificate'
import { Stars } from '@/icons/harrison/stars'
import { World } from '@/icons/harrison/world'

type Props = {
  dynamicProps: {
    backgroundImage: string
    image: string
    bagde: string
    title: string
    description: string
    actionLabel: string
    actionUrl: string
    cases: string
    experience: string
    happyCustomers: string
    firmWorldWide: string
  }
}

export const HeroHarrisonA = async () => {
  const dynamicProps = {
    backgroundImage: '/harrison/3d-courtroom-scene-lawyer.png',
    image: '/harrison/view-3d-justice-scales.png',
    bagde: '⚖️ Experience Lawyer team',
    title: 'Dedicated, professional attorneys on your side',
    description:
      'Our team of experienced attorneys are here to help you with your legal needs. We have a proven track record of success and are dedicated to providing you with the best possible representation. Whether you are facing criminal charges, need help with a family law matter, or are dealing with a personal injury case, we are here to help. Contact us today to schedule a consultation and learn more about how we can help you.',
    actionLabel: 'Free Case Evaluation',
    actionUrl: '#',
    cases: '450+',
    experience: '20+',
    happyCustomers: '3K+',
    firmWorldWide: '20+',
  }

  return <_HeroHarrisonA dynamicProps={dynamicProps} />
}

const _HeroHarrisonA = (props: Props) => {
  const { dynamicProps } = props
  const {
    backgroundImage,
    image,
    bagde,
    title,
    description,
    actionLabel,
    actionUrl,
    cases,
    experience,
    happyCustomers,
    firmWorldWide,
  } = dynamicProps
  return (
    <section
      className="py-10 lg:py-0 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('${backgroundImage || ''}')`,
      }}
    >
      <SectionContainer>
        <div className="lg:pt-28 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="px-5 py-2 mb-4 bg-red-500 rounded-3xl shadow justify-center items-center inline-flex">
              <div className="text-white  font-medium capitalize">{bagde}</div>
            </div>
            <h1 className="text-white text-6xl font-bold leading-tight">{title}</h1>
            <div className=" text-white mt-4 text-base font-normal leading-relaxed">{description}</div>
            <div className="px-5 py-2 mt-4 bg-red-500 rounded-lg justify-center items-center gap-1.5 inline-flex">
              <div className="justify-start items-center gap-3.5 flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-white font-normal  leading-8">
                    <Link href={actionUrl}>{actionLabel}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-1 order-1 lg:order-2">
            <AspectRatio ratio={3 / 4}>
              <Image src={image} alt="Photo by Drew Beamer" fill className="h-full w-full rounded-lg object-cover" />
            </AspectRatio>
          </div>
        </div>
        <div className="transform lg:translate-y-1/2 bg-white shadow border border-black/10 px-6 lg:px-14 container py-6 mt-8 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-md">
          <div className="flex items-center space-x-2 grow">
            <div className="bg-red-500 p-3 rounded-full">
              <Case className="w-10 h-10" />
            </div>
            <div>
              <div className="text-bold text-2xl font-bold">{cases}</div>
              <div className="text-gray-500 text-md font-normal">Case Solved</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 grow">
            <div className="bg-red-500 p-3 rounded-full">
              <Certificate className="w-10 h-10" />
            </div>
            <div>
              <div className="text-bold text-2xl font-bold">{experience}</div>
              <div className="text-gray-500 text-md font-normal">years of experience</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 grow">
            <div className="bg-red-500 p-3 rounded-full">
              <Stars className="w-10 h-10" />
            </div>
            <div>
              <div className="text-bold text-2xl font-bold">{happyCustomers}</div>
              <div className="text-gray-500 text-md font-normal">Happy Customer</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 grow">
            <div className="bg-red-500 p-3 rounded-full">
              <World className="w-10 h-10" />
            </div>
            <div>
              <div className="text-bold text-2xl font-bold">{firmWorldWide}</div>
              <div className="text-gray-500 text-md font-normal">Firm Worldwide</div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
