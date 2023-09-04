import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('Select Year');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const FilterdItems = props.items.filter((expenses)=>{
            return filteredYear === expenses.date.getFullYear().toString();
        });
    return (
    <div>
        <Card className ="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses = {FilterdItems} />
        <ExpenseList  items = {FilterdItems}/>
        {/* <ExpenseItem
        title ={props.items[0].title}
        amount ={props.items[0].amount}
        date ={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
        title ={props.items[1].title}
        amount ={props.items[1].amount}
        date ={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
        title ={props.items[2].title}
        amount ={props.items[2].amount}
        date ={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
        title ={props.items[3].title}
        amount ={props.items[3].amount}
        date ={props.items[3].date}
        ></ExpenseItem> */}
        </Card>
    </div>
    
    );
}

export default Expenses;