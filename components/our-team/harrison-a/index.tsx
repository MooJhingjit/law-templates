import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import main, { QueryProps } from './quires'

type Props = {
  queryProps: QueryProps
  dynamicProps: {
    title: string
  }
}

export const OurTeamHarrisonA = async () => {
  const queryProps = await main()
  const dynamicProps = {
    title: 'Our Team',
  }
  return <_OurTeamHarrisonA dynamicProps={dynamicProps} queryProps={queryProps} />
}
const _OurTeamHarrisonA = (props: Props) => {
  const { queryProps, dynamicProps } = props
  return (
    <section className=" py-6 mb-16">
      <SectionContainer>
        <h2 className="text-bold text-center text-5xl font-semibold leading-relaxed">{dynamicProps.title}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {queryProps.data.map((item) => (
            <div
              key={item.id}
              className="pb-8 text-center bg-white rounded-t-xl rounded-b-sm shadow border border-black/10 flex-col justify-center items-center gap-2 inline-flex "
            >
              <AspectRatio ratio={1 / 1}>
                <Image src={item.image} alt={item.name} fill className="bg-primary rounded-t-xl object-contain" />
              </AspectRatio>
              <h4 className="text-primary font-semibold">{item.position}</h4>
              <h5 className="font-semibold">{item.name}</h5>
              <p className="text-sm">{item.bio}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
