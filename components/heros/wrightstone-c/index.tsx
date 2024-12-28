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
export const HeroWrightstoneC = async () => {
  const dynamicProps = {
    badge: 'Wrightstone & Partners',
    title: 'Meet Our Expert Team',
    description:
      'At Wrightstone & Partners, our leaders bring decades of experice in law, finance and compliance, with a commitment to fostering an inclusive and interconnected future for our clients',
    actionLabel: 'Meet Our Team',
    actionUrl: '#',
  }
  return <_HeroWrightstoneC dynamicProps={dynamicProps} />
}

const _HeroWrightstoneC = (props: Props) => {
  const { dynamicProps } = props
  const { badge, title, description, actionLabel, actionUrl } = dynamicProps
  return (
    <section className="py-28 bg-[#04383F] mb-8 text-white text-center">
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
