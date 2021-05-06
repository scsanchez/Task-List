import React, { Fragment, useState } from "react";
import NewTask from "./task.jsx";

function ToDoList() {
	const [textTask, setTextTask] = useState({ task: "" });
	const [taskList, setTaskList] = useState([]);

	const sendTextTask = event => {
		event.preventDefault();
		setTaskList([...taskList, textTask]);
		setTextTask({ task: "" });
	};

	let todoList = taskList.map((value, index) => (
		<NewTask inputValue={value.task} key={index.toString()} />
	));

	return (
		<Fragment>
			<input
				type="text"
				placeholder="Add new task here!"
				onKeyPress={event => {
					if (event.key == "Enter") {
						console.log(event.target.value);
					}
				}}
			/>
		</Fragment>
	);
}

export default ToDoList;
