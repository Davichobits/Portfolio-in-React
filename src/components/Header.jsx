import './Header.css'

export const Header = ({logo}) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My PortFolio</h1>
      </header>
  )
}
