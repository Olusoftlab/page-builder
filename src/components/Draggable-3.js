import React from "react"
import { useDraggable } from "@dnd-kit/core"
import "../app.css"


const DraggableThird = () => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 3,
        data: {
            type: "type-3",
            name: "Footer",
            info: "place this at the bottom",
            position: "bottom"

        }
    })


    const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0  )` } : undefined





    return (

        <div className="back">


            <div className="drag" {...listeners} {...attributes} ref={setNodeRef} style={style}   >

                <h2>Footer</h2>


            </div>



        </div>


    )

}
export default DraggableThird