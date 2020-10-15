import React, { FC, SyntheticEvent } from 'react';

type Props = {
    onClick?: (e: SyntheticEvent) => void; // TODO：合ってる？
    value: string;
}

const Button: FC<Props> = (props) => (
    <button onClick={e => props.onClick(e)}> {props.value} </button>
)

export default Button;