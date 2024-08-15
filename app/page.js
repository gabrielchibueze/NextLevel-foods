"use client"
import Link from "next/link";
import classes from "@/app/page.module.css"
import ImageSlideShow from "@/app/components/imageSlideShow";
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.imageslide}>
          {/* Image slide show here */}
          <ImageSlideShow />
        </div>
        <div>
          <div className={classes.title}>
            <h1>NEXTLEVEL FOOD FOR NEXTLEVEL FOODIES</h1>
            <p>Taste & share food from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals" className={classes.exploremeal}>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>

      </main>
    </>
  );
}
