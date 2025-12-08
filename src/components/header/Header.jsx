import { Link } from 'react-router-dom'
import s from './header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        {/* <img src="" alt="" /> */}
        <Link to='/'>Médicos & Dentistas</Link>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/voluntario'>Seja Voluntário</Link>
      </nav>
    </header>
  )
}

export default Header