import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo,removeTodo } from "../features/Todo/todoSlice";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { ToastContainer,toast } from "react-toastify";

function Todo() {

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  

  const handleTodoSubmit = (e) => {
       
           e.preventDefault();
            if (input.length > 0) {
           dispatch(addTodo(input));
            setInput("");

    } else {
      toast("Enter the Activity first!");
    }
  };



  return (
    <>
      <h1 className="text-center ">To do list</h1>
      <div className="container d-flex justify-content-center">
        <form className="row g-3" onSubmit={handleTodoSubmit}>
          <div className="col-auto">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control"
              placeholder="To do list"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Add to do
            </button>
          </div>
        </form>
        <div />
      </div>
      <div className="text-center h-50">
        <p><b>Todo Lists</b></p>
        {todos.length === 0 ? (
          <div className="text-center mt-3">
            <p>No activities to show.</p>
          </div>
        ) : (
          todos.map((todo, index) => (
            <div
              key={todo.id}
              className="col g-3 w-25 m-auto p-3 justify-content-between my-2 d-flex "
              style={{ backgroundColor: "indigo", color: "white" }}
            >
              {todo.text}
              <div className=""><i class="bi bi-x-square"></i></div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Todo;
