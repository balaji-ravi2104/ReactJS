import React from "react";
import MEAN from "./MEAN";
import MERN from "./MERN";
import MEVN from "./MEVN";
export default class Fullstack extends React.Component {
    render() {
        return (
            <div>
                <MEAN/>
                <MERN/>
                <MEVN/>
            </div>
        )
    }
}