import React from "react"
import { useDroppable } from "@dnd-kit/core"

const Droppable = (props) => {

    const { setNodeRef } = useDroppable({
        id: "droppable",
        data: {
            accepts: ["type-1", "type-2", "type-3"],
            positions: ["top", "middle", "bottom"]
        }

    })










    return (

        <div ref={setNodeRef} className="canva" id="droppable"   >


            {props.children}


        </div>


    )




}

export default Droppable