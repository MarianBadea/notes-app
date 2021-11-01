import Card from "./Card";
import NewCard from "./NewCard";


function NotesGrid({ notes, handleAddCard, handleDeleteCard, handleEditCard }) {

    return (
        <div className="notes-grid">
        <NewCard handleAddCard={ handleAddCard } />
            { notes.map((note) => (
                <Card 
                    id={ note.id }
                    title={ note.title }
                    description={ note.description }
                    date={ note.date }
                    key={ note.id }
                    handleDeleteCard={ handleDeleteCard }
                    handleEditCard={handleEditCard}
                />
            ))}
        </div>
    )
}

export default NotesGrid;