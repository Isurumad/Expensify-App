import React from 'react';

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

export default AddOption;