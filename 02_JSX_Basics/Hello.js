class Hello extends React.Component {
  render() {
    return <h1>Hello There!!!</h1>
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Hello />)
