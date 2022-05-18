import { useState } from 'react'

import Tabs from './Tabs'
import Projects from './Projects'

import { 
    getGenres, 
    getProjects, 
    filterProjectsByGenre 
} from '../lib/api'


export default function ProjectByGenre () {
    // intialize state
    // const [state, setState] = useState(intialValue)
    const [activeGenre, setActiveGenre] = useState("Journalism") ;

    const genres = getGenres();
    const projectsList = getProjects();

    return <section>
        <h1>Projects by Genre</h1>
        <Tabs 
            items={genres}
            activeItem={activeGenre} 
            clickHandler={setActiveGenre}
        />
        <Projects items={filterProjectsByGenre(projectsList, activeGenre)} />
     </section>
}