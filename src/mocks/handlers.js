import { rest } from 'msw';
import db from './db';

const API_URL = `${import.meta.env.VITE_API_URL}/api`;

export const handlers = [
    rest.get(`${API_URL}/todos`, (req, res, ctx) => {
        const todos = db.todo.getAll();
        return res(ctx.json({ data: todos }));
    }),

    rest.post(`${API_URL}/todos`, async (req, res, ctx) => {
        const { text } = await req.json();
        const newTodo = { complete: false, id: String(Date.now()), text };

        db.todo.create(newTodo);

        return res(ctx.json({ data: newTodo }));
    }),

    rest.get(`${API_URL}/todos/:id`, (req, res, ctx) => {
        const todo = db.todo.findFirst({
            where: { id: { equals: req.params.id } },
        });

        if (!todo) {
            return res(ctx.status(404), ctx.json({ error: `Todo: ${req.params.id} Not found` }));
        }

        return res(ctx.json({ data: todo }));
    }),

    rest.patch(`${API_URL}/todos/toggle-complete/:id`, async (req, res, ctx) => {
        const todo = db.todo.update({
            where: {
                id: { equals: req.params.id },
            },
            data: {
                complete: (prevComplete) => !prevComplete
            },
        });

        return res(ctx.json({ data: todo }));
    }),

    rest.delete(`${API_URL}/todos/:id`, (req, res, ctx) => {
        const todo = db.todo.delete({
            where: { id: { equals: req.params.id } },
        });

        if (!todo) {
            return res(ctx.status(404), ctx.json({ error: `Todo: ${req.params.id} Not found` }));
        }

        return res(ctx.json({ data: todo }));
    }),
];
