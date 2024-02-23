import React from "react";

function Navbar() {
    return (
        <div className="Tabs" style={{marginRight: "25em", marginLeft: "25em"}}>
            <ul class="nav justify-content-center ">
                <li class="nav-item d-flex  align-items-center">
                    <a class="nav-link active text-white   " aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item d-flex  align-items-center" >
                    <a class="nav-link text-white " href="#">Fulbo</a>
                </li>
                <li class="nav-item d-flex  align-items-center">
                    <a class="nav-link text-white " href="#">Racing</a>
                </li>
                <li class="nav-item d-flex  align-items-center">
                    <a class="nav-link text-white" href="#">River play</a>
                    <i class="bi bi-instagram"></i>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;