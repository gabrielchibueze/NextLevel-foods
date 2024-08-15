import Image from "next/image";
import burger from "@/assets/burger.jpg"
import curry from "@/assets/curry.jpg"
import dumplings from "@/assets/dumplings.jpg"
import macncheese from "@/assets/macncheese.jpg"
import pizza from "@/assets/pizza.jpg"
import schnitzel from "@/assets/schnitzel.jpg"
import tomatosalad from "@/assets/tomato-salad.jpg"
import { useEffect, useState } from "react";
import classes from "@/app/components/imageSlideShow.module.css"

export default function ImageSlideShow() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setTimeout(() => {
            setCurrentIndex(prevIndex => currentIndex < foodImages.length - 1 ? prevIndex + 1 : 0)
        }, 5000)
        return () => clearInterval(interval)
    }, [currentIndex])

    const foodImages = [
        {
            image: burger,
            alt: "burger image",
        },
        {
            image: curry,
            alt: "curry image",
        },
        {
            image: dumplings,
            alt: "dumplings image",
        },
        {
            image: macncheese,
            alt: "macncheese image",
        },
        {
            image: pizza,
            alt: "pizza image",
        },
        {
            image: schnitzel,
            alt: "schnitzel image",
        },
        {
            image: tomatosalad,
            alt: "tomatosalad image",
        }
    ]
    return (<div className={classes.slideimages}>
        {foodImages.map((image, index) => {
            return <div className={index === currentIndex ? classes.active : classes["inactive-slide"]}>
                <Image src={image.image} alt={image.alt} height="300px" />
            </div>
        })}
    </div>)
}