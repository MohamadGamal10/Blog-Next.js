import { cn } from '@/lib/utils'
import { Rakkas } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const font = Rakkas({ subsets: ['arabic'], weight: '400' })
const Logo = () => {
  return (
    <Link href={"/"} className={cn("text-3xl md:text-4xl", font.className)}>
        <div className="flex items-center">
           <Image src={"/logo-icon.png"} alt="logo" width={32} height={32} />
           <p>مدون<span className="text-primary">تي</span></p>
        </div>
    </Link>
  )
}

export default Logo
