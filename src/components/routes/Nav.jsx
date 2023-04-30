import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
           <nav>
    <Link to='/'>Home</Link>
    <Link to='/home'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/user'>User</Link>
   </nav>
    </div>
  )
}
