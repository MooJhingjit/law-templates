import Breadcrumbs from '@/components/shared/harrison/breadcrumb'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import messages from './messages.json'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import { CardB } from '@/components/shared/harrison/card-b'

type Data = {
  id: number
  title: string
  slug: string
  description: string
  image: string
  author: {
    name: string
    createdAt: string
    image: string
  }
}

type Props = {
  title: string
  content: string
  relatedData: Data[]
  author: {
    name: string
    createdAt: string
    image: string
  }
}

export const DetailHarrisonC = () => {
  const { content, title, author, relatedData } = messages
  return <_DetailHarrisonC content={content} title={title} author={author} relatedData={relatedData} />
}

export const _DetailHarrisonC = (props: Props) => {
  const { title, content, author, relatedData } = props
  return (
    <section className="mb-16">
      <SectionContainer>
        <div className="grid gird-cols-1 md:grid-cols-4 gap-x-6">
          <div className="lg:col-span-3 order-1 overflow-scroll">
            <Breadcrumbs
              pages={[
                { name: 'Home', href: '/harrison', current: false },
                {
                  name: 'Legal resource',
                  href: '/harrison/legal-resource',
                  current: false,
                },
                {
                  name: 'How to design a product that can grow itself 10x in year?',
                  href: '/harrison/legal-resource/how-to-design-a-product-that-can-grow-itself-10x-in-year',
                  current: true,
                },
              ]}
            />
            <h1 className="leading-relaxed text-5xl font-bold">{title}</h1>
            <div className="text-md  flex justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Image src={author.image} alt="Place Holder" width={30} height={30} className=" rounded-full" />
                <span>{author.name}, </span>
              </div>
              <span className="text-primary">{new Date(author.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="prose-sm text-gray-700" dangerouslySetInnerHTML={{ __html: content }}></div>
            <div className="text-center">
              <h4 className="text-2xl font-bold leading-relaxed">Follow Us</h4>
              <div className="mt-4 justify-start items-center gap-2 inline-flex">
                <Link href={'#'} target="_blank">
                  <Facebook />
                </Link>
                <Link href={'#'} target="_blank">
                  <Twitter />
                </Link>

                <Link href={'#'} target="_blank">
                  <Instagram />
                </Link>
                <Link href={'#'} target="_blank">
                  <Youtube />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 order-2">
            <h3 className="font-bold text-1xl leading-relaxed mb-4">Related articles</h3>
            {relatedData.map((item) => (
              <div key={item.id} className="mb-4">
                <CardB {...item} />
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
