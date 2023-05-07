function getNum() {
  return Math.floor(Math.random() * 10) + 1
}

class Numpicker extends React.Component {
  render() {
    const num = getNum()
    return (
      <div>
        <h1>My current num is: {num} </h1>
        <p>{num === 7 ? 'Lucky!' : 'Unlucky'}</p>
        {num === 7 && (
          <img src="https://i.giphy.com/media/nXx0jZrbnbRxS/giphy.webp" />
        )}
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Numpicker />)
