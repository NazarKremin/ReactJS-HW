export default class UsersService{

    url = 'https://jsonplaceholder.typicode.com/users'

    getId(id){
        return fetch(this.url + `/${id}`)
            .then(value => value.json())
    }
}
