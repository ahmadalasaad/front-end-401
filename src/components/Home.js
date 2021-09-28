import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
constructor(props){
  super(props);
  this.state={
    all:[],
  }
}
addToFav=(item)=>{
  const reqBody={
    name:item.name,
    image:item.image,
    price:item.price,
    email:this.props.auth0.user.email
  }
  axios.post(`${process.env.REACT_APP_URL}/fav`,reqBody);
}
  componentDidMount=()=>{
    axios.get(`${process.env.REACT_APP_URL}/allData`).then(resData=>{
      this.setState({all:resData.data.fruits});
    })
  }
  render() {
    return (
      <>
      {
        this.state.all.map(item=>{
          return(
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
     {item.price}
    </Card.Text>
    <Button variant="primary" onClick={()=>this.addToFav(item)}>Add to Fav</Button>
  </Card.Body>
</Card>   ) } )}
 </>
    )
  }
}

export default withAuth0(Home);
