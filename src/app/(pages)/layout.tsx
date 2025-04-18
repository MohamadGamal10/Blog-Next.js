import Footer from "@/components/navigation/footer"
import Navbar from "@/components/navigation/navbar"
import ScrollToTop from "@/components/navigation/scroll-to-top"
import { ReactNode } from "react"

interface IProps {
    children: ReactNode,
}

const layout = ({ children }: IProps) => {
    return (
        <main className="relative pt-20 overflow-x-hidden" >
            <figure className="absolute -top-60 start-[50%] -translate-x-[50%]
             size-80 md:size-[30rem] bg-gradient-to-tr from-primary/70 to-transparent 
             rounded-full blur-lg opacity-25 -z-10" />
            <Navbar />
            <div className="container space-y-12 md:space-y-20 pb-20">{children}</div>
            <Footer />
            <ScrollToTop />
        </main>
    )
}

export default layout