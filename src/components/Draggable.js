import React from "react"
import { useDraggable } from "@dnd-kit/core"
import "../app.css"


const DraggableFirst = () => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 1,
        data: {
            type: "type-1",
            name: "Navbar"
        }
    })


    const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0  )` } : undefined





    return (


        <div className="back">



            <div className="drag" {...listeners} {...attributes} ref={setNodeRef} style={style}   >

                <h2>Navbar</h2>


            </div>




        </div>


    )

}
export default DraggableFirst