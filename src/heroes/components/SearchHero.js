import { getHeroesByName } from "../helpers"
import { useState, useEffect } from "react"

export const SearchHero = () => {
    const [hero, setHero] = useState('')
    let heroesFiltered;
    useEffect(() => {
        heroesFiltered = getHeroesByName(hero)
        console.log(heroesFiltered);
    }, [hero]);
    return (
        <>
            <input onChange={(event) => {
                return setHero(event.target.value)
            }}
            />
        </>
    )
}