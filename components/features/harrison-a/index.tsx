// import Image from 'next/image'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import { Family } from '@/icons/harrison/family'
import { InjuredPerson } from '@/icons/harrison/injured-person'
import { RealEstateLaw } from '@/icons/harrison/real-estate-law'
import { EstatePlanning } from '@/icons/harrison/estate-planning'
import { CriminalDefence } from '@/icons/harrison/criminal-defence'
import { BusinessLaw } from '@/icons/harrison/business-law'

import main, { QueryProps } from './queries'

type Props = {
  queryProps: QueryProps
  dynamicProps: {
    title: string
  }
}

export const FeaturesHarrisonA = async () => {
  const queryProps = await main()
  const dynamicProps = {
    title: 'Our Practice Area',
  }
  return <_FeaturesHarrisonA queryProps={queryProps} dynamicProps={dynamicProps} />
}

const _FeaturesHarrisonA = (props: Props) => {
  const { queryProps, dynamicProps } = props

  return (
    <section className="py-6 mb-16">
      <SectionContainer>
        <h2 className="text-bold text-center text-5xl font-semibold leading-relaxed">{dynamicProps.title}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {queryProps.data.map((item) => (
            <div
              key={item.id}
              className="py-12 px-2 lg:px-8 bg-white rounded-lg shadow border border-black/10 flex-col justify-center items-center gap-4 inline-flex"
            >
              <div className="p-4 bg-white rounded-xl shadow flex-col justify-center items-center gap-2.5 flex">
                {/* <Image width={25} height={25} src={item.icon} alt={item.title} /> */}
                {item.title === 'Personal Injury' && <InjuredPerson className="w-10 h-10" />}
                {item.title === 'Real Estate Law' && <RealEstateLaw className="w-10 h-10" />}
                {item.title === 'Estate Planning' && <EstatePlanning className="w-10 h-10" />}
                {item.title === 'Criminal Defense' && <CriminalDefence className="w-10 h-10" />}
                {item.title === 'Business Law' && <BusinessLaw className="w-10 h-10" />}
                {item.title === 'Family Law' && <Family className="w-10 h-10" />}
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
      </SectionContainer>
    </section>
  )
}
