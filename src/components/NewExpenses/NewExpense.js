import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const addNewExpenseObject = (object) =>{
        const fulldata ={
            ...object,
            id:Math.random().toString()
        };
        props.onAddingToArray(fulldata);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };

    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
                )}
            {isEditing && (
            <ExpenseForm  onSavingData= {addNewExpenseObject}
            onCancel={stopEditingHandler}
            />
            )}
            
        </div>
    );
};

export default NewExpense;