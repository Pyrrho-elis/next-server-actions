'use server'

import { sql } from "@vercel/postgres";


export async function delTodo(id: any) {
    try {
        await sql`DELETE FROM todos WHERE id = ${id}`
    } catch (error) {
        console.error(error);
    }
}