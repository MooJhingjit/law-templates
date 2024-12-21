import * as React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import Breadcrumbs from '@/components/shared/harrison/breadcrumb'
import { Input } from '@/components/ui/input'

export const Filter = () => {
  return (
    <div className="lg:flex justify-between items-center space-y-4 mb-4">
      <Breadcrumbs
        pages={[
          { name: 'Home', href: '/harrison', current: false },
          {
            name: 'Legal resource',
            href: '/harrison/legal-resource',
            current: true,
          },
        ]}
      />
      <div className="lg:flex lg:space-x-3 space-y-3 lg:space-y-0">
        <Select>
          <SelectTrigger className="lg:w-44">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="corporate-law">Corporate Law</SelectItem>
              <SelectItem value="personal-law">Personal Law</SelectItem>
              <SelectItem value="marriage-law">Marriage Law</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Find articles" />
          <Button type="submit">Search</Button>
        </div>
      </div>
    </div>
  )
}
