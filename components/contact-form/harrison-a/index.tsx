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
    image: string
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

export const ContactFormHarrisonA = () => {
  const dynamicProps = {
    image: '/harrison/man-posing-studio.png',
    title: 'Request A Free Consultation',
    actionLabel: 'Book Appointment',
  }
  return <ContactFormHarrisonAChild dynamicProps={dynamicProps} />
}

const ContactFormHarrisonAChild = (props: Props) => {
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
    <section className="mb-24">
      <div className="bg-[rgb(18,39,58)] pt-6">
        <SectionContainer>
          <div className="block md:flex justify-center translate-y-16">
            <Image
              width={364}
              height={563}
              className=" object-cover"
              src={dynamicProps.image}
              alt={dynamicProps.title}
            />

            <div className="p-4 lg:p-8 bg-white ">
              <h2 className="text-bold text-5xl font-semibold leading-relaxed">{dynamicProps.title}</h2>
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
