import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode;
    className?: string;  // Add a new optional prop called "className" of type string
    href?: string;  // Add a new optional prop called "href" of type string
    onClick?: () => void;  // Add a new optional prop called "onClick" of type function
}

function Button({ children, className, href, onClick }: Props) {
    return (
        <>
            {
                href ? <Link href={href}>
                    <button className={twMerge("bg-themeColor/80 text-white py-2 px-6 hover:bg-themeColor cursor-pointer duration-200", className)}>
                        {children}
                    </button></Link> :
                    <button onClick={onClick} className={twMerge("bg-themeColor/80 text-white py-2 px-6 hover:bg-themeColor cursor-pointer duration-200", className)}>
                        {children}
                    </button>
            }
        </>
    )
}

export default Button