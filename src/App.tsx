import  {ChangeEvent, FC, useState} from "react"
import './App.css'

const App:FC = () => {
  const [task, setTask] = useState<string>("")
  const [date, setDate] = useState<string>();
  
const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
  setTask(e.target.value)
    setDate(e.target.value);
}

console.log(task, date)
const handleAdd =()=>{

}
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
    </>
  );
}

export default App
