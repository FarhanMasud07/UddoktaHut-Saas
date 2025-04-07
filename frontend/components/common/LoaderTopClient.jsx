"use client";

import NextTopLoader from "nextjs-toploader";


const LoaderTopClient = () => {
    return (
        <NextTopLoader color="#05df72"
            initialPosition={0.09}
            crawlSpeed={200}
            height={6}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={600} />
    )
}

export default LoaderTopClient