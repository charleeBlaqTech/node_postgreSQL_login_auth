const check= require('./pallindrom')

test('Tacocat returns true', ()=>{
    expect(check('Tacocat')).toBe(true)
})

test('Dave returns false', ()=>{
    expect(check('Dave')).toBe(false)
})