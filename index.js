function getMood() {
  const moods = ['Angry', 'Hungry', 'Sleepy', 'Happy', 'Quiet']
  return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My current mood is: {getMood()} </h1>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<JSXDemo />)
