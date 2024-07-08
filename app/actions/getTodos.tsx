'use server'

import { sql } from "@vercel/postgres"

export async function getTodos() {
    try {
        const {rows} = await sql`SELECT * FROM todos`
        console.log(rows);
        return rows
    } catch (error) {
        console.error(error);
    }
}