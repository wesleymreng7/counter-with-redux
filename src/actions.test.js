import { increment, decrement } from './actions'

test('Action: Increment', () => {
    let inc = increment(10)
    expect(inc).toEqual({
        type: 'INCREMENT',
        value: 10
    })
})
test('Action: Decrement', () => {
    let dec = decrement(20)
    expect(dec).toEqual({
        type: 'DECREMENT',
        value: 20
    })
})