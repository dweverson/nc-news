import { Link } from 'react-router-dom'
import { UserProfile } from './UserProfile'


export const Header = () => {
    return (
        <header className='header'>
        <Link to={`/`}><h1>NC News</h1></Link>
        <UserProfile />
        </header>
    )
}