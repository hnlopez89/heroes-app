import { HeroList } from "../components/index"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";


export const DCPage = () => {
    const myList = getHeroesByPublisher('DC Comics')
    return(
        <>
        <div>
            DCPage
        </div>
        <HeroList publisher={'DC Comics'} />
        </>
    )
}