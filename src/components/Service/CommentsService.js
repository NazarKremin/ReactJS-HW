export default class CommentsService{
    url = 'https://jsonplaceholder.typicode.com/comments'
    getAllUsers(){
        fetch(this.url)
            .then(value => value.json())
    }
}