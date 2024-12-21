'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { toast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import messages from './messages.json'
import { SectionContainer } from '@/components/shared/harrison/section-container'

type Props = {
  dynamicProps: {
    title: string
    description: string
    image: string
    formImage: string
    formTitle: string
    actionLabel: string
  }
}
const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 characters.',
  }),
})

export const ContactFormHarrisonB = () => {
  const dynamicProps = {
    title: 'We Have Branches All Over The World',
    description:
      'We have branches all over the world. Our team of experts are always ready to help you. Contact us today to get started.We have branches all over the world. Our team of experts are always ready to help you. Contact us today to get started.  ',
    image: '/harrison/world-map.png',
    formImage: '/harrison/man-posing-studio.png',
    formTitle: 'Request A Free Consultation',
    actionLabel: 'Book Appointment',
  }
  return <ContactFormHarrisonBChild dynamicProps={dynamicProps} />
}

const ContactFormHarrisonBChild = (props: Props) => {
  const { dynamicProps } = props
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  const _trans = messages.en
  return (
    <section className="mb-80">
      <div className="bg-[rgb(18,39,58)]">
        <SectionContainer>
          <div className="grid grid-cols-1  lg:grid-cols-3 lg:px-28 pt-24 gap-6">
            <div className="text-white col-span-2 lg:mr-36 ">
              <h2 className="text-5xl font-semibold leading-relaxed">{dynamicProps.title}</h2>
              <p className="text-sm text-gray-500 mt-4">{dynamicProps.description}</p>
            </div>
            <div className="">
              <Image width={364} height={563} className="object-cover" src={dynamicProps.image} alt="World Map" />{' '}
            </div>
          </div>

          <div className="block md:flex justify-center translate-y-52">
            <Image
              width={364}
              height={563}
              className=" object-cover"
              src={dynamicProps.formImage}
              alt={'Placeholder'}
            />

            <div className="p-4 lg:p-8 bg-white">
              <h2 className="text-bold text-5xl font-semibold leading-relaxed">{dynamicProps.formTitle}</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 w-full space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{_trans.name}</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} value={field.value ?? ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>{_trans.email}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} value={field.value ?? ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>{_trans.phone}</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} value={field.value ?? ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full rounded">{dynamicProps.actionLabel}</Button>
                </form>
              </Form>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  )
}
