import { VerifyStore } from "@/lib/actions/verifiedShop.action";
import { cookies } from "next/headers";


export const metadata = {
    title: {
        template: "Your website",
        default: "your website name",
    },
};

export default async function layout({ children }) {
    const cookie = await cookies();
    const storeName = cookie.get("subdomain")?.value;
    if (!storeName) return (
        <div>
            Please subscribe to continue
        </div>
    );

    const verifiedStore = await VerifyStore({ storeName });

    if (!verifiedStore) return (
        <div>
            Please subscribe to continue
        </div>
    )
    return (
        <div >
            {children}
        </div>
    )
}