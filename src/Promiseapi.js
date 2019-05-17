const getPost=()=> {
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
    .then(posts => console.log(posts))
}

const post={
    title: 'All about fetch',
    body: 'fetch is so cool',
    userId: 1
}

const newPost =(post) =>{
const options={
    method: 'POST',
    body: JSON.stringify(post),
    headers: new Headers({
        'Content-Type': 'application/json'
    })

}
    return fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then(res=> res.json())
    .then(res=> console.log(res))
}

newPost(post)