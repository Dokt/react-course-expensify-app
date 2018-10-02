import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render ExpensesSummary correctly with zero expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});