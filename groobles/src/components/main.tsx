import * as React from "react";
import GroobleComponent from "./grooble";
import { Constants } from "../constants"
import Grooble from "../Grooble";

type MainProp = {}
type MainState = {grooble: Grooble}

export default class Main extends React.Component<MainProp, MainState> {
    constructor(props: any) {
        super(props);
        let defaultGrooble = new Grooble()
        defaultGrooble.bodyColor = "Grey"
        defaultGrooble.limbColor = "Grey"

        this.state = {
            grooble: defaultGrooble,
        }
    }

    renderGrooble(): JSX.Element {
        return (
            <GroobleComponent
                name="Monster"
                bodyColor={this.state.grooble.bodyColor}
                limbColor={this.state.grooble.limbColor}
            />
        )
    }

    randomColor(): string {
        return Constants.CSS_COLORS[Math.floor(Math.random() * Constants.CSS_COLORS.length)];
    }

    randomGrooble(): Grooble {
        let grooble1 = new Grooble()
        grooble1.bodyColor = this.randomColor()
        grooble1.limbColor = this.randomColor()
        return grooble1
    }

    handleRandomGrooble(): void {
        let grooble1 = this.randomGrooble()

        this.setState({
            grooble: grooble1
        })
    }

    render() {
    
        return (
            <div>
                {this.renderGrooble()}
                <button onClick={() => this.handleRandomGrooble()}>Random Grooble</button>
            </div>
        )
    }
}