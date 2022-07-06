import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const [selectInput, setSelectInput] = useState('');
  
  const expensesFilterHandler = (event)=>{
    setSelectInput(event.target.value); 
    console.log(event.target.value);
    props.onFilterChange(event.target.value);
  };  

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={expensesFilterHandler}>
          <option value={selectInput}>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;