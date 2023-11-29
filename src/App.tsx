import React, {useState} from 'react';
import './App.css';
import Task from "./components/Task";
import AuthComponent from "./components/AuthComponent";
import TaskList from "./components/TaskList";

const App: React.FC = () =>
{
  const [page, setPage] = useState<string>('login')
 return (
     <div className={'field'}>
       <button onClick={() => setPage('login')}>Authorization</button>
       <button onClick={() => setPage('todo')}>ToDoList</button>
       {page === 'login' ? <AuthComponent/> : <TaskList/>}
     </div>
 )
  }


export default App;