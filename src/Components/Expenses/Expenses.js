import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import '../Filter/ExpensesFilter.css';
import ExpensesFilter from '../Filter/ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [selectInput, setSelectInput] = useState('2020');

    const showSelectChange = (selectInput) => {
        console.log('expenses.js: ' + selectInput);
        setSelectInput(selectInput);
    };

    return (
        <div>
            <ExpensesFilter
                selected={selectInput}
                onChangeFilter={showSelectChange}
            />
            <Card className="expenses">
                {props.items.map(expense =>
                    <ExpenseItem
                        key = {expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )}
            </Card>
        </div>
    );
}

export default Expenses;