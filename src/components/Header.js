import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className='header'>
        <Link to={`/`}><h1>NC News</h1></Link>
        </header>
    )
}