import { useState } from 'react';

function NewCard({ handleAddCard }) {
    const [ title, setTitle] = useState('');
    const [ description, setDescription ] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleSave = () => {
        if(title.trim().length > 0 && description.trim().length > 0) {
            handleAddCard(title, description);
            setTitle('');
            setDescription('');
        }
    }

    return (
        <div className="new-card">
        <h3 className="new-card__add">Add a card</h3>
            <form  onClick={ handleSave }>
                <input 
                    className="new-card__title"
                    value={ title }
                    onChange={ handleTitle }
                    placeholder="Title..."
                ></input>
                <textarea 
                    className="new-card__description"
                    rows="3"
                    value={ description }
                    onChange={ handleDescription }
                    placeholder="Description..."
                ></textarea>
                <div className="new-card__buttons">
                    <button className="new-card__save">Save</button>
                </div>
            </form>
        </div>
    )
}

export default NewCard;