import "./CreateTodoButton.css";

const CreateTodoButton = () => {

    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={()=>{onClickButton('Aqui va a abrir el modal')}}
        >
            +
        </button>
    )
}

export { CreateTodoButton };