import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          likes: 0,
          disLikes: 0,
        }
      }
      
        handleLike = () => {
          this.setState({likes: this.state.likes + 1})
        }
        handleDisLike = () =>{
        this.setState({disLikes: this.state.disLikes + 1})
        }
            
    render() {
        return (
          <div className="cards">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={this.props.image_url} />
              <Card.Body >
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  {this.props.description}
                </Card.Text>
                <Button variant="primary" onClick={this.handleLike}>❤ {this.state.likes}</Button>
                <Button variant="primary" onClick={this.handleDisLike}>👎{this.state.disLikes}</Button>
              </Card.Body>
            </Card>
            </div>
            )
     }
}

export default Cards;