import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-warning">
                <a className="navbar-brand" href="#">GAME_DEV</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="http://localhost:3000">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://discord.gg/3WQdfUEf">Our server</a>
                        </li>
                      
                    </ul>
                    
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar
