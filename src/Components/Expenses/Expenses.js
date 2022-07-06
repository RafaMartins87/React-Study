import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import '../Filter/ExpensesFilter.css';
import ExpensesFilter from '../Filter/ExpensesFilter';

const Expenses = (props) => {
    const showSelectChange = (selectInput)=>{
        console.log('ta no expenses: ' + selectInput);
    };

    return (        
        <div>
            <ExpensesFilter onFilterChange={showSelectChange}/>
            <Card className="expenses">
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
            </Card>
        </div>
    );
}

export default Expenses;