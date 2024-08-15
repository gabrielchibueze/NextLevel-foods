import Link from "next/link";

export default function MealsPage() {
    return (<main>
        <p>Meal 1 <Link href="/meals/meal1">View meal</Link> </p>
        <p>Meal 2 <Link href="/meals/meal2">View meal</Link> </p>
        <p>Meal 3 <Link href="/meals/meal3">View meal</Link> </p>
        <p>Meal 4 <Link href="/meals/meal4">View meal</Link> </p>

    </main>)
}