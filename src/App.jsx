import React from 'react'; //why isn't 'import {useEffect,useState} from 'react'' here?

const App = () => {
    const [loadFilms, setLoadFilms] = React.useState(false) //state value starts at false
    const [films, setFilms] = React.useState([])

    const handleLoadFilms = () => setLoadFilms(true); //conditional render here?

    React.useEffect(() => {
        (async () => {
            const response = await fetch("https://ghibliapi.herokuapp.com/films")
            const data = await response.json(); //response can be shortened to res
            setFilms(data);
        })();
    }, [loadFilms]);

    if (loadFilms) {
        return (
            <>
                <h1>Studio Ghibli Films</h1>

                {films.map(film => (         //.map
                    <h4 key={film.id}>{film.title}: {film.description}</h4>  //key = prop. film.id, film.title fetches unique id an title
                ))}        
            </>
        )
    } else {


        return (
            <>
                <button onClick={handleLoadFilms}>Load Films</button> {/* event triggers conditional render*/}
            </>
        );
    }

};

export default App;