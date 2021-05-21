const redux = require('redux')
const buatStore = redux.createStore

const initialState = {
    value: 0,
    age: 17
} 

//Reducer [fungsi untuk update si store]
//rootReducer ini dibuat untuk menampung beberapa reducer, maka kita boleh sebut rootReducer
const rootReducer = (abigorasa = initialState, actiopasu) => {
    switch(actiopasu.type) {
        case `ADD_AGE`:
            return {
                ...abigorasa, //ini copy value dari state initialState
                age: abigorasa.age + 1
            }
        case `CHANGE_VALUE`:
            return {
                ...abigorasa,
                value: abigorasa.value + actiopasu.newValue
            }
        default:
            return abigorasa   
    }
}

//Store [sebuah wadah besar yang menyimpan state secara global]
const store = buatStore(rootReducer)
console.log(store.getState())

//Subscription [Proses pemanggilan store yang kita perlukan / Jika terjadi perubahan pada store maka akan ketrigger]
store.subscribe(() => {
    console.log('store change : ', store.getState())
})

//Dispatch/Action [proses pemanggilan sebuah instruksi dari reducer / pemanggil reducer]
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})
console.log(store.getState())
