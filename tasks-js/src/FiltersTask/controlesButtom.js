import {productsInicial} from '../constantes/dataProducts'
import { useState } from 'react'
export function useEstateProducts(){
    const [products,setProducts] = useState(productsInicial)


    function addTask({title}){
        console.log(title)
        const newtsk = {id:crypto.randomUUID(),title,completed: false}
        setProducts([...products,newtsk])
    }

    function handleDelete({tsk}){
        const newtsk = products.filter(evt => evt.id !== tsk.id)
        setProducts(newtsk)
    }

    function handleDeleteCompleted(){
        const newtsk = products.filter(evt => evt.completed !== true)
        console.log(newtsk)
        setProducts(newtsk)
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
    
    }

return {products,addTask,handleDelete,handleDeleteCompleted,CompleteInput,handleCompleteAll}


}