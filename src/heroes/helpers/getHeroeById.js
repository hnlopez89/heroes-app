import {heroes} from '../data/heroes' 
export const getHeroeById = (heroId) => {
    let heroe;
    const validHeroes = heroes.map((heroe)=> heroe.id)
    validHeroes.includes(heroId) 
        ? heroe = heroes.find(x=>x.id === heroId)
        : heroe = false
    return heroe
}