import { Navigate } from "react-router-dom"

export const HeroDetail = ({heroe, heroeToShow}) => {
    const {id,superhero,publisher,characters, alter_ego, first_appearance} = heroeToShow
    const routeX = `/heroes/${ id }.jpg`
    return (<>
        <div className="row mt-5">

        <div className="col-4">
            <img src={routeX} />

        </div>
        </div>
        <div className="col-8">

            <h1>{superhero}</h1>
            <h2>Ficha técnica:</h2>
            <ul>
            <li>Nombre: {superhero}</li>
            <li>Editorial: {publisher}</li>
            <li>Primera aparición: {first_appearance}</li>
            <li>Actores: {characters}</li>
            <li>Alter ego: {alter_ego}</li>
            </ul>
        </div>
        </>
    )
}