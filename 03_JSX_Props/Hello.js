class Hello extends React.Component {
  render() {
    console.log(this.props)
    let bangs = '!'.repeat(this.props.bangs)
    return (
      <h1>
        Hello {this.props.to} from {this.props.from}
        {bangs}
      </h1>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Hello />)
