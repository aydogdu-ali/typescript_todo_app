import { todoType } from "../types/apptypes";

type PropsList = {
  taskList: todoType;
  handleDelete(index:number):void
};


const Todolist = ({ taskList, handleDelete }: PropsList) => {
  return (
    <div style={{ color: "black" }}>
      {taskList.map((task: todoType, index: number) => {
        return (
          <div className="taskTable" key={index}>
            <h5>{task.task}</h5>
            <h6>{task.date}</h6>
            <button onClick={() => handleDelete(task.index)}>Sil</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist