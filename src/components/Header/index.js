import './index.css'

const Header = () => (
    <nav className='nav-header'>
        <h1 className='nav-heading'>Movie DB</h1>
        <ul className='nav-menu'>
            <li className='nav-item'>Popular</li>
            <li className='nav-item'>Top Rated</li>
            <li className='nav-item'>Upcoming</li>
            <li className='search-bar-container'>
                <input type='search' placeholder='Search' className='search-bar' />
                <button type='button' className='search-button'>
                    Search
                </button>
            </li>
        </ul>
    </nav>
)

export default Header