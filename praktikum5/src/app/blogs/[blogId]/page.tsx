type Props = {
    params: {
        blogId: string
    }
}

export default function Blog({ params }: Props) {
    return (
        <h1>Details about blog {params.blogId}</h1>
    )
}