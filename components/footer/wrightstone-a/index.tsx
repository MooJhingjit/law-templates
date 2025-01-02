import { Facebook } from '@/icons/harrison/facebook'
import { Instagram } from '@/icons/harrison/instagram'
import { Twitter } from '@/icons/harrison/twitter'
import { Youtube } from '@/icons/harrison/youtube'
import { MapPinIcon, MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import Image from 'next/image'
import messages from './messages.json'
import { Input } from '@/components/ui/input'

type Props = {
  dynamicProps: {
    logo: string
    logoHref: string
    description: string
    links: {
      facebook: string
      youtube: string
      twitter: string
      instagram: string
    }
    featuresTitle: string
    features: { name: string; href: string }[]
    language: string
    footerLink1: string
    footerLink2: string
    copyRight: string
  }
}

export const FooterWrightstoneA = () => {
  const dynamicProps = {
    logo: '/wrightstone/logo-footer.png',
    logoHref: '/wrightstone/',
    description:
      'We are dedicated to providing expert legal services and personalized solutions to meet the unique needs of our clients. Our team of experienced professionals is here to guide you through every step of your legal journey. Contact us today for trusted legal advice and support."',
    links: {
      facebook: 'http://facebook.com',
      youtube: 'http://youtube.com',
      twitter: 'http://twitter.com',
      instagram: 'http://instagram.com',
    },

    featuresTitle: 'Explore',
    features: [
      { name: 'Home', href: '/wrightstone' },
      { name: 'Practices', href: '/wrightstone/practices' },
      { name: 'Legal Resources', href: '/wrightstone/legal-resources' },
      { name: 'Case Studies', href: '/wrightstone/case-studies' },
      { name: 'Blogs', href: '/wrightstone/blogs' },
      { name: 'About Us', href: '/wrightstone/about-us' },
      { name: 'Contact', href: '/wrightstone/contact' },
    ],
    language: 'United State/English',
    footerLink1: 'Privacy',
    footerLink2: 'Sitemap',
    copyRight: 'Copyright Harrison Associates, All Rights Reserved',
  }

  return <_FooterHarrisonA dynamicProps={dynamicProps} />
}

export const _FooterHarrisonA = (props: Props) => {
  const { dynamicProps } = props
  const { logo, logoHref, description, links, featuresTitle, features, language, footerLink1, footerLink2, copyRight } =
    dynamicProps

  const _trans = messages.en
  return (
    <div>
      <div className="bg-[#04383F] py-20 ">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:m-auto">
              <Link href={logoHref}>
                <Image src={logo} width={160} height={30} alt={'Logo'} />
              </Link>
              <div className="text-gray-400 text-sm font-semibold  leading-normal tracking-tight my-4">
                {description}
              </div>
              <h3 className="text-white text-1xl font-semibold">Follow Us</h3>
              <div className="mt-4 justify-start items-center gap-6 inline-flex">
                <Link href={links.facebook} target="_blank">
                  <Facebook />
                </Link>
                <Link href={links.youtube} target="_blank">
                  <Youtube />
                </Link>
                <Link href={links.twitter} target="_blank">
                  <Twitter />
                </Link>
                <Link href={links.instagram} target="_blank">
                  <Instagram />
                </Link>
              </div>
              <div className="my-4">
                <p className="text-white text-base">{_trans.newLetterLabel}</p>
                <Input type="email" placeholder="Enter your email address" className="my-4" />
              </div>
            </div>
            <div className="lg:m-auto">
              <div className="flex-col justify-start items-start gap-6 flex">
                <h3 className="text-white text-2xl font-semibold  leading-loose tracking-tight">{featuresTitle}</h3>
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="text-gray-400 text-sm font-semibold  leading-normal tracking-tight"
                  >
                    <Link href={feature.href} className="inline-block text-sm hover:text-gray-900font-medium">
                      {feature.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:ml-auto grid grid-cols-1 gap-4 w-[220px] end-0">
              <p className="text-sm text-gray-400">OUR OFFICES</p>
              <iframe
                width="220"
                height="150"
                src="https://www.youtube.com/embed/nogh434ykF0"
                title="Mindset of Successful Programmers"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
              <h4 className="text-white text-1xl">Serving customers from across the globe</h4>
              <p className="flex text-gray-400 text-sm space-x-2">
                <MapPinIcon className="w-5 h-5" /> <span>San Francisco, California</span>
              </p>
              <p className="flex text-gray-400 text-sm space-x-2">
                <MapPinIcon className="w-5 h-5" />
                <span>support@beylearning.com</span>
              </p>
              <Link href="#">
                <div className="text-white text-sm flex space-x-2 ">
                  <span> View Location</span> <MoveRightIcon />
                </div>
              </Link>
            </div>
          </div>
        </SectionContainer>
      </div>
      <div className="bg-[#04383F]  text-sm text-gray-400 font-medium leading-9">
        <SectionContainer>
          <div className=" py-4 border-t  flex justify-between">
            <ul className="flex space-x-6">
              <li>{language}</li>
              <li>|</li>
              <li>{footerLink1}</li>
              <li>{footerLink2}</li>
            </ul>
            <p>{copyRight}</p>
          </div>
        </SectionContainer>
      </div>
    </div>
  )
}
