import { useContext, useState } from "react"
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = useState('');
    const {setModalOpen, addTodo} = useContext(TodoContext);

    const onChangeNewTodoValue = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setModalOpen(false);
    }

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setModalOpen(false);
    }

    return (
        <form onSubmit={onAdd}>
            <label htmlFor="add-todo">Añadir nuevo To do</label>
            <textarea
                name="add-todo"
                id="add-todo"
                placeholder="Nueva tarea"
                value={newTodoValue}
                onChange={onChangeNewTodoValue}
                ></textarea>

            <div className="todo-form__actions">
                <button
                    className="todo-form__btn todo-form__btn--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className="todo-form__btn todo-form__btn--add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };