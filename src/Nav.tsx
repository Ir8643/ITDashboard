import { NavLink } from 'react-router-dom'

function Nav() {

  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="d-flex">
      <NavLink className="navbar-brand" to='/'>
      <img src="Logo.png" alt="Logo" className='w-25'/>
        CloudDash
        </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      <div className="collapse navbar-collapse m-3" id="navbarNav">
        <ul className="navbar-nav ms-auto float-center bg-light rounded d-flex flex-row flex-wrap justify-content-center">
          <li className="nav-item card p-1 m-2 text-nowrap"><NavLink className="nav-link" to='/'>Home</NavLink></li>
          <li className="nav-item card p-1 m-2 text-nowrap"><NavLink className="nav-link" to='/Subnets'>Subnets</NavLink></li>
          <li className="nav-item card p-1 m-2 text-nowrap"><NavLink className="nav-link" to='/Instances'>Instances</NavLink></li>
          <li className="nav-item card p-1 m-2 text-nowrap"><NavLink className="nav-link" to='/RouteTables'>Route Tables</NavLink></li>
          <li className="nav-item card p-1 m-2 text-nowrap"><NavLink className="nav-link" to='/VPCs'>VPCs</NavLink></li>
          <li className="nav-item card p-1 m-2 text-nowrap"><NavLink className="nav-link" to='/Gateways'>Gateways</NavLink></li>
        </ul>
    </div>
  </nav>
  </div>
    </>
  )
}

export default Nav