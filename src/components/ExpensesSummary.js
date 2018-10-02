import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total.js';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const expenseCount = props.expenses.length;
    return (
        <div>
            <h3>Viewing {expenseCount} {props.expenses.length <= 1 ? 'expense' : 'expenses'} totalling {numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')}</h3>
        </div>
    ); 
}



const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);