const reverseString = require('./reverse')

test('return the reverse of a given string', ()=>{
    expect(reverseString('Dave')).toBe('evaD')
})