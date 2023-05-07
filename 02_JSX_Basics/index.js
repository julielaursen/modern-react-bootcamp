class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Numpicker />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
