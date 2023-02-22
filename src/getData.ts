interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const getData = <T>(url: string): Promise<T> => {
  return fetch(url).then<T>((data) => data.json())
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

getData<IComment[]>(COMMENTS_URL)
  .then(comments => {
    comments.forEach(comment => {
      console.log('ID:', comment.id, 'Email:', comment.email)
    })
  })