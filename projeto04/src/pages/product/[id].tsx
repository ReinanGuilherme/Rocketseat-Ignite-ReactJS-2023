import { useRouter } from "next/router"

export default function Id() {

    const {query} = useRouter()
    return (
        <h1>Product ID: {JSON.stringify(query)}</h1>
    )
}