import { Fragment } from 'react'
import Head from 'next/head'
import { getAllPosts } from '@/lib/posts-util'
import AllPosts from '@/components/posts/all-posts'

function AllPostsPage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta name='description' content='A list of all programming related posts.' />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    }
  }
}

export default AllPostsPage