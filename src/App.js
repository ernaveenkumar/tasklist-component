import './App.css';
import { HomePage } from './Pages/Home/HomePage';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TaskPage from "./Pages/Task/TaskPage";
import { useState } from 'react';

function App() {

  const [tasks, setTask] = useState([
    { id: 5271, name: 'Learn React', completed: false },
    { id: 5272, name: 'Learn Javascript', completed: true },
    { id: 5273, name: 'Submit Ethics application', completed: true },
  ]);


  return (
    <div className="container mx-auto">
      <section className="header">
        <Header />
      </section>
      <section className="addtaskform">
        <TaskPage taskList={tasks} setTask={setTask} />
      </section>
      <main className="main">
        <HomePage taskList={tasks} setTask={setTask} />
      </main>
      <section className="footer">
        <Footer />
      </section>
    </div>
  )
}

export default App;
