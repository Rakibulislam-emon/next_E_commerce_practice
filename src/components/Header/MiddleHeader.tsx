import Image from "next/image";
import React from 'react'
import SearchInput from "./SearchInput";
import Link from "next/link";
import { LiaUser } from "react-icons/lia";
import Container from "../Container";
import logo from "../../assets/logo.png"
import HeaderIcons from "./HeaderIcons";
import MobileNavigation from "./MobileNavigation";
function MiddleHeader() {
    return (
        <div className='border-b-[1px] border-b-gray-400'>
            <Container className='py-3 flex items-center gap-4 md;gap-6 lg:gap-20 justify-between'>
                <Link href={'/'}>
                    <Image src={logo} alt="logo" className="w-28 rounded-full" />
                </Link>
                <SearchInput />
                <div className="hidden md:inline-flex items-center gap-3">
                    <Link href={'/signin'} className="flex items-center gap-2 text-sm">
                        <div className="border-2 border-gray-700 p-1.5 rounded-full text-xl">
                            <LiaUser />
                        </div>
                        <div>
                            <p className="text-sm">Hello , Guests</p>
                            <p className="font-medium">Login / Register</p>
                        </div>
                    </Link>
                    <HeaderIcons />
                </div>
                <MobileNavigation/>
            </Container>
        </div>
    )
}

export default MiddleHeader