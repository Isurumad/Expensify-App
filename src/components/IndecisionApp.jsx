import React from 'react';

import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

// const obj={
//     name:'Isuru',
//     getName(){
//         return this.name
//     }
// };
// const getName = obj.getName.bind(obj);
// console.log(getName());

class IndecisionApp extends React.Component{
    state ={
        options:this.props.options,
        isOpen : undefined
    }
    
    componentDidMount = ()=>{
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

    componentDidUpdate=(prevProps,prevState)=>{
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options",json);
        }
    }

    componentWillUnmount(){
        
    }

    handleDeleteOptions=()=>{
        this.setState(()=>{
            return {
                options:[]
            };
        });
    }

    handleDeleteOption=(optionToDelete)=>{
        this.setState((prevState)=>{
            return {options: prevState.options.filter((option)=>{
                return ( option !== optionToDelete);
            })
            };
        })
    }

    handlePick = () =>{
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>{
            return{
                isOpen:option
            }
        })
    }

    handleModal = () =>{
        this.setState(()=>{
            return{
                isOpen:undefined
            }
        })
    }

    handleAddOption = (option) =>{
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
                <OptionModal isOpened={this.state.isOpen} handleModal={this.handleModal}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options:[]
}

// const User = (props) =>{
//     return(
//         <div>
//             <p>Name : {props.name}</p>
//             <p>Age :{props.age} </p>
//         </div>
//     );
// }

export default IndecisionApp