import React from "react";
import PropTypes from "prop-types";

function NewTask(props) {
	return <div>{props.taskValue}</div>;
}

export default NewTask;

NewTask.propTypes = {
	taskValue: PropTypes.string,
	onMyClick: PropTypes.func
};
