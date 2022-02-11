import { Link } from 'react-router-dom'
import { UserProfile } from './UserProfile'


export const Header = () => {
    return (
        <header >
        <Link to={`/`}><h1 className='header__grid2'>NC News</h1></Link>
        <UserProfile />
        </header>
    )
}