export default function WorkItem({ workitems, addHandler }) {
  console.log("This is work item component");
  return (
    <>
      {workitems.map((workitem) => (
        <li key={workitem.name}>workitem: {workitem.name}</li>
      ))}
      <button onClick={addHandler}>Add work item</button>
    </>
  );
}
