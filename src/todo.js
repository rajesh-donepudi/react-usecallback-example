export default function TODO({ todos, addHandler }) {
  console.log("This is todo component");
  return (
    <>
      {todos.map((todo) => (
        <li key={todo.name}>todo: {todo.name}</li>
      ))}
      <button onClick={addHandler}>Add Todo Item</button>
    </>
  );
}
