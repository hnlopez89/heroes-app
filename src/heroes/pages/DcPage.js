import { HeroList } from "../components/HeroList"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";


export const DCPage = () => {
    const myList = getHeroesByPublisher('DC Comics')
    return(
        <>
        <div>
            DCPage
        </div>
        <HeroList list={myList} />
        </>
    )
}