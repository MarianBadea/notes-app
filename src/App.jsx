
import { useState, useEffect } from 'react';
import NotesGrid from './components/NotesGrid';
import { nanoid } from 'nanoid';
import './App.scss';
import SearchCard from './components/SearchCard';
import NavBar from './components/NavBar';

function App() {
  const [ notes, setNotes ] = useState([
      { id: nanoid(),  
        title:"My first Note", 
        description: "Yes, Yuhuu, my first note", 
        date: "15/10/2021"   
      },
      { id: nanoid(),  
        title:"Go to the gym!", 
        description: "Today I have in plan to go to the gym", 
        date: "15/10/2021"   
      },
      { id: nanoid(),  
        title:"Make diner today", 
        description: "I need to make a shopping list.", 
        date: "15/10/2021"   
      }
    ]
  );

  const [ searchTitle, setSearchTitle] = useState('');
  const [ darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app')
      )

      if(setNotes){
        setNotes(savedNotes);
      }
    
  }, [])

  useEffect(() => {
      localStorage.setItem(
        'react-notes-app', 
        JSON.stringify(notes))
  }, [notes]);

  const addCard = (title, description) => {
    const date = new Date();
    const newCard = {
      id: nanoid(),
      title: title,
      description: description,
      date: date.toLocaleDateString()
    } 
    const newNotes = [newCard, ...notes];
    setNotes(newNotes);
  }

  const editCard = (id, newTitle, newDescription) => {
    setNotes(notes.map((card) => {
      if (id === card.id) {
        card.title = newTitle;
        card.description = newDescription;
      }

      return card;
    }));
  }

  const deleteCard = (id) => {
    const newNotes = notes.filter((card) => card.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
          <NavBar handleDarkMode={ setDarkMode }/>
          <SearchCard handleSearchCard={ setSearchTitle }/>
          <NotesGrid 
            notes={ notes.filter((card) => 
                  card.title.toLocaleLowerCase().includes(searchTitle)) } 
            handleAddCard={ addCard }
            handleDeleteCard={ deleteCard }
            handleEditCard={editCard}
          />
      </div>
    </div>
  );
}

export default App;
