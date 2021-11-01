import { useState } from 'react'

function Card({id, title, description, date, handleDeleteCard, handleEditCard }) {
    const [editMode, setEditMode ] = useState(false);
    const [ newTitle, setNewTitle ] = useState(title);
    const [ newDescription, setNewDescription ] = useState(description)

    const handleEdit = (edit = false) => {
        setEditMode(edit)
    }

    const handleNewTitle = (e) => {
        setNewTitle(e.target.value);
    };

    const handleNewDescription = (e) => {
        setNewDescription(e.target.value);
    };

    const handleUpdate = (id) => {
        handleEditCard(id,newTitle, newDescription);
        setEditMode(false)
    }


    return (
        <div className="card">
            <p className="card__data">{ date }</p>
            { editMode === false ?
            <div>
                <h2 className="card__title" onClick={ () => handleEdit(true) } >{ title }</h2>
                <p className="card__description" onClick={ () => handleEdit(true) }>{ description }</p>
                <div className="card__buttons">
                    <button 
                        className="card__delete" 
                        onClick={ () => handleDeleteCard(id) }
                    >Delete</button>
                </div>
            </div>

            :

            <div className="card-update"> 
                <label>Title: </label>
                <input 
                    className="card-update__title"
                    value={ newTitle }
                    onChange={ handleNewTitle }
                    placeholder="Title..."
                ></input> 
                <label>Description: </label>
                <textarea 
                    className="card-update__description"
                    rows="5"
                    value={ newDescription }
                    onChange={ handleNewDescription }
                    placeholder="Description..."
                ></textarea>
                    <div>
                        <button
                            className="card-update__save" 
                            onClick={ () => handleUpdate(id) }
                        >Update</button>
                    </div>
             </div>
            }
        </div>
    )
}

export default Card;