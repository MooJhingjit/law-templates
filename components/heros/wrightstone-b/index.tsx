import { SectionContainer } from '@/components/shared/harrison/section-container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRightCircleIcon } from 'lucide-react'
import { HorizontalLine } from '@/icons/wrightstone/horizontal-line'

type Props = {
  dynamicProps: {
    backgroundImage: string
    badge: string
    title: string
    description: string
    actionLabel: string
    actionUrl: string
  }
}
export const HeroWrightstoneB = async () => {
  const dynamicProps = {
    backgroundImage: '/wrightstone/hero-a-background.png',
    badge: 'Facing Legal challenge?',
    title: 'Request a Confidential Case Evaluation',
    description:
      'At Wrightstone & Partners, our leaders bring decades of experice in law, finance and compliance, with a commitment to fostering an inclusive and interconnected future for our clients',
    actionLabel: 'Schedule Consultation',
    actionUrl: '#',
  }
  return <_HeroWrightstoneB dynamicProps={dynamicProps} />
}

const _HeroWrightstoneB = (props: Props) => {
  const { dynamicProps } = props
  const { backgroundImage, badge, title, description, actionLabel, actionUrl } = dynamicProps
  return (
    <section
      className="py-28 bg-no-repeat bg-cover mb-8 text-white text-center"
      style={{
        backgroundImage: `url('${backgroundImage || ''}')`,
      }}
    >
      <SectionContainer>
        <div className="max-w-lg mx-auto flex-col space-y-4">
          <div>
            <div className="text-sm flex justify-center items-center space-x-2">
              <HorizontalLine className="bg-primary" />
              <span className="text-primary">{badge}</span>
            </div>
            <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
          </div>
          <p className="text-sm">{description}</p>
          <Button className="py-6 rounded-none">
            <Link href={actionUrl} className="flex items-center space-x-2">
              <span> {actionLabel}</span>
              <ArrowRightCircleIcon />
            </Link>
          </Button>
        </div>
      </SectionContainer>
    </section>
  )
}
