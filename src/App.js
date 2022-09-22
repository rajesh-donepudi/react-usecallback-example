import logo from "./logo.svg";
import "./App.css";
import { useCallback, useMemo, useReducer, useState } from "react";
import TODO from "./todo";
import WorkItem from "./work-item";

function App() {

  /** States */
  const [todos, addTodo] = useReducer((currentState, newState) => {
    return [...currentState, newState];
  }, []);

  const [workItems, addWorkItem] = useReducer((currentState, newState) => {
    return [...currentState, newState];
  }, []);
  
  const [count, setCount] = useState(0);

  /** Handlers */
  let handleAddTodoItem = useCallback(() => {
    let name = (Math.random() + 1).toString(36).substring(7);
    addTodo({ name: name });
  }, [todos]);

  let handleAddWorkItem = useCallback(() => {
    let name = (Math.random() + 1).toString(36).substring(7);
    addWorkItem({ name: name });
  }, [workItems]);

  let handleCount = () => {
    setCount(() => Math.random(1, 100));
  };

  return (
    <div className="App">
      <hr />
      <h1>{count}</h1>
      <button onClick={handleCount}>Generate</button>
      <TODO todos={todos} addHandler={handleAddTodoItem} />
      <WorkItem workitems={workItems} addHandler={handleAddWorkItem} />
    </div>
  );
}

export default App;
