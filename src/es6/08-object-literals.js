// enhanced object literals

function newUser(user,age,country,uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("gatotorres97",26,"UY",1))

//✅ Devuelve el valor esperado
// { user: 'gatotorres97', age: 26, country: 'UY,1', id: undefined } 