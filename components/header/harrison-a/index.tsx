import Link from 'next/link'
import { MobileNav } from './mobile-nav'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { SectionContainer } from '@/components/shared/harrison/section-container'

type Route = {
  name: string
  href: string
}
type Action = {
  label: string
  url: string
}

export type Props = {
  dynamicProps: { logo: string; logoHref: string; routes: Route[]; action: Action }
}

export const HeaderHarrisonA = () => {
  const dynamicProps = {
    logo: '/harrison/logo.png',
    logoHref: '/harrison/',
    routes: [
      { name: 'Home', href: '/harrison/' },
      { name: 'About us', href: '/harrison/about-us' },
      { name: 'Practice Area', href: '/harrison/practice-area' },
      { name: 'Legal Resource', href: '/harrison/legal-resource' },
    ],
    action: {
      label: 'Get In Touch',
      url: '/harrison/about-us',
    },
  }

  return <_Header dynamicProps={dynamicProps} />
}

const _Header = (props: Props) => {
  const { dynamicProps } = props
  const { logo, logoHref, routes, action } = dynamicProps
  return (
    <SectionContainer>
      <nav className="border-b border-gray-300 py-6 z-10 flex items-center justify-between">
        <Link href={logoHref}>
          <Image src={logo} width={200} height={50} alt={'Logo'} />
        </Link>
        <ul className="hidden lg:flex items-center space-x-8 w-auto">
          {routes.map((route) => (
            <li key={route.name} className=" text-gray-900 text-base font-medium">
              <Link href={route.href} className="inline-block text-sm text-gray-900 hover:text-red-600 font-medium">
                {route.name}
              </Link>
            </li>
          ))}
          <li>
            <Button>
              <Link href={action.url}>{action.label}</Link>
            </Button>
          </li>
        </ul>
        <MobileNav {...props} />
      </nav>
    </SectionContainer>
  )
}
