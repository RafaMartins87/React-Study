import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import '../Filter/ExpensesFilter.css';
import ExpensesFilter from '../Filter/ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {//ta recebendo o array de expense
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear.toString();
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {filteredExpenses.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )};
            </Card>
        </div>
    );
}

export default Expenses;