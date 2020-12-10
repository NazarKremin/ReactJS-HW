export default class CommentsService{
    url = 'https://jsonplaceholder.typicode.com/comments'
    getAllComments(){
       return  fetch(this.url)
            .then(value => value.json())
    }

    getAllCommentsId(id){
        return fetch(this.url + `/${id}`)
            .then(value => value.json())
    }
}