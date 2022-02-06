import * as React from "react";
import GroobleComponent from "./grooble";
import { Constants } from "../constants"
import Grooble from "../Grooble";

type MainProp = {}
type MainState = {
    grooble1: Grooble
    grooble2: Grooble
    babyGrooble: Grooble
    savedGroobles: Grooble[]
}

export default class Main extends React.Component<MainProp, MainState> {
    constructor(props: MainProp) {
        super(props);

        this.state = {
            grooble1: new Grooble(),
            grooble2: new Grooble(),
            babyGrooble: new Grooble(),
            savedGroobles: []
        }
    }

    renderAdultGroobles(): JSX.Element {
        return (
            <div className="adultGroobles">
                <GroobleComponent
                    name="Monster"
                    bodyColor={this.state.grooble1.bodyColor}
                    limbColor={this.state.grooble1.limbColor}
                />
                <GroobleComponent
                    name="Bob"
                    bodyColor={this.state.grooble2.bodyColor}
                    limbColor={this.state.grooble2.limbColor}
                />
            </div>
        )
    }

    renderBabyGrooble(): JSX.Element {
        return (
            <div className="babyGrooble">
                <GroobleComponent
                    name="Monster"
                    bodyColor={this.state.babyGrooble.bodyColor}
                    limbColor={this.state.babyGrooble.limbColor}
                />
            </div>
        )
    }

    renderSavedGroobles(): JSX.Element {
        return (
            <div className="savedGrooblesBox">
                {this.state.savedGroobles.map(grooble => <div key={grooble.name}>
                    <GroobleComponent
                        name="Monster"
                        bodyColor={grooble.bodyColor}
                        limbColor={grooble.limbColor}
                    />
                </div>)}
            </div>
        )
    }

    randomColor(): string {
        return Constants.CSS_COLORS[Math.floor(Math.random() * Constants.CSS_COLORS.length)];
    }

    randomGrooble(): Grooble {
        let grooble = new Grooble()
        grooble.bodyColor = this.randomColor()
        grooble.limbColor = this.randomColor()
        return grooble
    }

    breedGroobles(): Grooble {
        let babyGrooble = new Grooble()
        let groobles = [this.state.grooble1, this.state.grooble2]

        babyGrooble.bodyColor = groobles[Math.floor(Math.random() * 2)].bodyColor
        babyGrooble.limbColor = groobles[Math.floor(Math.random() * 2)].limbColor

        return babyGrooble
    }

    handleRandomGroobles(): void {
        this.setState({
            grooble1: this.randomGrooble(),
            grooble2: this.randomGrooble()
        })
    }

    handleBreedGroobles(): void {
        let babyGrooble = this.breedGroobles()
        this.setState({
            babyGrooble: babyGrooble
        })
    }

    handleSaveGroobles(): void {
        let savedGroobles = this.state.savedGroobles
        savedGroobles.push(this.state.babyGrooble)
        this.setState({
            savedGroobles: savedGroobles
        })
    }

    render() {
        return (
            <div className="main">
                {this.renderAdultGroobles()}
                <button onClick={() => this.handleRandomGroobles()}>Random Groobles</button>
                <button onClick={() => this.handleBreedGroobles()}>Breed Groobles</button>
                {this.renderBabyGrooble()}
                <button onClick={() => this.handleSaveGroobles()}>Save Grooble</button>
                {this.renderSavedGroobles()}
            </div>
        )
    }
}