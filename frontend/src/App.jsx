import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand" href="#">Issue Tracker</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
        <li className="nav-item">
          <a className="nav-link" href="/api/user/list">List all Users</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </header>
      <main>
      <div className="row">
        <div className='col-6 text-center border border-secondary'>
          <h2>Users</h2>
          <ul className="list-group">
            <li className="list-group-item"><a href="/api/user/1">User 1</a></li>
            <li className="list-group-item"><a href="/api/user/2">User 2</a></li>
            <li className="list-group-item"><a href="/api/user/3">User 3</a></li>
        </ul>
        </div>
        <div className='col-6 text-center border border-secondary'>
          <h2>Bugs</h2>
        </div>
      </div>
      </main>
      <footer>

      </footer>
      
      </div>
     
    </>
  )
}

export default App
