import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tareas";
import '../StyleSheet/ListaDeTareas.css'




function ListaDeTareas(){

const[tareas, setTareas]=useState([])

const agregarTarea = tarea =>{
    if (tarea.texto.trim()){
        tarea.texto= tarea.texto.trim()
        const tareaActulizadas=[tarea, ...tareas]
        setTareas(tareaActulizadas)
    }
}

const eliminarTarea = id =>{
    const tareaActulizadas = tareas.filter(tarea=> tarea.id !== id)
    setTareas(tareaActulizadas)
}

const completarTarea = id =>{
    const tareaActulizadas = tareas.map(tarea=>{
        if (tarea.id==id){
            tarea.completada = !tarea.completada;
        }
        return tarea
    })
    setTareas(tareaActulizadas)
}

    return(
        <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
           {
            tareas.map((tarea)=>
            <Tarea 
             key={tarea.id}
             id={tarea.id}
             texto={tarea.texto}
             completada={tarea.completada}
             completarTarea={completarTarea}
             eliminarTarea={eliminarTarea} 
             />

            )
           }
        </div>
        </>
    )
}


export default ListaDeTareas