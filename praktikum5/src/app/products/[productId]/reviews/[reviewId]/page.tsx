type Props = {
    params: {
        productId: string
        reviewId: String
    }
}

export default function ProductDetails({ params }: Props) {
    return (
        <>
        <h1>Details about product {params.productId}</h1>
        <h2>with review {params.reviewId}</h2>
        </>
    )
}