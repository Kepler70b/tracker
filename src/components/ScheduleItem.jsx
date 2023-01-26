import './ScheduleItem.css'
import './ScheduleDate.css'

const ExpenseItem=(props)=>{
    return(
        <>  
            <div className='expense-item'>
                <div className='expense-item__description'>
                    <div className='expense-item__title'>
                        {props.title}
                    </div>
                    <h2>
                        {props.description}
                    </h2>
                    <div className='expense-date'>
                        {props.date}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpenseItem;