import React, {FC} from "react";
type Props = {
    value: string
    onChange: (e) => void
}

const TextBox: FC<Props> = (props) => {
    return (
        <input type="text" value={props.value} onChange={e => props.onChange(e.target.value)}></input>
    )
}

export default TextBox;