import { Button, buttonVariants } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants/nav-links"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Link from "next/link"

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="md:hidden cursor-pointer" variant="outline"><Menu className="size-8" /></Button>
            </SheetTrigger>
            <SheetContent className="py-32">
                <SheetTitle className="hidden"></SheetTitle>
                <SheetDescription className="hidden"></SheetDescription>
                <nav className="flex flex-col items-center gap-4">
                    {navLinks.map((link, index) => {
                        const { href, label, icon: Icon } = link;
                        return (
                            <SheetClose key={index} asChild>
                                <Link
                                    href={href}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "lg" }),
                                        "w-full justify-start"
                                    )}
                                >
                                    <Icon className="size-5" />
                                    <span>{label}</span>
                                </Link>
                            </SheetClose>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav