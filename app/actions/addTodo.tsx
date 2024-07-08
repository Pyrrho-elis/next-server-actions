'use server'

import { sql } from "@vercel/postgres";


export async function addTodo(formData: any) {
    const name = formData.get('todo_name');
    try {
        if (!name) throw new Error('Insert todo name')
        await sql`INSERT INTO todos(name) VALUES(${name})`
    } catch (error) {
        console.error(error);
    }
}