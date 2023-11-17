import { Fragment } from "react"
import Head from "next/head"
import Hero from "@/components/home-page/hero"
import FeaturedPosts from "@/components/home-page/featured-posts"
import { getFeaturedPosts } from "@/lib/posts-util"

function HomePage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Janne&lsquo;s Next Blog</title>
        <meta 
          name="description"
          content="Next.js related blog"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    }
  }
}

export default HomePage