import { SectionContainer } from '@/components/shared/harrison/section-container'
import { Map } from './map'
import messages from './messages.json'

type Props = {
  dynamicProps: {
    phone: string
    email: string
    location: string
  }
}

export const ContactInfoHarrisonA = () => {
  const dynamicProps = {
    phone: '+92 3208982828',
    email: 'info@gmail.com',
    location: '206-130 Dundas St., E Mississauga, ON. L5A 3V8',
  }
  return <_ContactInfoHarrisonA dynamicProps={dynamicProps} />
}

const _ContactInfoHarrisonA = (props: Props) => {
  const { dynamicProps } = props
  const _trans = messages.en
  return (
    <section className="mb-24">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-8">
          <div className="lg:col-span-1 text-sm flex-col space-y-4">
            <div>
              <h4 className="font-bold leading-relaxed">{_trans.phone}:</h4>
              <p className="text-gray-500">{dynamicProps.phone}</p>
            </div>
            <div>
              <h4 className="font-bold leading-relaxed">{_trans.email}:</h4>
              <p className="text-gray-500">{dynamicProps.email}</p>
            </div>
            <div>
              <h4 className="font-bold leading-relaxed">{_trans.location}:</h4>
              <p className="text-gray-500">{dynamicProps.location}</p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Map />
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
