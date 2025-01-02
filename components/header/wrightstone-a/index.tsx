import Link from 'next/link'
import { MobileNav } from './mobile-nav'
import { ArrowRightCircleIcon } from 'lucide-react'
import Image from 'next/image'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import { Facebook } from '@/icons/wrightstone/facebook'
import { Instagram } from '@/icons/wrightstone/instagram'
import { LinkedIn } from '@/icons/wrightstone/linkedIn'
import { Twitter } from '@/icons/wrightstone/twitter'
import { Globe } from '@/icons/wrightstone/globe'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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

export const HeaderWrightstoneA = () => {
  const dynamicProps = {
    logo: '/wrightstone/logo.png',
    logoHref: '/wrightstone/',
    routes: [
      { name: 'Home', href: '/wrightstone/' },
      { name: 'Practices', href: '/wrightstone/practices' },
      { name: 'Legal Resource', href: '/wrightstone/legal-resource' },
      { name: 'About Us', href: '/wrightstone/about-us' },
      { name: 'Contact', href: '/wrightstone/contact' },
    ],
    action: {
      label: 'Appointment',
      url: '/wrightstone/appointment',
    },
  }

  return <_Header dynamicProps={dynamicProps} />
}

const _Header = (props: Props) => {
  const { dynamicProps } = props
  const { logo, logoHref, routes, action } = dynamicProps
  return (
    <nav className="border-b border-gray-300">
      <div className="bg-[#04383F] text-white">
        <div className="flex items-center justify-between py-1  px-2 lg:px-32">
          <div className="flex space-x-2 lg:space-x-6">
            <Facebook className="w-5 h-5" />
            <LinkedIn className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
          </div>
          <ul className="flex items-center space-x-2 lg:space-x-6 text-sm">
            <li>Support</li>
            <li className="flex items-center">
              <Globe className="w-5 h-5" />
              <Select value="english">
                <SelectTrigger className="pl-2 w-[100px] border-0 focus:outline-none focus:ring-0 focus:border-0 hover:border-0 active:border-0 outline-none shadow-none ">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="thai">Thai</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </li>
          </ul>
        </div>
      </div>

      <SectionContainer>
        <div className="z-10 flex items-center lg:items-stretch justify-between">
          <Link href={logoHref}>
            <Image src={logo} width={160} height={30} alt={'Logo'} />
          </Link>
          <div className="flex space-x-8">
            <ul className="hidden lg:flex items-center space-x-8 w-auto">
              {routes.map((route) => (
                <li key={route.name} className=" text-gray-900 text-base font-medium">
                  <Link href={route.href} className="inline-block text-sm text-gray-900 hover:text-primary font-medium">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex items-center bg-primary px-6 py-2">
              <Link href={action.url} className="flex items-center space-x-2 font-medium">
                <span>{action.label}</span>
                <ArrowRightCircleIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <MobileNav {...props} />
        </div>
      </SectionContainer>
    </nav>
  )
}
