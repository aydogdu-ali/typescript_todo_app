import { todoType } from "../types/apptypes";

type PropsList= {
taskList: todoType

}


const Todolist = ({ taskList }:PropsList) => {
  return <div style={{ color: "black" }}>
    {taskList.map((task:todoType, index:number)=>{
    return (
      <div className="taskTable" key = {index}>
        <h5>{task.task}</h5>
        <h6>{task.date}</h6>
      </div>
    );
  })}</div>;
};

export default Todolist