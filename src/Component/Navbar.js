import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`} >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">{props.title}</a> */}
         
          <NavLink className="navbar-brand" to="/">{props.title}</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item" >
                <NavLink className="nav-link" to ="/About">{props.about}</NavLink>
                {/* <a className="nav-link" href ="#">{props.about}</a> */}
              </li>
         
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            {/* <div className='d-flex'>
               <div onClick={()=> props.togglemode('primary')} className=' bg-primary rounded mx-2' style={{height:"30px",width:"30px", cursor:"pointer"}}></div>
               <div onClick={()=> props.togglemode('warning')} className=' bg-warning rounded mx-2' style={{height:"30px",width:"30px", cursor:"pointer"}}></div>
               <div onClick={()=> props.togglemode('danger')} className=' bg-danger rounded mx-2' style={{height:"30px",width:"30px", cursor:"pointer"}}></div>
               <div onClick={()=> props.togglemode('info')} className=' bg-info rounded mx-2' style={{height:"30px",width:"30px", cursor:"pointer"}}></div>
               <div onClick={()=> props.togglemode('success')} className=' bg-success rounded mx-2' style={{height:"30px",width:"30px", cursor:"pointer"}}></div>
            </div> */}
           
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
              {/* <input className="form-check-input" type="checkbox" role="switch" onClick={()=>props.togglemode(null)} id="flexSwitchCheckDefault"/> */}
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode </label>
            </div>
            
              
            </div>
          
          
        </div>
  
      </nav>
    </div>
  )
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     about: PropTypes.string
// }