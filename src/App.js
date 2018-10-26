import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            color: 'black',
            banner: 'yo',
            isOpen: false
        };
        this.buttonHandler = this.buttonHandler.bind(this)
        this.textHandler = this.textHandler.bind(this)
        console.log(this.props)
    }

    textHandler(e){
        console.log("this changed");
        this.setState({
            isOpen: !this.state.isOpen,
        });
        if (this.state.isOpen) {
            this.setState({banner: 'yo'});
        } else {
            this.setState({banner: e.target.value});
        }
    }

    buttonHandler(){
        console.log("This Works");
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        let myBanner;
        if (this.state.isOpen) {
            myBanner = <h2>my dood</h2>
        }
        return (
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                YOU GOT HACKED!!!!!!!!!
                </p>
                <h2>{this.state.banner}</h2>
                {this.props.test}
                {
                    this.state.isOpen &&
                    <Header banner = {this.state.banner}/>
                }
                <input onChange={this.textHandler}/>
                <button onClick={this.buttonHandler}>Click here</button>
                </header>
                </div>
            );
        }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
