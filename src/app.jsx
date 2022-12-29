import TodoList from './todo-list';

const app = () => (
    <div className="App">
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-left">
                    <TodoList />
                </div>
            </div>
        </div>
    </div>
);

export default app;
