import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

function Nav() {

  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div className="d-flex">
      <a className="navbar-brand" href="#">
      <img src="Logo.png" alt="Logo" className='w-25'/>
        CloudDash
        </a>
      <button className="navbar-toggler m-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto float-end bg-light rounded me-5">
          <li className="nav-item card p-1 m-2"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item card p-1 m-2"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item card p-1 m-2"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
    </div>
  </nav>
  </div>
    </>
  )
}

export default Nav