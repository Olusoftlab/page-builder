import React, { useState } from "react"
import { DndContext, useSensors, useSensor, PointerSensor, TouchSensor, DragOverlay } from "@dnd-kit/core"
import DraggableSecond from "./components/Draggable-2"
import DraggableThird from "./components/Draggable-3"
import DraggableFirst from "./components/Draggable"
import "./app.css"
import Droppable from "./components/Droppable"
import DroppedItem from "./components/dropitem2"
import Overlay from "./components/Overlay"
import MyTile from "./components/MyTile"




const myTiles = [

  {
    id: 1,
    name: "Navbar"
  },

  {

    id: 2,
    name: "Hero-section"

  }
  ,

  {
    id: 3,
    name: "Footer"
  }


]






const App = () => {

  const [droppedItem, setDroppedItem] = useState([])
  const [handle, setHandle] = useState({ isDragging: false, info: "" })
  const [primaryArr] = useState(myTiles)





  const sensors = useSensors(

    useSensor(PointerSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })

  )


  const handleDragStart = (e) => {

    const { active } = e

    if (active) {

      const info = active.data.current.info


      const obj = {

        isDragging: true,
        info: info
      }

      setHandle(obj)


    }


  }


  const handleDragEnd = (e) => {

    const { over, active } = e

    if (over && over.data.current.accepts.includes(active.data.current.type)) {

      setDroppedItem([...droppedItem, { id: active.id, name: active.data.current.name }])



    }

  }









  return <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}   >

    <div className="grid"  >

      <div className="col-1" >

        <DraggableFirst />
        <DraggableSecond />
        <DraggableThird />

      </div>

      <div className="col-2">




        <Droppable>

          {

            primaryArr.map(item => (


              <MyTile key={item.id} name={item.name} />


            ))

          }

          <div>

            {

              droppedItem.map(item => (

                <DroppedItem key={item.id} name={item.name} />

              ))

            }


          </div>


        </Droppable>

      </div>


    </div>

    <DragOverlay>

      {handle.isDragging && handle.info && <Overlay info={handle.info} />}


    </DragOverlay>


  </DndContext>


}
export default App