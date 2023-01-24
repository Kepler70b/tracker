import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import NewExpense from './newExpense'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expense =(props)=>{
    const [filteredYear,setFilteredYear]=useState('2020')
    const saveDetailsHandler=(detailsProps)=>{
        const scheduleDeets={
            ...detailsProps,
            id:Math.random().toString()
        }
        // console.log(scheduleDeets)
        props.onAddDetails(scheduleDeets)
    }
    const changeHandler=changeYear=>{
        console.log('Expenses.js')
        console.log(changeYear)
        setFilteredYear(changeYear)
    }
    return(
        <>  
            <NewExpense onSaveDetails={saveDetailsHandler}/>
            
            <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeDetails={changeHandler}/>
                {props.items.map((expense)=>(
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