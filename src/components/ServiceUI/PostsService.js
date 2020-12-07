export class PostsService{

    url ='https://jsonplaceholder.typicode.com/posts'

getAllPost(){
    return fetch(this.url)
        .then(value => value.json())
        .then(postApi =>{return postApi})
        }

getPostById(id){
        return fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(value => value)}

}