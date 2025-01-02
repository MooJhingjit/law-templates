import { SectionContainer } from '@/components/shared/wrightstone/section-container'

type Props = {
  dynamicProps: {
    title: string
    description: string
  }
}

export const HeroWrigntstoneE = () => {
  const dynamicProps = {
    title: 'Contact Us',
    description: 'Requtation. Respect. Results.',
  }
  return <_HeroWrigntstoneE dynamicProps={dynamicProps} />
}

const _HeroWrigntstoneE = (props: Props) => {
  const { dynamicProps } = props
  const { title, description } = dynamicProps
  return (
    <section className="bg-[#04383F] mb-8 text-center text-white">
      <SectionContainer>
        <div className=" py-16 max-w-lg mx-auto flex-col space-y-4">
          <div>
            <h3 className="inline-block mt-2 text-2xl font-semibold border-b-2 border-primary">{title}</h3>
          </div>
          <p className="text-sm">{description}</p>
        </div>
      </SectionContainer>
    </section>
  )
}
