import Breadcrumbs from '@/components/shared/harrison/breadcrumb'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import main, { QueryProps } from './queries'

type Props = {
  queryProps: QueryProps
}

export const DetailHarrisonB = async () => {
  const queryProps = await main()
  return <_DetailHarrisonB queryProps={queryProps} />
}

export const _DetailHarrisonB = (props: Props) => {
  const { queryProps } = props
  const { data } = queryProps
  const { title, content, author } = data
  return (
    <section>
      <SectionContainer>
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
      </SectionContainer>
    </section>
  )
}
