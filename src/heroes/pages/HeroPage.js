import {useMemo} from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { HeroDetail } from "../components";
import { getHeroeById } from "../helpers";

export const HeroPage = () => {
    const {heroId} = useParams()
    const heroeToShow = useMemo(() => getHeroeById(heroId), [heroId]);
    const navigate = useNavigate()
    if(!heroeToShow) {
        return <Navigate to='/marvel' />
    }
    const onNavigateBack = () => {
        navigate(-1);
    }


    return(
        <>
            <h1>HeroPage</h1>
            <HeroDetail heroeToShow={heroeToShow}/>
            <button className="btn btn-outline-primary" onClick={onNavigateBack}>click</button>
        </>


    )
}