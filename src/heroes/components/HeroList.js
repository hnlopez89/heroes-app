
export const HeroList = ({list}) => {

    console.log(list);
    let routeX = '../../assets/heroes/'
    return(
    <>
            <ul  >
                {list.map((hero)=> {
                    return(
                    <li key={hero.id}>
                        <p>
                            Nombre: {hero.superhero}
                        </p>
                        <img src={`/assets/heroes/`+hero.id+`.jpg`}
                        alt={`/src/assets/heroes/`+hero.id+`.jpg`} />
                    </li>
                )})}                
            </ul>
        </>
        
    )
}