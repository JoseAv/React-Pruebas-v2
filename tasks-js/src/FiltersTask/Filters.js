
import {Filters} from '../constantes/dataFilters'
import { useState } from 'react'
export function useFiltersProducts({products}) {

    
    const [filTask,setFilTask] = useState(products)
    const [filters , setFilters] = useState(Filters.All)
    

   function ShowAllProducts(){
    setFilters(Filters.All)
    const newtask = [...products]
    setFilTask(newtask)
   }

   function ShowPendingProducts(){
    const newTask = products.filter(e=> e.completed === false)
    setFilters(Filters.Pending)
    setFilTask(newTask)
   }

   function ShowCompletedProducts(){
    const newTask = products.filter(e=> e.completed === true)
    setFilters(Filters.Completed)
    setFilTask(newTask)
   }




    return {filTask,ShowAllProducts,ShowPendingProducts,ShowCompletedProducts,filters}
}