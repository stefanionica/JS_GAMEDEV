import React from 'react';

class Hangman extends React.Component {

     words = ['brutarie', 'cladire', 'cantecel'];

    constructor() {
        super();
        let wordIndex = Math.floor(Math.random() * this.words.length); // [0; 1) => [0; words.length)
        // console.log('word index', wordIndex);
        this.state = {
            enteredLetters: [],
            livesLeft: 6,
            chosenWord: this.words[wordIndex]
        }
        console.log('chosen word', this.state.chosenWord);
        this.enteredKey = this.enteredKey.bind(this);
    }

    render() {
        return <>
            <h1>Hangman Game</h1>
            <div id="drawing">
                <div id="base"></div>
                <div id="pillar"></div>
                <div id="support"></div>
                <div id="rope"></div>
                <div id="head" className="human"></div>
                <div id="body" className="human"></div>
                <div id="left_arm" className="human"></div>
                <div id="right_arm" className="human"></div>
                <div id="left_leg" className="human"></div>
                <div id="right_leg" className="human"></div>
            </div>

            <div id="input">
                <p>
                    <label htmlFor="letterInput">Enter the letter:</label>
                    <input id="letterInput" type="text" onChange={this.enteredKey} maxLength="1" />
                </p>

            </div>

            <div id="enteredLetters">
                <p>{this.state.enteredLetters.length} entered letters:
                    
                {this.state.enteredLetters.map(
                    (letter) => (
                        <span>{letter}</span>
                    )
                )}
                </p>
            </div>

            <div id="livesLeft">
                <p>Lives left: {this.state.livesLeft}</p>
            </div>
        </>;
    }

    enteredKey(event) {
        // console.log('changed input', event.target.value, event);
        console.log('changed input: ', event.target.value);
        let inputLetter = event.target.value;
        // for old browsers, who don't know HTML 5s
        if (inputLetter.length > 1) {
            inputLetter = inputLetter.substring(0, 1);
        }
        // if the letter was already entered before
        console.log(this.state.enteredLetters, typeof this.state.enteredLetters)
        if (this.state.enteredLetters.includes(inputLetter)) {
            event.target.value = '';
            return;
        }
        // the letter is new
        this.state.enteredLetters.push(inputLetter);
        console.log(this.state.enteredLetters);
        this.setState({
            enteredLetters: this.state.enteredLetters
        })

        let indexOfLetter = this.state.chosenWord.indexOf(inputLetter);
        if (indexOfLetter === -1) { // chosen word doesn't contain letter
            this.setState(
                {
                    livesLeft: this.state.livesLeft-1
                }
            )
            // find first "human" tag that doesn't have "show" class
            let humanTags = document.getElementsByClassName('human');
            let firstWithNoShow = -1;
            for (let humanTag of humanTags) {
                console.log(humanTag, humanTag.classList);
                if (humanTag.classList.contains('show') === false) {
                    // current human tag doesn't have "show" class
                    firstWithNoShow = humanTag;
                    break;
                }
            }
            console.log('element without show', firstWithNoShow);
            firstWithNoShow.classList.add('show');
            return;
        }
        // return this.otherFunction;
    }

    // otherFunction() {
    //     console.log('other function');
    // }

}

export default Hangman;