"use client";
import { useEffect, useState } from "react";
import { addTodo } from "./actions/addTodo";
import { delTodo } from "./actions/delTodo";
import { getTodos } from "./actions/getTodos";

export default function Home() {
  const [todos, setTodos] = useState<any[]>([]);

  //function to get all todos
  async function get() {
    setTodos([await getTodos()]);
  }

   //initial get query
   useEffect(() => {
    get();
  }, []);

  //function to submit form and update todo list
  const handleAdd = (formData: any) => {
    addTodo(formData);
    get();
  };
 
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <h1 className="font-bold text-3xl">Todo List</h1>
      <div className="flex flex-col gap-4">
        <form
          action={(formData) => {
            handleAdd(formData);
          }}
        >
          <input
            type="text"
            name="todo_name"
            id="todo_name"
            // value={todoName}
            // onChange={(e) => setTodoName(e.target.value)}
            placeholder="Enter todo name"
            className="w-full text-black px-4 py-2 mb-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            // onClick={() => get()}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Add Todo
          </button>
        </form>
        <div className="flex flex-col justify-center items-center">
          <ul className="flex flex-col gap-4">
            {todos[0]?.map((todo: any) => (
              <div key={todo.id}  className="grid grid-cols-2 gap-2">
                <li className="bg-blue-500 p-2 rounded-sm text-center" >{todo.name}</li>
                <button onClick={() => {
                  delTodo(todo.id)
                  get()
                }}  className="bg-white text-black rounded-sm">Delete</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
