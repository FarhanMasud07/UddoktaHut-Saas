import NextTopLoader from 'nextjs-toploader'
import React from 'react'

export default function layout({ children }) {
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
            {children}
        </div>
    )
}