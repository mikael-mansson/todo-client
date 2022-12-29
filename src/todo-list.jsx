import { useEffect, useState } from 'react';
import TodoForm from './todo-form';
import TodoItem from './todo-item';

const API_URL = `${import.meta.env.VITE_API_URL}/api`;

const TodoList = () => {
    const [items, setItems] = useState([]);

    const addItem = async (text) => {
        const response = await fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });
        const json = await response.json();
        const item = json.data;
        if (response.ok) {
            setItems((oldItems) => [...oldItems, item]);
        }
    };

    const removeItem = async (id) => {
        const response = await fetch(`${API_URL}/todos/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            setItems((oldItems) => oldItems.filter((item) => item.id !== id));
        }
    };

    const toggleCheck = async (id) => {
        const response = await fetch(`${API_URL}/todos/toggle-complete/${id}`, {
            method: 'PATCH',
        });
        const json = await response.json();
        const updatedItem = json.data;
        if (response.ok) {
            setItems((oldItems) =>
                oldItems.map((item) => {
                    if (id !== item.id) {
                        return item;
                    }

                    return updatedItem;
                })
            );
        }
    };

    useEffect(() => {
        fetch(`${API_URL}/todos`)
            .then((data) => data.json())
            .then((json) => setItems(json.data));
    }, []);

    return (
        <div className="todo-list">
            <h2 className="card-title">Todo list</h2>
            <p>Enter a new todo item below</p>
            <div className="card-actions mt-6">
                <TodoForm handleAddItem={addItem} />
            </div>
            <div className="mt-4">
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <TodoItem item={item} handleRemoveItem={removeItem} handleToggleCheck={toggleCheck} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
