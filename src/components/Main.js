/* eslint-disable */
import React from "react";
import Cards from "./HornedBeast";
import beast1  from "../images/Rhino.jpg";
import beast2  from "../images/Bison .jpg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


let horned1 = require('./data.json');

let mythicalBeasts = [
    {
        "_id": 21,
        "image_url": beast1,
        "title": "Rhino",
        "description": "is a member of any of the five extant species (or numerous extinct species) of odd-toed ungulates in the family Rhinocerotidae",
        "keyword": "Rhino",
        "horns": 1
    },

    {
        "image_url": beast2,
        "title": "Bison",
        "description": "Bison are large bovines in the genus Bison within the tribe Bovini. Two extant species and numerous extinct species are recognised.",
        "keyword": "Bison",
        "horns": 2
    }];

    let horned2 = horned1.concat(mythicalBeasts);



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''
        };
    
        
      }
    

      
      findHorned = (e) => {
          console.log(e.target.value)
          return this.setState({value: e.target.value}); 

      }
      render() {

          
          return (
              <div> 
     <div className="userInput">
                    <form onChange={this.findHorned}>
                        <input type="text" placeholder="Search by title or horns number" />
                        <select id="hornsNum">
                        <option value=''>Choose number of horns </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">More than 3</option>
                    </select>
                </form>
                </div>
                <>
            <Row xs={1} sm={2} md={3} className="g-4">
      
                {
                    (((horned2.filter(beastInfo => (beastInfo.horns == this.state.value)) !='')? horned2.filter(beastInfo => beastInfo.horns == this.state.value):
                    horned2.filter(beastInfo => (beastInfo.title.toLowerCase().includes(this.state.value.toLowerCase())) !=[])? horned2.filter(beastInfo =>beastInfo.title.toLowerCase().includes(this.state.value.toLowerCase())):
                     horned2)).map( beast => 
                        <Col key={beast._id}>
                <Cards id={beast._id} title={beast.title} image_url={beast.image_url} description={beast.description} horns={beast.horns} />
            </Col>
            )
            }
            </Row>
            </>
            </div>
        )
    }
}

export default Main;