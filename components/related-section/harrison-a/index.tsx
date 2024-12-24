import { SectionContainer } from '@/components/shared/harrison/section-container'
import { CardB } from '@/components/shared/harrison/card-b'
import main, { QueryProps } from './quires'

type Props = {
  dynamicProps: {
    title: string
    learnMoreLabel: string
  }
  queryProps: QueryProps
}
export const RelatedSectionHarrisonA = async () => {
  const dynamicProps = { title: 'Related articles', learnMoreLabel: 'Learn More' }
  const queryProps = await main()
  return <_RelatedSectionHarrisonA dynamicProps={dynamicProps} queryProps={queryProps} />
}

const _RelatedSectionHarrisonA = (props: Props) => {
  const { dynamicProps, queryProps } = props
  return (
    <section className="mb-16">
      <SectionContainer>
        <h3 className="text-bold  text-3xl font-semibold leading-relaxed">{dynamicProps.title}</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {queryProps.data.map((item) => (
            <CardB key={item.id} {...item} learnMoreLabel={dynamicProps.learnMoreLabel} />
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
