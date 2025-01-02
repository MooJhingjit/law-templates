import { SectionContainer } from '@/components/shared/harrison/section-container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRightCircleIcon } from 'lucide-react'
import { HorizontalLine } from '@/icons/wrightstone/horizontal-line'

type Props = {
  dynamicProps: {
    badge: string
    title: string
    description: string
    actionLabel: string
    actionUrl: string
  }
}
export const HeroWrightstoneD = async () => {
  const dynamicProps = {
    badge: 'Wrightstone & Partners',
    title: 'Ready to Partner For Success?',
    description:
      "At Wrightstone & Partners, we provide expert guidance and tailored solutions to help you achieve your goals. Whether handling legal challenges or growing your business, we're here to support you every step of the way. Let's build a lasting partnership.",
    actionLabel: 'Schedule Consultation',
    actionUrl: '#',
  }
  return <_HeroWrightstoneD dynamicProps={dynamicProps} />
}

const _HeroWrightstoneD = (props: Props) => {
  const { dynamicProps } = props
  const { badge, title, description, actionLabel, actionUrl } = dynamicProps
  return (
    <section className="py-28 text-center bg-gray-100">
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
