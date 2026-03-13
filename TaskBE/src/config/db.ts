import pg from "pg";


export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "task",
    password: "4688",
    port: 5432
});