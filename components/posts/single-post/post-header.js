import Image from "next/image"
import classes from './post-header.module.css'

function PostHeader({ image, title }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} /> 
      {/* fill style={{ objectFit: "cover" }} */}
    </header>
  )
}

export default PostHeader