import { getOnboardedUser } from '@/lib/actions/auth.action'
import { headers } from 'next/headers';
import { UserProvider } from '../context/UserContext';
import { redirect } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader'
import React from 'react'

export default async function layout({ children }) {
    const requestHeader = await headers();
    const id = requestHeader.get('x-user-id');
    const userOnboarded = await getOnboardedUser({ id });
    if (!userOnboarded) redirect('/logout')
    return (
        <div>
            <NextTopLoader color="#05df72"
                initialPosition={0.09}
                crawlSpeed={200}
                height={6}
                crawl={true}
                showSpinner={true}
                easing="ease"
                speed={600} />
            <UserProvider initialData={userOnboarded}>
                {children}
            </UserProvider>
        </div>
    )
}