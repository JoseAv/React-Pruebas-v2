import './App.css'
import { useFiltersProducts } from './FiltersTask/Filters'
import {Main} from './Components/Main'
import {Header} from './Components/Header'
import {useEstateProducts} from './FiltersTask/controlesButtom'

function App() {
const {products,addTask,handleDelete,handleDeleteCompleted,CompleteInput,handleCompleteAll} = useEstateProducts()
const {filTask,ShowAllProducts,ShowPendingProducts,ShowCompletedProducts,filters} = useFiltersProducts({products})


  return (
    <>
    <Header addTask={addTask}/>
      <Main 
      filTask={filTask} 
      products={products}
      handleDelete={handleDelete} 
      CompleteInput={CompleteInput} 
      handleCompleteAll={handleCompleteAll} 
      ShowAllProducts={ShowAllProducts}
      ShowPendingProducts={ShowPendingProducts}
      ShowCompletedProducts={ShowCompletedProducts}
      handleDeleteCompleted={handleDeleteCompleted}
      filters = {filters}
      />
    </>
  )
}

export default App
