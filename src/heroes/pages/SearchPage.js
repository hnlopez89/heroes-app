import {useState, useEffect} from "react"
import queryString from "query-string"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard, HeroList, SearchHero } from "../components"
import { getHeroesByName } from "../helpers"

export const SearchPage = () => {
    const [tag, setTag] = useState('')
    const {searchText, onInputChange} = useForm({
        searchText: ''
    })

    const navigate = useNavigate()
    const {search} = useLocation()
    const {q = ''} = queryString.parse(search)
    console.log(q);

    let heroesFiltered = getHeroesByName(q)
    const onSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`?q=${searchText}`)
        console.log(heroesFiltered);
    }

    return(
        <>
            <h1>Búsqueda</h1>
            <form onSubmit={onSearchSubmit}>

            <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                value={searchText}
                onChange={onInputChange}
                />
            </form>
            <div className="alert alert-primary">
                Search a hero
            </div>
            <div className="alert alert-danger">
                No heroes with <strong>{q}</strong>
            </div>
            
                {heroesFiltered.map((hero)=> {
                    console.log(hero)
                return <HeroCard key={hero} {...hero} />
                })}

        </>

    )
}