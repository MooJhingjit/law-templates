import Image from 'next/image'
import { SectionContainer } from '@/components/shared/harrison/section-container'

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
              className="py-16 px-2 lg:p-14 bg-white rounded-lg shadow border border-black/10 flex-col justify-center items-center gap-10 inline-flex"
            >
              <div className="p-4 bg-white rounded-xl shadow flex-col justify-center items-center gap-2.5 flex">
                <Image width={25} height={25} src={item.icon} alt={item.title} />
              </div>
              <div className=" flex-col justify-start items-center gap-6 flex">
                <div className="text-gray-500 text-3xl font-medium leading-9">{item.title}</div>
                <div className="text-center text-gray-500 text-base font-normal leading-normal tracking-tight">
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
