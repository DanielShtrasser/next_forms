import postgres from "postgres";

import { AddForm } from "@/app/add-form";
import { DeleteForm } from "@/app/delete-form";

let sql = postgres("postgres://default:RSDtGaCez67U@ep-crimson-sunset-a42qb19p-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require", {
  ssl: "allow",
});

export default async function Home() {
  let todos = await sql`SELECT * FROM todos`;

  return (
    <main>
      <h1 className="sr-only">Todos</h1>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <DeleteForm id={todo.id} todo={todo.text} />
          </li>
        ))}
      </ul>
    </main>
  );
}
