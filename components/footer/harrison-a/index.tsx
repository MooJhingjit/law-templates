import { Facebook } from '@/icons/harrison/facebook'
import { Instagram } from '@/icons/harrison/instagram'
import { Twitter } from '@/icons/harrison/twitter'
import { Youtube } from '@/icons/harrison/youtube'
import Link from 'next/link'
import { SectionContainer } from '@/components/shared/harrison/section-container'

type Props = {
  dynamicProps: {
    routesTitle: string
    routes: { name: string; href: string }[]
    featuresTitle: string
    features: { name: string; href: string }[]
    resourcesTitle: string
    resources: { name: string; href: string }[]
    actionTitle: string
    actionDescription: string
    facebook: string
    twitter: string
    instagram: string
    youtube: string
    copyRight: string
  }
}

export const FooterHarrisonA = () => {
  const dynamicProps = {
    routesTitle: 'Harrison Associates',
    routes: [
      { name: 'Home', href: '/harrison' },
      { name: 'About us', href: '/harrison/about-us' },
      { name: 'Practice Area', href: '/harrison/practice-area' },
      { name: 'Legal Resource', href: '/harrison/legal-resource' },
    ],
    featuresTitle: 'Features.',
    features: [
      { name: 'Contact Us', href: '/harrison/contact-us' },
      { name: 'Feature 2', href: '/harrison/feature-2' },
      { name: 'Feature 3', href: '/harrison/feature-3' },
      { name: 'Feature 4', href: '/harrison/feature-4' },
    ],
    resourcesTitle: 'Resources.',
    resources: [
      { name: 'Resource 1', href: '/harrison/resource-1' },
      { name: 'Resource 2', href: '/harrison/resource-2' },
      { name: 'Resource 3', href: '/harrison/resource-3' },
      { name: 'Resource 4', href: '/harrison/resource-4' },
    ],
    actionTitle: 'Get In Touch',
    actionDescription: 'We are here to help you. Contact us by email or via our social media channels.',
    facebook: 'http://facebook.com',
    twitter: 'http://twitter.com',
    instagram: 'http://instagram.com',
    youtube: 'http://youtube.com',
    copyRight: 'Copyright Harrison Associates, All Rights Reserved',
  }

  return <_FooterHarrisonA dynamicProps={dynamicProps} />
}

export const _FooterHarrisonA = (props: Props) => {
  const { dynamicProps } = props
  const {
    routesTitle,
    featuresTitle,
    resourcesTitle,
    routes,
    features,
    resources,
    actionTitle,
    actionDescription,
    facebook,
    twitter,
    instagram,
    youtube,
    copyRight,
  } = dynamicProps
  return (
    <div>
      <div className="bg-primary py-20 ">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:m-auto">
              <h3 className="text-white text-2xl font-bold  leading-loose tracking-tight">{routesTitle}</h3>
              <ul className="flex-col justify-start items-start gap-2.5 flex">
                {routes.map((route) => (
                  <li key={route.name} className=" text-sm font-semibold  leading-normal tracking-tight">
                    <Link href={route.href} className="inline-block text-sm hover:text-gray-900 text-white font-medium">
                      {route.name}
                    </Link>{' '}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:m-auto">
              <div className="text-white text-2xl font-bold  leading-loose tracking-tight">{featuresTitle}</div>
              <div className="flex-col justify-start items-start gap-2.5 flex">
                {features.map((feature) => (
                  <div key={feature.name} className="text-white text-sm font-semibold  leading-normal tracking-tight">
                    <Link
                      href={feature.href}
                      className="inline-block text-sm hover:text-gray-900 text-white font-medium"
                    >
                      {feature.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:m-auto">
              <div className="text-white text-2xl font-bold  leading-loose tracking-tight">{resourcesTitle}</div>
              <div className="flex-col justify-start items-start gap-2.5 flex">
                {resources.map((resource) => (
                  <div key={resource.name} className="text-white text-sm font-semibold  leading-normal tracking-tight">
                    <Link
                      href={resource.href}
                      className="inline-block text-sm hover:text-gray-900 text-white font-medium"
                    >
                      {resource.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:m-auto">
              <div className="text-white text-2xl font-bold  leading-loose tracking-tight">{actionTitle}</div>
              <div className="text-white text-sm font-semibold  leading-normal tracking-tight">{actionDescription}</div>
              <div className="mt-4 justify-start items-center gap-2 inline-flex">
                <Link href={facebook} target="_blank">
                  <Facebook />
                </Link>
                <Link href={twitter} target="_blank">
                  <Twitter />
                </Link>

                <Link href={instagram} target="_blank">
                  <Instagram />
                </Link>
                <Link href={youtube} target="_blank">
                  <Youtube />
                </Link>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
      <div className="py-4 text-center text-neutral-500 text-base font-medium leading-9">{copyRight}</div>
    </div>
  )
}
