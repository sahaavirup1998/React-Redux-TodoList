
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {
  return (
    <div className='text-center m-6'>
      <h1 className='text-3xl font-bold'>React Redux Toolkit</h1>
      <AddTodos />
      <Todos />
    </div>
  )
}

export default App
