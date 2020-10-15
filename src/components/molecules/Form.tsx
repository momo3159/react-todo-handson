import React, {FC, SyntheticEvent, useState} from "react";
import TextBox from "../atoms/TextBox/TextBox";
import Button from "../atoms/Button/Button";

type Props = {
    onClick?: (e) => void;
    onChange?: (v: string) => void;
}

const TodoForm: FC<Props> = (props) => {
    return (
        <form>
            <TextBox onChange={props.onChange} />
            <Button value="登録" onClick={props.onClick}/>
        </form>
    )
}

export default TodoForm