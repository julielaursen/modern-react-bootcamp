class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props
    const winner = s1 === s2 && s2 === s3
    return (
      <div className="Machine">
        <label htmlFor="textInput"></label>
        <p style={{ fontSize: '50px' }}>
          {s1} {s2} {s3}
        </p>
        <p>{winner ? 'Winner!' : 'You lost'}</p>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Machine />)
