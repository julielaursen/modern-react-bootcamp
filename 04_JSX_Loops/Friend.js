class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props
    return (
      <div>
        <h1>
          {name}
          <ul>
            {hobbies.map((h) => (
              <li>{h}</li>
            ))}
          </ul>
        </h1>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Friend />)
