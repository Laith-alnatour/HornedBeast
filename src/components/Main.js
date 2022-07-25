import React from "react";
import horned1 from "../images/Rhino.jpg";
import horned2 from "../images/Bison .jpg";
import HornedBeast from "./HornedBeast";


class Main extends React.Component {

    render() {
        return (
            <div title="containerDiv">
                    <HornedBeast title="Rhino" image_url={horned1} description="is a member of any of the five extant species (or numerous extinct species) of odd-toed ungulates in the family Rhinocerotidae" />
                    <HornedBeast title="Bison" image_url={horned2} description="Bison are large bovines in the genus Bison within the tribe Bovini. Two extant species and numerous extinct species are recognised." />
                </div>
)
}}

export default Main;