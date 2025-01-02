'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Family } from '@/icons/harrison/family'
import { InjuredPerson } from '@/icons/harrison/injured-person'
import { RealEstateLaw } from '@/icons/harrison/real-estate-law'
import { EstatePlanning } from '@/icons/harrison/estate-planning'
import { CriminalDefence } from '@/icons/harrison/criminal-defence'
import { BusinessLaw } from '@/icons/harrison/business-law'

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
      className="py-16 px-2 lg:px-8 bg-white rounded-lg shadow border border-black/10 flex-col justify-center items-center gap-4 inline-flex"
    >
      <div className="p-4 bg-white rounded-xl shadow flex-col justify-center items-center gap-2.5 flex">
        {/* <Image width={25} height={25} src={icon} alt={title} /> */}
        {title === 'Personal Injury' && <InjuredPerson className="w-10 h-10" />}
        {title === 'Real Estate Law' && <RealEstateLaw className="w-10 h-10" />}
        {title === 'Estate Planning' && <EstatePlanning className="w-10 h-10" />}
        {title === 'Criminal Defense' && <CriminalDefence className="w-10 h-10" />}
        {title === 'Business Law' && <BusinessLaw className="w-10 h-10" />}
        {title === 'Family Law' && <Family className="w-10 h-10" />}
      </div>
      <div className=" flex-col justify-start items-center gap-6 flex">
        <div className="text-3xl font-medium leading-9">{title}</div>
        <div className="text-center text-gray-500 text-sm font-normal leading-normal tracking-tight">{description}</div>
      </div>
      <Button className="w-[80%] p-6">
        <Link href={`${pathname}/${slug}`}>{actionLabel}</Link>
      </Button>
    </div>
  )
}
