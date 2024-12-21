import { CardA } from '@/components/shared/harrison/card-a'

type Props = {
  dynamicProps: {
    title: string
    content: string
    image: string
    imageOnRight: boolean
  }
}

export const FeaturesHarrisonB = () => {
  const dynamicProps = {
    title: 'Our Mission',
    content:
      "There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are  going to use a passage of Lorem Ipsum, you need to be sure there isn't  anything embarrassing hidden in the middle of text. All the Lorem Ipsum  generators on the Internet tend to repeat predefined chunks as  necessary, making this the first true generator on the Internet.",
    image: '/harrison/our-mission.png',
    imageOnRight: true,
  }
  return <_FeaturesHarrisonB dynamicProps={dynamicProps} />
}
export const _FeaturesHarrisonB = (props: Props) => {
  const { dynamicProps } = props
  return <CardA {...dynamicProps} />
}
