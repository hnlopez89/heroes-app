import {heroes} from '../data/heroes'

export const getHeroesByName = (name) => {
    const heroesFiltered = heroes.filter(heroe => heroe.superhero.includes(name))
    return heroesFiltered
}