export default class PostsService{

    url = 'https://jsonplaceholder.typicode.com/posts'

    getPostsId(id){
        return fetch(this.url + `/${id}`)
            .then(value => value.json())
    }
}