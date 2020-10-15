import React, {FC} from "react";
import Title from "../atoms/Title/Title"
import "./TodoItem.css";

type Props = {
    task: string;
}

const TodoItem: FC<Props> = (props) => {
    return (
        <div className="card">
            <Title tag="h2">{props.task}</Title>
        </div>
    )
}

export default TodoItem