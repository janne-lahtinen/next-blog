import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/janne_lahtinen.jpg'
          alt='An image showing Janne'
          width={300}
          height={300}
        />
      </div>
      <h1>Hello from the next(.js) dimension</h1>
      <p>
        This is a blog site build with next.js.
      </p>
    </section>
  )
}

export default Hero