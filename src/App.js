import React, { useState } from "react"
import { DndContext, useSensors, useSensor, PointerSensor, TouchSensor, MouseSensor } from "@dnd-kit/core"
import DraggableSecond from "./components/Draggable-2"
import DraggableThird from "./components/Draggable-3"
import DraggableFirst from "./components/Draggable"
import "./app.css"
import Droppable from "./components/Droppable"
import DroppedItem from "./components/dropitem2"

const App = () => {

  const [droppedItem, setDroppedItem] = useState([])


  const sensors = useSensors(

    useSensor(PointerSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })

  )






  const handleDragEnd = (e) => {


    const { over, active } = e



    if (over.data.current.accepts.includes(active.data.current.type)) {

      console.log(active.id)

      setDroppedItem((prev) => {

        return [...prev, { id: active.id, x: over.x, y: over.y, name: active.data.current.name }]


      })


    }

  }



  return <DndContext sensors={sensors} onDragEnd={handleDragEnd}       >

    <div className="grid"  >

      <div className="col-1" >

        <DraggableFirst />
        <DraggableSecond />
        <DraggableThird />

      </div>

      <div className="col-2">

        <Droppable>

          {

            droppedItem.map(item => {

              return (

                <DroppedItem name={item.name} />


              )


            })

          }

        </Droppable>

      </div>


    </div>



  </DndContext>


}
export default App