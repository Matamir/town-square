type User = {
    username: string
}

type PostComment = {
    user: User
    content: string
    likes: number
    subComments: PostComment[]
}

type Post = {
    user: User
    content: string
    likes: number
    comments: PostComment[]
}