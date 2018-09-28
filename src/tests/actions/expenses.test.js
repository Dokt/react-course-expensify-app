import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

// REMOVE_EXPENSE

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

// EDIT_EXPENSE

test('Should setup edit expense action object', () => {
    const action = editExpense('123', {description: 'desc', amount: 300});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            description: 'desc',
            amount: 300
        }
    });
});

// ADD_EXPENSE

test('Should setup add expense action object with provided values', () => {
    const expenseData = {description: 'desc', amount:300, note:'', createdAt:0}
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with defaut values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});