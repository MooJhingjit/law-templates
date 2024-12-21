import React from 'react'
import { ChevronsRightIcon } from 'lucide-react'
import Link from 'next/link'

interface Page {
  name: string
  href: string
  current: boolean
}

interface BreadcrumbsProps {
  pages: Page[]
}

export default function Breadcrumbs({ pages }: Readonly<BreadcrumbsProps>) {
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: pages.map((page, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: page.name,
      item: page.href,
    })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="flex items-center text-xs overflow-x-auto whitespace-nowrap max-w-full" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-2">
          {pages.map((page, index) => (
            <React.Fragment key={index}>
              <li key={page.name}>
                <div className="flex items-center">
                  <Link
                    href={page.href}
                    className={
                      (page.current ? 'text-red-500 hover:text-gray-700' : 'text-blue-500 hover:text-blue-700') +
                      'ml-4 font-medium '
                    }
                    aria-current={page.current ? 'page' : undefined}
                  >
                    {page.name}
                  </Link>
                </div>
              </li>
              {index < pages.length - 1 && (
                <ChevronsRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </>
  )
}
