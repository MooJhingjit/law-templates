'use client'
import * as React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { QueryProps } from './queries'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  data: QueryProps['relatedData']
  categories: QueryProps['categories']
  dynamicProps: {
    searchLabel: string
  }
}
export const Filter = (props: Props) => {
  const { data, categories, dynamicProps } = props
  const pathname = usePathname()

  return (
    <div className="flex-col space-y-4">
      <div className="flex justify-between space-x-2">
        <Input type="text" placeholder="Find..." className="w-full" />
        <Button type="submit">{dynamicProps.searchLabel}</Button>
      </div>
      <div className="w-full">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.slug}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="hidden lg:block">
        <h3 className="font-bold leading-relaxed ">Related articles</h3>
        {data.map((item) => (
          <div key={item.id} className="my-2">
            <span className="text-primary text-xs">{new Date(item.author.createdAt).toLocaleDateString()}</span>
            <h4 className="font-semibold">
              <Link href={`${pathname}/${item.slug}`}>{item.title}</Link>
            </h4>
          </div>
        ))}
      </div>
    </div>
  )
}
