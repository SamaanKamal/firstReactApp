import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

function ExpenseItem(props){
    const [title,setTitle] = useState(props.title);

    const changeTitleHandler = () => {
        setTitle('this title is updated');
    };
    return(
        <li>
            <Card className ='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
            </Card>
        </li>
       
    );
}

export default ExpenseItem;
