import React from "react";
import beast1  from "../images/Rhino.jpg";
import beast2  from "../images/Bison .jpg";
import Cards from "./Cards";


let horned1 = require('./data.json');

let mythicalBeasts = [
    {
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

    let horned = horned1.concat(mythicalBeasts);



class Main extends React.Component {

    render() {
        return (
        
            horned.map( beast => 
                <Cards title={beast.title} image_url={beast.image_url} description={beast.description} />)
        )
    }
}

export default Main;
