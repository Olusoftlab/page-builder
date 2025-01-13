import React from "react"
import "../app.css"




const DroppedItem = ({ name }) => {



    if (name === "Navbar") {

        return <div className="arrange" style={{ height: "20%", position: "absolute", top: "0px", width: "100%", backgroundColor: "deepskyblue", color: "white" }}   >

            <h2>{name}</h2>



        </div>



    } else if (name === "Hero-section") {

        return <div className="arrange" style={{ height: "60%", position: "absolute", top: "20.0679%", width: "100%", backgroundColor: "deepskyblue", color: "white" }}    >


            <h2>{name}</h2>


        </div>

    }
    else {

        return <div className="arrange" style={{ height: "20%", position: "absolute", top: "80.9%", width: "100%", backgroundColor: "deepskyblue", color: "white" }}   >


            <h2>{name}</h2>


        </div>


    }



}
export default DroppedItem