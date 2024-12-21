import Image from 'next/image'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import main, { QueryProps } from './queries'

type Props = {
  queryProps: QueryProps
}

export const OverviewHarrisonA = async () => {
  const queryProps = await main()
  return <_OverviewHarrisonA queryProps={queryProps} />
}

export const _OverviewHarrisonA = (props: Props) => {
  const { queryProps } = props
  return (
    <SectionContainer>
      <section className="transform lg:-translate-y-1/2 bg-white shadow border border-black/10 mb-16 px-6 lg:px-14 container py-6 mt-8 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-md">
        {queryProps.data.map((item) => (
          <div key={item.id} className="flex items-center space-x-2 grow">
            <div className="bg-red-500 p-4 rounded-full">
              <Image src={item.icon} width={25} height={25} alt={item.value} />
            </div>
            <div>
              <div className="text-bold text-2xl font-bold">{item.value}</div>
              <div className="text-gray-500 text-md font-normal">{item.description}</div>
            </div>
          </div>
        ))}
      </section>
    </SectionContainer>
  )
}
