import React, {useState} from 'react'
import './NewExpense.css'

const NewExpense= (props)=>{

    const [userInput, setUserInput]=useState({
        enteredTitle:'',
        enteredDate:'',
        enteredDescription:''
    });

    const titleHandler= (event)=>{

        setUserInput((preState)=>{
           return { ...preState, enteredTitle:event.target.value}
        })
    }
    const dateHandler= (event)=>{

        setUserInput((prevState)=>{
            return {...prevState,enteredDate:event.target.value}
        })
    }
    const descriptionHandler= (event)=>{

        setUserInput((prevState)=>{
           return { ...prevState,enteredDescription:event.target.value}
        })
    }
    const formSubmit=(event)=>{
        event.preventDefault();

        const scheduleDeets={
            title: userInput.enteredTitle,
            date: new Date(userInput.enteredDate).getFullYear(),
            description: userInput.enteredDescription
        }
        // console.log(scheduleDeets)
        props.onSaveDetails(scheduleDeets)
        setUserInput(()=>{
            return {
            enteredDate:'',
            enteredDescription:'',
            enteredTitle:''
            }
        })
    }

    return  (
        <>
            <div className='new-expense'>
            <form onSubmit={formSubmit}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="expense_title">Title</label>
                        <input 
                            id="expense_title" 
                            type='text'
                            value={userInput.enteredTitle}
                            onChange={titleHandler}
                            />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="expense_date">Date</label>
                        <input
                            id="expense_date" 
                            type='date'
                            value={userInput.enteredDate}
                            onChange={dateHandler}
                            />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="expense_description">Description</label>
                        <input 
                            id="expense_description" 
                            type='textarea' rows="2" 
                            value={userInput.enteredDescription}
                            onChange={descriptionHandler}
                            />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Details</button>

                </div>
            </form>
            </div>
        </>

    )

}
export default NewExpense;