import {productsInicial} from '../constantes/dataProducts'
import {Filters} from '../constantes/dataFilters'
import { useState } from 'react'
export function useFiltersProducts() {

    const [products,setProducts] = useState(productsInicial)
    const [filTask,setFilTask] = useState(products)
    const [filters , setFilters] = useState(Filters.All)

    console.log(filters)

    function addTask({title}){
        console.log(title)
        const newtsk = {id:crypto.randomUUID(),title,completed: false}
        setProducts([...products,newtsk])
        setFilTask([...products,newtsk])
        ShowAllProducts()
    }

    function handleDelete({tsk}){
        const newtsk = products.filter(evt => evt.id !== tsk.id)
        setProducts(newtsk)
        setFilTask(newtsk)
    }

    function handleDeleteCompleted(){
        const newtsk = products.filter(evt => evt.completed !== true)
        console.log(newtsk)
        setProducts(newtsk)
        setFilTask(newtsk)
    }
    
    function CompleteInput(tsk){
        const findIndex = products.findIndex(evt => evt.id === tsk.id)
        const newProducts = products.map(e => e)
        newProducts[findIndex].completed = !tsk.completed
        setProducts(newProducts)
        console.log(products)
    }

    function  handleCompleteAll(){
        const newProducts = products.map(e => (
    
            {...e,completed:true}
        ))
    
        setProducts(newProducts)
        setFilTask(newProducts)
    
    }

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




    return {products:filTask,handleDelete,CompleteInput,handleCompleteAll,ShowAllProducts,ShowPendingProducts,ShowCompletedProducts,handleDeleteCompleted,addTask}
}