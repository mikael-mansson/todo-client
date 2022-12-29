const TodoItem = ({ handleRemoveItem, handleToggleCheck, item: { complete, id, text } }) => (
    <div className="todo-item py-1">
        <label className="label cursor-pointer">
            <input type="checkbox" checked={complete} className="checkbox" onChange={() => handleToggleCheck(id)}/>
            <span className="label-text text-base grow mx-4">{text}</span>
            <button className="btn btn-xs btn-circle" onClick={() => handleRemoveItem(id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </label>
    </div>
);

export default TodoItem;
