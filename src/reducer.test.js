import reducer from './reducer'

test('Reducer initial state null', () => {
    const action = { type: 'INCREMENT', value: 10}
    const state = reducer(undefined, action)
    expect(state).toEqual( { count: 10 })
})

test('Reducer increment', () => {
    const initialState = {
        count: 0
    }
    const action = { type: 'INCREMENT', value: 10}
    const state = reducer(initialState, action)
    expect(state).toEqual( { count: 10 })
})
test('Reducer decrement', () => {
    const initialState = {
        count: 0
    }
    const action = { type: 'DECREMENT', value: 10}
    const state = reducer(initialState, action)
    expect(state).toEqual( { count: -10 })
})