import { CardA } from '@/components/shared/harrison/card-a'

type Props = {
  dynamicProps: {
    title: string
    content: string
    image: string
    imageOnRight: boolean
  }
}

export const FeaturesHarrisonC = () => {
  const dynamicProps = {
    title: 'Our Vision',
    content:
      "We are a community of believers who are passionate about the gospel of Jesus Christ. We are committed to living out our faith in a way that is relevant to our culture and that is rooted in the truth of God's Word. We believe that the gospel has the power to transform lives and to bring hope to a world that is broken and hurting. Our vision is to see the gospel proclaimed and lived out in our community and beyond, so that people from every nation, tribe, and tongue may come to know and worship Jesus Christ as Lord and Savior.",
    image: '/harrison/our-vision.png',
    imageOnRight: false,
  }

  return <_FeaturesHarrisonB dynamicProps={dynamicProps} />
}
export const _FeaturesHarrisonB = (props: Props) => {
  const { dynamicProps } = props
  return <CardA {...dynamicProps} />
}
