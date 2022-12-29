import { factory, primaryKey } from '@mswjs/data';

const db = factory({
    todo: {
        id: primaryKey(String),
        complete: Boolean,
        text: String,
    },
});

const todos = [
    {
        id: '1672323731687',
        complete: true,
        text: 'Buy Milk',
    },
    {
        id: '1672324098354',
        complete: false,
        text: 'Take out the trash',
    },
    {
        id: '1672324138467',
        complete: false,
        text: 'Read the alchemist',
    },
];

todos.forEach((todo) => db.todo.create(todo));

export default db;
