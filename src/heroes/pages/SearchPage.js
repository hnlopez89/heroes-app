import {useState, useEffect} from "react"
import { useForm } from "../../hooks/useForm"
import { SearchHero } from "../components"

export const SearchPage = () => {
    const [tag, setTag] = useState('')
    const {searchText, onInputChange} = useForm({
        searchText: ''
    })

    const onSearchSubmit = (event) => {
        event.preventDefault();
        console.log({searchText});
    }

    const onAddTag = (newTag) => {
        setTag(newTag)
    }
    return(
        <>
            <h1>Búsqueda</h1>
            <form onSubmit={onSearchSubmit}>

            <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchtext"
                value={searchText}
                onChange={onInputChange}
                />
            </form>
            <SearchHero  />
        </>

    )
}