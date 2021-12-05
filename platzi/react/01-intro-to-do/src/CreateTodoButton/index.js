import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
    const { modalOpen, setModalOpen } = useContext(TodoContext);

    const onClickButton = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <button 
            className={`CreateTodoButton${modalOpen ? ' CreateTodoButton--opened' : ''}`}
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton };