import { Link, NavLink } from "react-router-dom";

function Home() {
    return (
        <>
        <div className='container d-flex flex-column align-items-center mb-5'>
        <h1 className='text-center display-2'>Create your own cloud infrastructure now</h1>
      <NavLink to='/Configuration'>
      <button className='btn btn-primary btn-lg'>
        Start
      </button>
      </NavLink>
      </div>
      <div className='container d-flex justify-content-center text-center text-nowrap'>
          <p className='card m-2 p-2 display-5'>
              Subnets
              <NavLink to='/Subnets'>1</NavLink>
          </p>
          <p className='card m-2 p-2 display-5'>
              Instances
              <NavLink to='/Instances'>1</NavLink>
          </p>
        </div>
        <div className='container d-flex justify-content-center text-center text-nowrap'>
          <p className='card m-2 p-2 display-5'>
              Route Tables
              <NavLink to='/RouteTables'>1</NavLink>
          </p>
        </div>
        <div className='container d-flex justify-content-center text-center'>
          <p className='card m-2 p-2 display-5'>
              VPCs
              <NavLink to='/VPCs'>1</NavLink>
          </p>
          <p className='card m-2 p-2 display-5'>
              Gateways
              <NavLink to='/Gateways'>1</NavLink>
          </p>
      </div>
        </>
    )
}

export default Home