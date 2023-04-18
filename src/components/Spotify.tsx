"use client"
import { Aside } from "./Aside"
import { Footer } from "./Footer"
import { Main } from "./Main"

export function Spotify(){
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                <Aside />
                <Main />
            </div>
            <Footer />
        </div>
    )
}