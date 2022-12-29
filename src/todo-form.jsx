import { useState } from 'react';

const TodoForm = ({ handleAddItem }) => {
    const [text, setText] = useState('');

    return (
        <div className="todo-form form-control grow">
            <form
                className="input-group"
                onSubmit={(ev) => {
                    ev.preventDefault();
                    handleAddItem(text);
                    setText('');
                }}
            >
                <input
                    type="text"
                    value={text}
                    placeholder="Item..."
                    className="input input-bordered grow"
                    onChange={(ev) => setText(ev.target.value)}
                />
                <button type="submit" className="btn">
                    Add
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
