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

   console.log(taskList);
  return (
    <>
      <div>
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
        <button onClick={handleAdd}>Yeni Görev Ekle</button>
      </div>
      <Todolist taskList={taskList} />
    </>
  );
};

export default App;
