import { ChangeEvent, FC, useState } from "react";
import { todoType } from "./types/apptypes";
import "./App.css";
import Todolist from "./components/Todolist";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [taskList, setTaskList] = useState<todoType[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "task") {
      setTask(e.target.value);
    } else { e.target.name == "date"; 
      setDate(e.target.value);
    }
  };

 
// Task Ekleme Fonksiyonu
  const handleAdd = () => {
    const addTask = {task,date}
    setTaskList([...taskList, addTask]);
    setTask("")
    setDate("")

  };

  // Task Silme Fonksiyonu
 const handleDelete = (index:number):void=> {
 setTaskList(
  taskList.filter((task)=>{
 return task.index !== index;
 })
 )
};

   
  return (
    <>
      <div className="taskInput">
        <h3>Görev Ekleme </h3>
        <input
          type="text"
          placeholder="Görevi giriniz"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Tarihi giriniz"
          name="date"
          value={date}
          onChange={handleChange}
        />
        <button className="addbutton" onClick={handleAdd}>
          Yeni Görev Ekle
        </button>
      </div>
      <Todolist taskList={taskList} handleDelete={handleDelete} />
    </>
  );
};

export default App;
