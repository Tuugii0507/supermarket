import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "../../App.css"

const Nectar = () => {
    let navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/welcome')
        }, 3000)
    })
    return <div>
        <div className="nectar center">
            <div className="realNectar" style={{ marginLeft: "15vw" }}>

            </div>
        </div>
    </div>
}
export default Nectar;