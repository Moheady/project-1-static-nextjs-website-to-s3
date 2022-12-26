import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thanks for subscribing</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter - Mohammed Hussain."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing - Mohammed Hussain."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
