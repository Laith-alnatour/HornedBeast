import React from "react";
import horned1 from "./images/Rhino.jpg";
import horned2 from "./images/Bison .jpg";

let beasts = [
    {
        "image_url": horned1,
        "title": "Rhino",
         "alt":   "Rhino",
        "description": "is a member of any of the five extant species (or numerous extinct species) of odd-toed ungulates in the family Rhinocerotidae",
    },

    {
        "image_url": horned2,
        "title": "Bison",
        "alt":   "Bison",
        "description": "Bison are large bovines in the genus Bison within the tribe Bovini. Two extant species and numerous extinct species are recognised.",
    }]
    ;

class Main extends React.Component {

    render() {
        return (
            <div title="containerDiv">
                <div className="beastTitle">
                    <h2>{beasts[0].title}</h2>
                </div>

                <div>
                    <img src={beasts[0].image_url} className='horned1' alt="Rhino" />
                </div>

                <div className="RhinoParagraph">
                    <p>{beasts[0].description}</p>
                </div>
                <br /><br />
                <div className="beastTitle">
                    <h2>{beasts[1].title}</h2>
                </div>
                <br />
                <div>
                    <img src={beasts[1].image_url} className='horned2' alt="Bison" />
                </div>
                <br />

                <div className="BisonParagraph">
                    <p> {beasts[1].description}</p>
                </div>
            </div>
        )
    }
}



export default Main;