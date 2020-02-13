import React from 'react';
import ReactDOM from 'react-dom';

// const obj={
//     name:'Isuru',
//     getName(){
//         return this.name
//     }
// };
// const getName = obj.getName.bind(obj);
// console.log(getName());

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state={
            options:props.options
        }
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>{
                    return{
                        options:options
                    }
                })
            }
        }catch(e){

        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options",json);
        }
    }

    componentWillUnmount(){
        
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options:[]
            };
        });
    }

    handleDeleteOption(optionToDelete){
        this.setState((prevState)=>{
            return {options: prevState.options.filter((option)=>{
                return ( option !== optionToDelete);
            })
            };
        })
    }

    handlePick(){
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randomNum]);
    }

    handleAddOption(option){
        if (!option){
            return 'Enter valid item!!';
        }else if(this.state.options.indexOf(option)>-1){
            return 'This item is already exist';
        }

        this.setState((prevState)=>{
            return{
                options:prevState.options.concat(option)
            }
        });
    }
    render(){
        const subTitle = 'Put your life in the hands of a coumputer';
        //const options =['Thing one','Thing two','Thing three'];

        return(
            <div>
                <Header subTitle={subTitle}/>
                <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick}/>
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options:[]
}

const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>    
    );
}

Header.defaultProps={
    title : 'Indecision'
}

const Action = (props) => {
    return(
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do ?</button>
        </div>
    );
}

const Options = (props) =>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Plaese add item to start!!</p>}
           {
              props.options.map((option) => <Option option={option} key={option} handleDeleteOption={props.handleDeleteOption}/>)
           }
        </div>
    );
}

const Option = (props) =>{
    return(
        <div>
            {props.option}
            <button 
            onClick = {()=>{
                props.handleDeleteOption(props.option);
            }}
            >
            Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            error: undefined
        }

    }
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        if(error){
            this.setState(()=>{
                return{
                    error:error
                }
            });
        }else{
            this.setState(()=>{
               return{ error : undefined}
            });
        }

        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type='text'></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) =>{
//     return(
//         <div>
//             <p>Name : {props.name}</p>
//             <p>Age :{props.age} </p>
//         </div>
//     );
// }
