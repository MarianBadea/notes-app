import {CgDarkMode} from 'react-icons/cg'

function NavBar({ handleDarkMode }) {
    return (
        <div className="navbar">
            <h1 className="navbar__title">Notes App</h1>
            <CgDarkMode 
                className="navbar__btn"
                onClick={() => handleDarkMode(
                    (previousDarkMode) => !previousDarkMode)
                    }
            />
        </div>
    )
}

export default NavBar;
