import Image from 'next/image'
import SpotifyLogo from '../../public/SpotifyLogo.png'
import { Books, House, MagnifyingGlass } from '@phosphor-icons/react'

export function Aside(){
    return(
        <aside className="w-72 bg-black/80 p-6 gap-4">
            <div>
                <Image
                    src={SpotifyLogo}
                    alt="Logo Spotify"
                    height={40}
                />
            </div>

            <nav className="space-y-3 mt-8">
                <a href="" className="flex items-center gap-3 font-sans font-bold text-sm hover:text-zinc-100 text-zinc-100">
                    <House size={28} color="#f2f2f2" weight="fill"/>
                    Home
                </a>
                <a href="" className="flex items-center gap-3 font-sans font-bold text-sm hover:text-zinc-100 text-zinc-400">
                    <MagnifyingGlass size={28} color="#9C9C9C" weight="bold"/>
                    Search
                </a>
                <a href="" className="flex items-center gap-3 font-sans font-bold text-sm hover:text-zinc-100 text-zinc-400">
                    <Books size={28} color="#9C9C9C" weight="bold"/>
                    Your Library
                </a>
            </nav>

            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 1</a>
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 2</a>
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 3</a>
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 4</a>
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 5</a>
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 6</a>
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 7</a>
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 8</a>
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 9</a>
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 10</a>
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 11</a>
                <a href="" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">Playlist 12</a>
            </nav>
        </aside>
    )
}