import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMutation, useQuery } from 'convex/react'
import { api } from "../convex/_generated/api";
import { Id } from '../convex/_generated/dataModel'


function App() {

  const task = useQuery(api.datas.get)
  const create = useMutation(api.datas.create)
  const update = useMutation(api.datas.update)
  const [inputvalue, setInputValue] = useState('')

  const onCreate = () => {
    create({ text: 'ilklerin ilki' })
  }

  const onChange = (value: string) => {
    setInputValue(value)
    const task1 = task[1]
    // update({
    //   id: task1._id,
    //   text: value
    // })

  }

  const updateTask = (id:Id<'tasks'>) => {
    update({
      id: id,
      text: inputvalue
    })
    //console.log(task[1])

  }



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onCreate}>
          satır oluştur
        </button>

        <ul>
          {task?.map(task => (

            <li style={{ display: "flex", width: "13rem", justifyContent: 'space-between' }} key={task._id}>
              <p>{task?.text}</p>
              <button onClick={()=>updateTask(task?._id)}>Duzenle</button>
            </li>

          ))}
        </ul>
        <input type="text" onChange={e => onChange(e.target.value)} />

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
