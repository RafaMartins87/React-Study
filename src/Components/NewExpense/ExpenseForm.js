import React, { useState } from 'react';

import '../NewExpense/NewExpense.css';
import '../NewExpense/ExpenseForm.css';

const ExpenseForm = ()=>{

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate:''
    });

    const titleChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    }

    const amountChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    }

    const dateChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    }

    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label className='new-expense__control label'>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input className='new-expense__control input' type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;

