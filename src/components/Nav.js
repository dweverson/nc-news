import '../css/Navbar.css'
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { getTopics } from '../utils/api';
import { Link } from 'react-router-dom';

export const Nav = (props) => {
    const [ topics, setTopics ] = useState([]);
    const [currentTopic, setCurrentTopic] = useState('')


    useEffect(() => {
        getTopics().then((topicsFromApi) => {
            setTopics(topicsFromApi)
        })
    }, [])

   const handleTopic = (topic_click) => {
    setCurrentTopic(topic_click)
   }

   const handleSortBy = (sortTerm) => {
     props.setSortBy(sortTerm)
   }

   const handleAsc = (sortAscDesc) => {
       props.setSortAscDesc(sortAscDesc)
   }

return (

<nav className='nav'>
<Dropdown className='topic-dropdown dropdown'>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Topics
    </Dropdown.Toggle>
    
    <Dropdown.Menu variant="dark">
    <Dropdown.Item onClick={() => handleTopic('')} key='All' as={Link} to={`/`} active>
                    All               
                </Dropdown.Item>
        {topics.map((topic) => {           
            return (
                <Dropdown.Item onClick={() => handleTopic(topic.slug)} key={topic.slug} as={Link} to={`/articles/topic/${topic.slug}`} active>
                     {topic.slug} 
                </Dropdown.Item>
            )
            
        })}
    </Dropdown.Menu>
  </Dropdown>



  <Dropdown className='sortby-dropdown'>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Sort By
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
                <Dropdown.Item onClick={() => handleSortBy('created_at')} key='created_at' as={Link} to={`/articles/topic/${currentTopic}`} active>
                    Created at (default)              
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortBy('comment_count')} key='comment_count' as={Link} to={`/articles/topic/${currentTopic}`} active>
                    Comment Count               
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortBy('votes')} key='votes' as={Link} to={`/articles/topic/${currentTopic}`} active>
                    Votes               
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortBy('title')} key='title' as={Link} to={`/articles/topic/${currentTopic}`} active>
                    Title               
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortBy('author')} key='author' as={Link} to={`/articles/topic/${currentTopic}`} active>
                    Author               
                </Dropdown.Item>
                
    </Dropdown.Menu>
  </Dropdown>


  
  <Dropdown className='sort-ascend-dropdown'>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Asc/Desc
    </Dropdown.Toggle>
         <Dropdown.Menu variant="dark">
         <Dropdown.Item onClick={() => handleAsc('desc')} key='descending' as={Link} to={`/articles/topic/${currentTopic}`} active>
                    Descending (default)               
                </Dropdown.Item>
                 <Dropdown.Item onClick={() => handleAsc('asc')} key='ascending' as={Link} to={`/articles/topic/${currentTopic}`} active>
                    Ascending               
                </Dropdown.Item>

    </Dropdown.Menu>
  </Dropdown> 
</nav>

)
}