export function Header({addTask}){


    function handlenAddTask(e){
        e.preventDefault()
        
        const data = new window.FormData(e.target)
        const title = data.get('title')
        if(title === '') return
        addTask({title})
    }



    return(
        <>  
            <h2 style={{textAlign:'center'}}>Lista de Tareas</h2>
            <header style={{display:'flex', justifyContent:'center'}}>
            <form onSubmit={handlenAddTask}>
                <input type="text" name="title" />
                <button>Agregar</button>
            </form>

            </header>
        
        
        
        </>



    )


}