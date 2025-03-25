import 'dotenv/config';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { db } from './db/index.js';

const app = new Hono();
app.use('*', cors());

app.get('/', async (c) => {
	const users = await db.query.users.findMany({
		limit: 10,
	});

	return c.json({ users });
});

serve(
	{
		fetch: app.fetch,
		port: 3000,
	},
	async (info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	}
);
