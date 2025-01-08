import React from "react"
import { useDraggable } from "@dnd-kit/core"
import "../app.css"


const DraggableSecond = () => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 2,
        data: {
            type: "type-2",
            name: "Hero-section"
        }
    })


    const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0  )` } : undefined





    return (


        <div className="back">

            <div className="drag" {...listeners} {...attributes} ref={setNodeRef} style={style}   >

                <h2>Hero section</h2>


            </div>


        </div>



    )

}
export default DraggableSecond