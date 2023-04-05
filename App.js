import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './AppContext';
import Budget from './Budget';
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import RemainingBudget from './Reaming';

const App = () => {
	return (
		<AppProvider>
			<div className='container' style={{height:"700px",width:"1200px",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url('https://www.shutterstock.com/image-photo/woman-putting-coin-into-ceramic-260nw-2262209181.jpg')"}}>
				<center><h1 className='mt-3'>EXPENSE TRACKER</h1></center>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;