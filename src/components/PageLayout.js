import { Main } from "next/document"
import SiteHead from "./partials/head"

export default function PageLayout({ children }) {
    return (
        <>
            <main>
                <SiteHead />
                {children}
            </main>
        </>
    )
}
