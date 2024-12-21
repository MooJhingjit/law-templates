import { SectionContainer } from '@/components/shared/harrison/section-container'
import { Tags } from './tags'
import main, { QueryProps } from './queries'

type Props = {
  queryProps: QueryProps
}

export const DetailHarrisonA = async () => {
  const queryProps = await main()
  return <DetailHarrisonAWrapper queryProps={queryProps} />
}

export const DetailHarrisonAWrapper = (props: Props) => {
  const { queryProps } = props

  return (
    <section className="pb-24 mb-16">
      <SectionContainer>
        <Tags tags={queryProps.tags} tag={queryProps.tag} />

        <h1 className="leading-relaxed text-5xl font-bold">{queryProps.data.title}</h1>
        <div className="prose-sm text-gray-700" dangerouslySetInnerHTML={{ __html: queryProps.data.content }}></div>
      </SectionContainer>
    </section>
  )
}
