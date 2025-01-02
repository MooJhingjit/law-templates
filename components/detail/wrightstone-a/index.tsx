import { SectionContainer } from '@/components/shared/wrightstone/section-container'
import { ArrowUpRight } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import main, { QueryProps } from './queries'

type Props = {
  dynamicProps: {
    title: string
  }
  queryProps: QueryProps
}
export const DetailWrightstoneA = async () => {
  const queryProps = await main()
  const dynamicProps = {
    title: 'Questions? Look Here...',
  }
  return <_DetailWrightstoneA dynamicProps={dynamicProps} queryProps={queryProps} />
}

const _DetailWrightstoneA = (props: Props) => {
  const { dynamicProps, queryProps } = props
  return (
    <section className="py-16 mb-8">
      <SectionContainer>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <h3 className="text-1xl font-medium">{dynamicProps.title}</h3>
            <ul>
              {queryProps.types.map((item) => (
                <li key={item.id} className="text-sm my-2 flex space-x-2">
                  <span> {item.name}</span>
                  <ArrowUpRight className=" w-5 h-5" />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3">
            <Accordion type="single" collapsible className="w-full">
              {queryProps.data.map((item) => (
                <AccordionItem key={item.id} value={item.title}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
