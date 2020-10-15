import React, {FC, useState} from "react";
import TextBox from "../atoms/TextBox/TextBox";
import Button from "../atoms/Button/Button";

const TodoForm: FC = () => {
    const [taskName, setTaskName] = useState("");
    const click = (e) => {
        setTaskName("")
        // storeのTODOリストに追加する処理を行う
        e.preventDefault();
    }
    
    return (
        <form>
            <TextBox value={taskName} onChange={setTaskName} />
            <Button value="登録" onClick={e => click(e)}/>
        </form>
    )
}

export default TodoForm