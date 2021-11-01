import {MdSearch} from 'react-icons/md'

function SearchCard({ handleSearchCard }) {
    return (
      <div className="search-card">
        <MdSearch className="search-card__icon" size='1.3rem'/>
        <input 
          className="search-card__input" type="text" 
          placeholder="type to search..." 
          onChange={(e) => handleSearchCard(e.target.value) }
        />
      </div>
    )
  }

  export default SearchCard;