import React, {FC} from "react";
import TodoItem from "./TodoItem";

const TodoList: FC = (props) => {
    const data = [{task: "hoge"}, {task: "hoge"}, {task: "hoge"}];
    return (
        <ul>
            {data.map(item => <li><TodoItem task={item.task} key={item.task}/></li>)}
        </ul>
    )
}

export default TodoList