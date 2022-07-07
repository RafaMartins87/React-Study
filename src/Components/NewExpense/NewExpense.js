import '../NewExpense/ExpenseForm.css';

import ExpenseForm from '../NewExpense/ExpenseForm';

const NewExpense = (props) => {// essa props eh a onAddExpense

    const saveExpenseDataHandler = (enteredExpenseData)=> {
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;