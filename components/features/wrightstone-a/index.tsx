import { SectionContainer } from '@/components/shared/wrightstone/section-container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRightCircleIcon } from 'lucide-react'
import main, { QueryProps } from './queries'
import { InjuredPerson } from '@/icons/harrison/injured-person'
type Props = {
  dynamicProps: {
    badge: string
    title: string
    description: string
    actionLabel: string
    actionUrl: string
  }
  queryProps: QueryProps
}

export const FeatureWrightstoneA = async () => {
  const dynamicProps = {
    badge: 'Firm Overview',
    title: 'Our Practice Area',
    description:
      'At Wrightstone & Partners, we deliver tailored solution and export guidance to help clients achieve their goals.',
    actionLabel: 'All Practice Areas',
    actionUrl: '/practice-areas',
  }
  const queryProps = await main()
  return <_FeatureWrightstoneA dynamicProps={dynamicProps} queryProps={queryProps} />
}

const _FeatureWrightstoneA = (props: Props) => {
  const { dynamicProps, queryProps } = props
  const { badge, title, description, actionLabel, actionUrl } = dynamicProps

  return (
    <section className="mb-8 py-8 text-center">
      <SectionContainer>
        <div className="max-w-lg mx-auto">
          <div>
            <p className="text-sm">{badge}</p>
            <h2 className="text-2xl font-semibold">{title}</h2>
          </div>
          <p className="text-sm">{description}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {queryProps.data.map((item) => (
            <div
              key={item.id}
              className="py-12 px-2 lg:px-8 bg-white shadow border border-black/10 flex-col justify-center items-center gap-4 inline-flex"
            >
              <div className="p-4 bg-white rounded-xl shadow flex-col justify-center items-center gap-2.5 flex">
                <InjuredPerson className="w-10 h-10" />
              </div>
              <div className="flex-col justify-start items-center gap-6 flex">
                <div className="text-3xl font-medium leading-9">{item.title}</div>
                <div className="text-center text-gray-500 text-sm font-normal leading-normal tracking-tight">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="mt-4 py-6 rounded-none bg-transparent border border-primary text-[#04383F]">
          <Link href={actionUrl} className="flex items-center space-x-2">
            <span>{actionLabel}</span>
            <ArrowRightCircleIcon />
          </Link>
        </Button>
      </SectionContainer>
    </section>
  )
}
