'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Checkbox } from '@/components/ui/checkbox'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/shared/wrightstone/section-container'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Facebook } from '@/icons/wrightstone/facebook'
import { HorizontalLine } from '@/icons/wrightstone/horizontal-line'
import { Twitter } from '@/icons/wrightstone/twitter'
import { YouTube } from '@/icons/wrightstone/youtube'
import { Instagram } from '@/icons/wrightstone/instagram'
import { LinkedIn } from '@/icons/wrightstone/linkedIn'
import { MailIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'

type Props = {
  dynamicProps: {
    badge: string
    title: string
    description: string
    contactTitle: string
    email: string
    phone: string
    linkTitle: string
    facebook: string
    twitter: string
    youtube: string
    instagram: string
    linkedIn: string
    actionLabel: string
    privacyPolicy: string
  }
}

export const ContactFormWrightstoneA = () => {
  const dynamicProps = {
    badge: 'Contact Us',
    title: 'Get in Touch',
    description: 'Have questions? Reach out to us! We’re here to help with membership, events, and more.',
    contactTitle: 'Reach Us Directly',
    email: 'hello@goldenharpoon.com',
    phone: '+1 123 456 7890',
    linkTitle: 'Follow Us',
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
    youtube: 'https://www.youtube.com',
    instagram: 'https://www.instagram.com',
    linkedIn: 'https://www.linkedin.com',
    actionLabel: 'SUBSCRIBE',
    privacyPolicy:
      'By checking this box, your confirm that you have read and are agreeing to our terms of use regarding this storage of the data submitted throught this form.',
  }
  return <WrapperContactFormWrightstoneA dynamicProps={dynamicProps} />
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

const WrapperContactFormWrightstoneA = (props: Props) => {
  const { dynamicProps } = props
  const {
    badge,
    title,
    description,
    contactTitle,
    email,
    phone,
    linkTitle,
    facebook,
    twitter,
    youtube,
    instagram,
    linkedIn,
  } = dynamicProps

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <section className="py-16 mb-8">
      <SectionContainer>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <div className="mb-6 flex-col space-y-2">
              <div className="text-sm flex items-center space-x-2">
                <HorizontalLine className="bg-[#04383F]" />
                <span>{badge}</span>
              </div>
              <h3 className="text-1xl font-medium">{title}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
            <div className="mb-6 flex-col space-y-2">
              <h4 className="text-sm font-medium">{contactTitle}</h4>
              <p className="flex space-x-2 text-gray-500 underline">
                <MailIcon />
                <span>{email}</span>
              </p>
              <p className="flex space-x-2 text-gray-500">
                <PhoneIcon />
                <span>{phone}</span>
              </p>
            </div>
            <div className="flex-col space-y-2">
              <h4 className="text-sm font-medium">{linkTitle}</h4>
              <div className="flex space-x-2">
                <Link href={facebook} target="_blank">
                  <Facebook />
                </Link>
                <Link href={twitter} target="_blank">
                  <Twitter />
                </Link>
                <Link href={youtube} target="_blank">
                  <YouTube />
                </Link>
                <Link href={instagram} target="_blank">
                  <Instagram />
                </Link>
                <Link href={linkedIn} target="_blank">
                  <LinkedIn />
                </Link>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <span>Subscription!</span>{' '}
                          <span className="text-gray-500">
                            Subscribe to our newsletter and receive a selection of cool articles every weeks
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full bg-[#04383F] rounded-sm focus:bg-[#04383F]" type="submit">
                    Submit
                  </Button>
                </form>
              </Form>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="rounded-none border-[#04383F]" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <h4>How are you?</h4>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
