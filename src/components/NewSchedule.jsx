import React, {useState} from 'react'
import ScheduleForm from './ScheduleForm';
import './NewSchedule.css'

const NewExpense= (props)=>{
    const [showState,setShowState]=useState(false)


    const handleShowState=()=>{
        setShowState((state)=>{
            return !state;
        })
    }
    const saveDetailsHandler=(detailsProps)=>{
        const scheduleDeets={
            ...detailsProps,
            id:Math.random().toString()
        }
        // console.log(scheduleDeets)
        props.onAddDetails(scheduleDeets)
    }

    return  (
        <>
            <div className='new-expense'>
                {!showState && <button onClick={handleShowState}> Add Schedule</button>}
                {showState &&<ScheduleForm showState={handleShowState} onSaveDetails={saveDetailsHandler}/>}
            </div>
        </>

    )

}
export default NewExpense;