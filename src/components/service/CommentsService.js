export default class CommentsService {

    url = 'https://jsonplaceholder.typicode.com/comments'

    getCommentsId(id) {
        return fetch(this.url + `/${id}`)
            .then(value => value.json())
    }
}