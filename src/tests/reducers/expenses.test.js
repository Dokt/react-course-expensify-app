import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// @@INIT

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

// ADD_EXPENSE

test('Should add expense', () => {
    const expense = {
        id: '4',
        description: 'test',
        amount: 0,
        note: '',
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]); // expenses.concat(expense) could be a valid option
});

// REMOVE_EXPENSE

// valid id
test('Should remove expense with valid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

// invalid id
test('Should not remove expense because of unvalid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '4'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

// EDIT_EXPENSE

// valid id
test('should edit expense with valid id', () => {
    const description = 'test1'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description,
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(description);
});

// invalid id
test('Should not edit expense because of invalid id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'test1',
            amount: 0
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});