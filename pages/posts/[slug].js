import { Fragment } from "react"
import Head from "next/head"
import PostContent from "@/components/posts/single-post/post-content"
import { getPostData, getPostsFiles } from "@/lib/posts-util"

function SinglePostPage({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  )
}

export function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 600,
  }
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles()
  const slugs = postFileNames.map(filename => {
    return filename.replace(/\.md$/, '') // removes the file extension
  })


  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default SinglePostPage