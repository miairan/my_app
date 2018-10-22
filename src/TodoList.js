import React, {Component, Fragment} from 'react';
import TodoItem from "./TodoItem";
import './TodoList.css';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            List: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    render() {
        return (
            <Fragment>
                <div>
                    {/**/}
                    <input type="text"
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}/>
                    <button onClick={this.handleBtnClick}>添加</button>
                </div>
                <ul>
                    {
                        this.state.List.map((item, index) => {
                            return (<TodoItem content={item} key={index} deleteItem={this.handleItemDelete}/>)
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        const inputValue = e.target.value;
        this.setState(() => ({inputValue}));
    }

    handleBtnClick(e) {
        if (this.state.inputValue) {
            this.setState(prevState => ({
                List: [...prevState.List, prevState.inputValue],
                inputValue: ''
            }));
        }
    }

    handleItemDelete (index) {
        this.setState(prevState => {
            const List = [...prevState.List];
            List.splice(index, 1);
            return {List}
        })
    }

    getItem () {
        const {List} = this.state;
        List.map((item, index) => {
            return (
                <TodoItem key={index} content={item} index={index} deleteItem={this.handleItemDelete}/>
            )
        })
    }
}

export default TodoList;
