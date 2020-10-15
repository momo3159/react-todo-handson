import React, {FC} from "react";
import "./Title.css"
type Props = {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}
const Title: FC<Props> = (props) => (
    <span className={props.tag}> {props.children} </span>
)

export default Title