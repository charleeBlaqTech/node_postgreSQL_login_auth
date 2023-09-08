const my_func= require('./great')

test('this should return a sum result', () => {
    expect(my_func(1, 2)).toBe(3)
})