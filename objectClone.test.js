const clone= require('./objectClone')

test('create a clone of an object parameter', ()=>{
    const myObj = {
        person: "charleeblaq",
        number: 28
    }
    expect(clone(myObj)).toStrictEqual(myObj)
})
