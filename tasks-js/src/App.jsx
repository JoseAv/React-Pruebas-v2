import './App.css'
import { useFiltersProducts } from './FiltersTask/Filters'
import {Main} from './Components/Main'
import {Header} from './Components/Header'


function App() {
const {products,handleDeleteCompleted,handleDelete,CompleteInput,handleCompleteAll,ShowAllProducts,ShowPendingProducts,ShowCompletedProducts,addTask} = useFiltersProducts()


  return (
    <>
    <Header addTask={addTask}/>
      <Main 
      products={products} 
      handleDelete={handleDelete} 
      CompleteInput={CompleteInput} 
      handleCompleteAll={handleCompleteAll} 
      ShowAllProducts={ShowAllProducts}
      ShowPendingProducts={ShowPendingProducts}
      ShowCompletedProducts={ShowCompletedProducts}
      handleDeleteCompleted={handleDeleteCompleted}
      />
    </>
  )
}

export default App
