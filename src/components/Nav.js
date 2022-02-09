import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { getTopics } from '../utils/api';
import { Link } from 'react-router-dom';

export const Nav = () => {

    const [ topics, setTopics ] = useState([]);

    useEffect(() => {
        getTopics().then((topicsFromApi) => {
            setTopics(topicsFromApi)
        })
    }, [])

return (

<nav className='nav'>
<Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
        {topics.map((topic) => {           
            return (
                // href={'/articles?topic=' + topic.slug} <Dropdown.Item as={Link} to="/me">
                <Dropdown.Item key={topic.slug} as={Link} to={`/articles/topic/${topic.slug}`} active>
                     {topic.slug} 
                </Dropdown.Item>

            )
        })}
    </Dropdown.Menu>
  </Dropdown>
</nav>

)
}