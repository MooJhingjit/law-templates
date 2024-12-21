'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  id: number
  title: string
  description: string
  icon: string
  slug: string
  actionLabel: string
}

export const CardC = (props: Props) => {
  const { id, title, description, icon, slug, actionLabel } = props
  const pathname = usePathname()

  return (
    <div
      key={id}
      className="py-16 px-2 lg:p-14 bg-white rounded-lg shadow border border-black/10 flex-col justify-center items-center gap-4 inline-flex"
    >
      <div className="p-4 bg-white rounded-xl shadow flex-col justify-center items-center gap-2.5 flex">
        <Image width={25} height={25} src={icon} alt={title} />
      </div>
      <div className=" flex-col justify-start items-center gap-6 flex">
        <div className="text-gray-500 text-3xl font-medium leading-9">{title}</div>
        <div className="text-center text-gray-500 text-base font-normal leading-normal tracking-tight">
          {description}
        </div>
      </div>
      <Button className="w-[80%] p-6">
        <Link href={`${pathname}/${slug}`}>{actionLabel}</Link>
      </Button>
    </div>
  )
}
