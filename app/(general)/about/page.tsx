import { Metadata } from "next"

export const metadata: Metadata ={
    title: 'About Page',
    description:'About Page'
}

export default function AboutPage() {
    return(
        <>
            <span className="text-red-500">About page</span>
        </>
    )
}