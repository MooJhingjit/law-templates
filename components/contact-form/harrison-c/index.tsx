'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import messages from './messages.json'

type Props = {
  dynamicProps: {
    title: string
    description: string
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
  message: z.string().nullable().optional(),
})

export const ContactFormHarrisonC = () => {
  const dynamicProps = {
    title: 'Contact Us',
    description: 'We are here for you! How can we help?',
    actionLabel: 'Book Appointment',
  }
  return <ContactFormHarrisonCChild dynamicProps={dynamicProps} />
}

const ContactFormHarrisonCChild = (props: Props) => {
  const { dynamicProps } = props
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
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
    <section className="mb-16 lg:-translate-y-48">
      <div className="bg-white max-w-2xl shadow p-8 mx-auto">
        <div className="text-center">
          <h1 className="text-bold text-4xl font-semibold leading-relaxed">{dynamicProps.title}</h1>
          <p className="text-gray-500">{dynamicProps.description}</p>
        </div>
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
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>{_trans.message}</FormLabel>
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
    </section>
  )
}
