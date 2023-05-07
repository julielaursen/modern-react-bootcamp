class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Loop demo</h1>
        <Friend name="Elton" hobbies={['Piano', 'Singing', 'Dancing']} />
        <Friend name="Frida" hobbies={['Painting', 'Poetry']} />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
