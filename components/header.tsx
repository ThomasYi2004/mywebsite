"use client"

import Link from "next/link"
import * as React from "react"

export function Header() {
    return (
        // <div className="fixed top-0 left-0 box-border border-1 border-t-0 flex justify-end pr-24 items-center gap-12 h-16 sticky">
        <div className="fixed top-0 right-6 w-full flex justify-end pr-24 items-center gap-20 h-16">
        <div className="w-14 flex justify-center">
        <Link href="/" className="text-3xl font-thin text-white">Home</Link>
        </div>
        <p className="text-3xl font-thin text-white">|</p>
        <div className="w-14 flex justify-center">
        <Link href="/about" className="text-3xl font-thin text-white">About</Link>
        </div>
        <p className="text-3xl text-white font-thin flex">|</p>
        <div className="w-14 flex justify-center">
        <Link href="/ta" className="text-3xl font-thin text-white">TA</Link>
        </div>
        <p className="text-3xl text-white font-thin">|</p>
        <div className="w-14 flex justify-center">
        <Link href="/" className="text-3xl font-thin text-white">CV</Link>
        </div>
        <p className="text-3xl text-white font-thin">|</p>
        <div className="w-14 flex justify-center">
        <Link href="/" className="text-3xl font-thin text-white">Contact</Link>
        </div>
        </div>
    )
}
