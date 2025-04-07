"use client"

import * as React from "react"

export function Header() {
    return (
        // <div className="fixed top-0 left-0 box-border border-1 border-t-0 flex justify-end pr-24 items-center gap-12 h-16 sticky">
        <div className="fixed top-0 right-6 w-full flex justify-end pr-24 items-center gap-20 h-16">
        <div className="w-14 flex justify-center">
        <a href="/" className="text-3xl antialiased text-white"> Home</a>
        </div>
        <p className="text-3xl font-thin text-white">|</p>
        <div className="w-14 flex justify-center">
        <a href="/about" className="text-3xl text-white antialiased"> About</a>
        </div>
        <p className="text-3xl text-white font-thin flex">|</p>
        <div className="w-14 flex justify-center">
        <a href="/ta" className="text-3xl text-white antialiased"> TA</a>
        </div>
        <p className="text-3xl text-white font-thin">|</p>
        <div className="w-14 flex justify-center">
        <a href="google.com" className="text-3xl text-white antialiased"> CV</a>
        </div>
        <p className="text-3xl text-white font-thin">|</p>
        <div className="w-14 flex justify-center">
        <a href="google.com" className="text-3xl text-white antialiased"> Contact</a>
        </div>
        </div>
    )
}
