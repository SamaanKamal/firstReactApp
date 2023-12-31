import React,{useState} from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    const titleChangeHandler = (event) =>{
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) =>{
        setDate(event.target.value);
    };

    const dataHandler = (event) =>{
        event.preventDefault();
        const data ={
            title: title,
            amount:amount,
            date:new Date(date)
        };
        props.onSavingData(data);
        setTitle('');
        setAmount('');
        setDate('');
    };


    return (
        <form onSubmit={dataHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min='0.1' step='0.1'value={amount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min='1-1-2018' max='31-12-2023' value={date} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;