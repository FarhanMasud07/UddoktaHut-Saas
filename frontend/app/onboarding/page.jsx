import { headers } from "next/headers"

export default async function Onboarding() {
    const header = await headers()
    const userId = header.get('x-user-id');
    return (
        <>
            <div>onboading page</div>
            <p>{userId}</p>
        </>
    )
}