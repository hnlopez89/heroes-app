import { Link } from "react-router-dom";

export const HeroCard = ({id,superhero,publisher, alter_ego, first_appeareance, characters}) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`
    const heroImageUrl2 = "/assets/heroes/dc-batman.jpg"
    return(
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <p>Nombre: {superhero}</p>
                    <div className="col-4">
                        <img src={heroImageUrl2} className="card-img" alt={heroImageUrl}/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) && (<p>{characters}</p>)
                            }
                            <p className="card-text">{first_appeareance}</p>
                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}