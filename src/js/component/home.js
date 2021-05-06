import React from "react";
import ToDoList from "./todolist.jsx";

export function Home() {
	return (
		<div className="container">
			<h1>To Do</h1>
			<ToDoList />
		</div>
	);
}
