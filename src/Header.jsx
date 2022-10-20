import React from "react"

function Header() {
    return (
        <div className="header">
            <img src="./src/image.png" alt="logo" className="logo" />
            <p className="header--name">Willy Eth</p>
            <p className="header--dev">Scrimba Student</p>
            <p className="header--web">willyeth website</p>

            <button type="button">
                <i class="fa-solid fa-envelope fa-beat"></i>
                Email
            </button>
        </div>
    )
}

export default Header
