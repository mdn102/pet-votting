import React from 'react';
import './App.css';
import products from './data'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //our intial state is empty
      products: [],
      filter: ''
    }
    this.handleDislike = this.handleDislike.bind(this)
    this.handleLike = this.handleLike.bind(this)
    this.handleChange = this.handleChange.bind(this)


  }
  //setting an instance of state populating with data 
  componentDidMount() {
    this.setState({ products: products })
  }
  //search function
  handleChange(event) {
    console.log(this.handleChange)
    this.setState({ filter: event.target.value })
  }
  //creatinf a function that will interact with a child component function that will ultimately intake the id
  handleDislike(id) {
    // console.log('this is the id ;) ' +id)

    //assigning new value to one of the properties without overwriting the state array 
    //Object assign is responsible for that takes in 3 parameters
    let updatedProducts = this.state.products.map(item => {
      if (item.id === id) {
        return Object.assign({}, item, {
          votes: item.votes - 1
        })
      } else {
        return item
      }
    })
    this.setState({ products: updatedProducts })
  }



  handleLike(id) {
    // console.log(` this is me likeing `+id)

    let updatedProducts = this.state.products.map(item => {
      if (item.id === id) {
        return Object.assign({}, item, {
          votes: item.votes + 1
        })
      } else { return item }
    })
    this.setState({ products: updatedProducts })
  }



  render() {
    const products = this.state.products.sort((a, b) => b.votes - a.votes)
    const filter = this.state.filter;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = products.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key] === 'string' && item[key].toLowerCase().includes(lowercasedFilter)
      )
    })


    // console.log(products)
    // console.log(this.state.products)
    let filtered = filteredData.map((product, id) => (
      <Individual
        key={id}
        id={product.id}
        description={product.description}
        title={product.title}
        url={product.urs}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        dislike={this.handleDislike}
        like={this.handleLike}

      />

    ))
    return (
      <div className='main-container'>
        <h1 className='text header'>MY ANIMALS</h1>
        <span>Developed by Minh Nguyen @2020.</span>
        <input className='search' placeholder='SEARCH' value={filter} onChange={this.handleChange}></input>
        <div className='cards'>{filtered}</div>
      </div>

    )
  }
}

class Individual extends React.Component {
  constructor(props) {
    super(props)

    this.buttonDislike = this.buttonDislike.bind(this)
    this.buttonLike = this.buttonLike.bind(this)
  }

  buttonDislike() {
    this.props.dislike(this.props.id)
  }
  buttonLike() {
    this.props.like(this.props.id)
  }

  render() {

    return (

      <div className='title'>
        <h1>{this.props.title}</h1>
        <div className='profile-image'>
          <img className='imageCenter' alt={this.props.title} src={this.props.submitterAvatarUrl} />
        </div>

        <a href={this.props.url}>{this.props.url}</a>
        <p className='description'>{this.props.description}</p>
        <div className='votes'>
          <button onClick={this.buttonLike} className='like-button' />
          <button onClick={this.buttonDislike} className='dislike-button'></button>
          <h3>{this.props.votes}</h3>
        </div>
      </div>




    )
  }

}

export default App;
