import './ExpenseItem.css'
import './ExpenseDate.css'

const ExpenseItem=(props)=>{
    return(
        <>
            <div className='expense-item'>
                <div className='expense-item__description'>
                    <div className='expense-date'>
                        {props.date}
                    </div>
                    <h2>
                        {props.title}
                    </h2>
                    <div className='expense-item__price'>
                        {props.description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpenseItem;