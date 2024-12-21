'use client'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

type Props = {
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
export const CardB = (props: Props) => {
  const pathname = usePathname()
  const { id, title, slug, description, image, author } = props
  return (
    <div
      key={id}
      className="bg-white rounded-t-xl rounded-b-sm shadow border border-black/10 flex-col justify-center items-center inline-flex "
    >
      <AspectRatio ratio={1.2 / 1}>
        <Image src={image} alt={image} fill className="rounded-t-xl object-cover" />
      </AspectRatio>
      <div className="p-4">
        <div className="text-sm flex space-x-1">
          <Image src={author.image} alt="Place Holder" width={16} height={16} className=" rounded-full" />
          <span>{author.name}, </span>
          <span className="text-primary">{new Date(author.createdAt).toLocaleDateString()}</span>
        </div>
        <div>
          <h5 className="font-semibold">{title}</h5>
          <p className="text-gray-500 text-sm">{description}</p>
          <Link href={`${pathname}/${slug}`}>
            <div className="mt-4 text-sm inline-flex -center text-red-600">
              <span>Learn More </span> &nbsp; <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
