import React,{useState} from 'react'
import ExpenseItem from './ScheduleItem'
import NewExpense from './NewSchedule'
import ExpensesFilter from './SchedulesFilter'
import './Schedules.css'
import './NewSchedule.css'

const Expense =(props)=>{
    const [filteredYear,setFilteredYear]=useState('2020')
    
    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.split("/")[2].toString()===filteredYear;
    })
    const changeHandler=changeYear=>{
        console.log('Expenses.js')
        console.log(changeYear)
        setFilteredYear(changeYear)
    }
    
    return(
        <>    
            <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeDetails={changeHandler}/>
                {filteredExpenses.map((expense)=>(
                    <ExpenseItem 
                        title={expense.title}
                        description={expense.description}
                        date={expense.date}
                    />
                ))}
            </div>
        </>
    )
}
export default Expense;