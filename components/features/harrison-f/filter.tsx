'use client'
import { useState } from 'react'
import { Select, SelectContent, SelectSeparator, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { QueryProps } from './queries'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

type FilterProps = {
  field: string
  value: string | null
}

type Props = {
  data: QueryProps['relatedData']
  categories: QueryProps['categories']
  dynamicProps: {
    searchLabel: string
  }
}
const { PAGE, LIMIT } = { PAGE: 1, LIMIT: 10 }

export const Filter = (props: Props) => {
  const { data, categories, dynamicProps } = props
  const params = {
    title: '',
  }
  const pathname = usePathname()
  const router = useRouter()
  const [state, setState] = useState({
    title: '',
  })
  const handleState = ({ field, value }: FilterProps) => {
    if (value === '' && state[field as keyof typeof state] !== '') {
      handleChangeFilter({ field, value: null })
    }
    setState((prev) => ({ ...prev, [field]: value }))
  }

  const handleChangeFilter = ({ field, value }: FilterProps) => {
    const newParams = { ...params, [field]: value }
    let route = `${pathname}?page=${PAGE}&limit=${LIMIT}`
    if (newParams.title) route += `&title=${newParams.title}`
    router.push(route)
  }

  return (
    <div className="flex-col space-y-4">
      <div className="flex justify-between space-x-2">
        <Input
          type="text"
          placeholder="Find..."
          className="w-full"
          value={state.title ?? ''}
          onChange={(e) => handleState({ field: 'title', value: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleChangeFilter({ field: 'title', value: state.title })
            }
          }}
        />
        <Button type="submit">{dynamicProps.searchLabel}</Button>
      </div>
      <div className="w-full">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Category</SelectItem>
            <SelectSeparator />

            {categories.map((category) => (
              <SelectItem key={category.id} value={category.slug}>
                {category.name}
              </SelectItem>
            ))}
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
