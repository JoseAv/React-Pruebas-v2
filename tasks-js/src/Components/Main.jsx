import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types';

export const Main=({products,setProducts})=> {
const productsNoEmpty = products.length > 0


function handleDelete({tsk}){
    const newtsk = products.filter(evt => evt.id !== tsk.id)
    console.log(setProducts(newtsk))
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


    return(
        <div className='container'>
        
        {productsNoEmpty ?   products.map(tsk => (
                <div key={tsk.id} className="container-task">
                        <input type="checkbox" className="form-check-input" onChange={()=> CompleteInput(tsk)} checked={tsk.completed}/>
                        <h2>{tsk.title}</h2>
                        <button className="btn btn-danger" onClick={()=>{handleDelete({tsk})}}>x</button>
                        
                </div>


        )):  <h2>Sin Tareas Aun</h2> }
            <div><button onClick={()=> handleCompleteAll()}>Completado Todo</button></div>
        </div>

    )


}


Main.propTypes = {
    products: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired
  };