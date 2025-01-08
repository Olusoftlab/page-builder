import React from "react"
import "../app.css"

const DroppedItem = ({ name, x, y }) => {


    if (name === "Navbar") {


        return (

            <div className="navbar" style={{ height: "20%" }}   >

                <h2>{name}</h2>

            </div>

        )


    }
    else if (name === "Hero-section") {

        return (


            <div className="navbar-1" style={{ height: "70%", border: "1px solid white" }}     >

                <h2>{name}</h2>

            </div>


        )

    }

    else if (name === "Footer") {


        return <div className="navbar-3" style={{ height: "10%" }}  >

            <h2>{name}</h2>

        </div>



    }






}
export default DroppedItem
