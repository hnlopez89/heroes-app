import {heroes} from '../data/heroes.js'

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    }
    console.log(publisher);

    return heroes.filter(heroe=>heroe.publisher === publisher)
}