import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from './schemas/user.js';

export const db = drizzle(process.env.DATABASE_URL!, {
    schema: {
        users: usersTable
    }
});
