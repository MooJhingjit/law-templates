import { ArrowRightCircleIcon } from 'lucide-react'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Props = {
  dynamicProps: {
    backgroundImage: string
    bagde: string
    title: string
    description: string
    action1Label: string
    action1Url: string
    action2Label: string
    action2Url: string
  }
}

export const HeroWrightstoneA = async () => {
  const dynamicProps = {
    backgroundImage: '/wrightstone/hero-a-background.png',
    bagde: '--- Wrightstone & Partners',
    title: 'Your Legal Needs, Our Expertise',
    description:
      'At Wrightstone & Partners, we are dedicated to providing our clients with the highest quality legal representation. Our team of experienced attorneys is here to help you navigate the complex legal system and achieve the best possible outcome for your case.',
    action1Label: 'Schedule Consultation',
    action1Url: '#',
    action2Label: 'View Practice Areas',
    action2Url: '#',
  }
  return <_HeroWrightstoneA dynamicProps={dynamicProps} />
}

const _HeroWrightstoneA = (props: Props) => {
  const { dynamicProps } = props
  const { backgroundImage, bagde, title, description, action1Label, action1Url, action2Label, action2Url } =
    dynamicProps
  return (
    <section
      className="py-10 lg:py-0 bg-no-repeat bg-cover mb-8"
      style={{
        backgroundImage: `url('${backgroundImage || ''}')`,
      }}
    >
      <SectionContainer>
        <div className="lg:py-28 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="text-primary  font-medium capitalize">{bagde}</div>
            <h1 className="text-white text-6xl font-bold leading-tight">{title}</h1>
            <div className=" text-white mt-4 text-base font-normal leading-relaxed">{description}</div>
            <div className="flex space-x-3 mt-8">
              <Button className="py-6 rounded-none">
                <Link href={action1Url} className="flex items-center space-x-2">
                  <span> {action1Label}</span>
                  <ArrowRightCircleIcon />
                </Link>
              </Button>
              <Button className="py-6 rounded-none bg-transparent border border-primary">
                <Link href={action2Url} className="flex items-center space-x-2">
                  <span>{action2Label}</span>
                  <ArrowRightCircleIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
