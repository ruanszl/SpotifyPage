import { CaretDown, CaretLeft, CaretRight, PlayCircle } from "@phosphor-icons/react";
import album from '../../public/album.jpg'
import user from '../../public/user.jpg'
import descobertaDaSemana from '../../public/descobertaDaSemana.jpg'
import Image from "next/image";

export function Main(){
    return (
        <main className="flex-1 py-4 pl-7 pr-9">
            <div className="grid grid-cols-2">
                <div className="flex gap-4">
                    <button className="rounded-full bg-black/40 p-1">
                        <CaretLeft size={24} color="#ffffff" weight="regular" />
                    </button>
                    <button className="rounded-full bg-black/40 p-1">
                        <CaretRight size={24} color="#ffffff" weight="regular" />
                    </button>
                </div>
                <a href="#" className="flex w-gw h-8 bg-zinc-950 rounded-full justify-self-end items-center gap-2 p-1">
                    <Image
                        src={user}
                        alt="user"
                        height={100}
                        className="rounded-full h-7 w-7"
                    />
                    <div className="text-white text-sm ">
                        <strong>RuanSou</strong>
                    </div>
                    <button className="">
                        <CaretDown size={16} color="#ffffff" weight="fill" />
                    </button>
                </a>
            </div>
            
            <div className="mt-8 font-semibold text-white text-3xl">
                Bom dia
            </div>

            <div className="grid grid-cols-3 gap-4 mt-7">
                <a href="#" className="bg-white/10 group rounded flex items-center text-white overflow-hidden hover:bg-white/20 transition-colors">
                    <Image
                        src={album}
                        alt="Album sofi tukker"
                        height={80}
                    />
                    <strong className="px-4">Sofi Tukker</strong>
                    <button className="flex ml-auto mr-3 invisible group-hover:visible">
                        <PlayCircle size={60} color="#FF00EA" weight="fill" />
                    </button>
                </a>
                <a href="#" className="bg-white/10 group rounded flex items-center text-white overflow-hidden hover:bg-white/20 transition-colors">
                    <Image
                        src={album}
                        alt="Album sofi tukker"
                        height={80}
                    />
                    <strong className="px-4">Sofi Tukker</strong>
                    <button className="flex ml-auto mr-3 invisible group-hover:visible">
                        <PlayCircle size={60} color="#FF00EA" weight="fill" />
                    </button>
                </a>
                <a href="#" className="bg-white/10 group rounded flex items-center text-white overflow-hidden hover:bg-white/20 transition-colors">
                    <Image
                        src={album}
                        alt="Album sofi tukker"
                        height={80}
                    />
                    <strong className="px-4">Sofi Tukker</strong>
                    <button className="flex ml-auto mr-3 invisible group-hover:visible">
                        <PlayCircle size={60} color="#FF00EA" weight="fill" />
                    </button>
                </a>
                <a href="#" className="bg-white/10 group rounded flex items-center text-white overflow-hidden hover:bg-white/20 transition-colors">
                    <Image
                        src={album}
                        alt="Album sofi tukker"
                        height={80}
                    />
                    <strong className="px-4">Sofi Tukker</strong>
                    <button className="flex ml-auto mr-3 invisible group-hover:visible">
                        <PlayCircle size={60} color="#FF00EA" weight="fill" />
                    </button>
                </a>
                <a href="#" className="bg-white/10 group rounded flex items-center text-white overflow-hidden hover:bg-white/20 transition-colors">
                    <Image
                        src={album}
                        alt="Album sofi tukker"
                        height={80}
                    />
                    <strong className="px-4">Sofi Tukker</strong>
                    <button className="flex ml-auto mr-3 invisible group-hover:visible">
                        <PlayCircle size={60} color="#FF00EA" weight="fill" />
                    </button>
                </a>
                <a href="#" className="bg-white/10 group rounded flex items-center text-white overflow-hidden hover:bg-white/20 transition-colors">
                    <Image
                        src={album}
                        alt="Album sofi tukker"
                        height={80}
                    />
                    <strong className="px-4">Sofi Tukker</strong>
                    <button className="flex ml-auto mr-3 invisible group-hover:visible">
                        <PlayCircle size={60} color="#FF00EA" weight="fill" />
                    </button>
                </a>
            </div>

            <div className="mt-8 font-semibold text-white text-2xl">
                Feito para RuanSou
            </div>

            <div className="grid grid-cols-7 gap-6 mt-5">
                <a href="#" className="flex flex-col gap-2 group bg-zinc-800/25 p-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors">
                    <div className="relative">
                        <Image  
                            src={descobertaDaSemana}
                            alt="Descobertas da semana"
                            height={190}
                            className="rounded"
                        />
                        <button className="absolute right-0 top-28 invisible group-hover:visible">
                            <PlayCircle size={60} color="#FF00EA" weight="fill" />
                        </button>
                    </div>
                    <strong className="mt-1 font-bold text-white">Descobertas da sem...</strong>
                    <span className="text-sm font-semibold text-zinc-500">Sua mixtape semanal cheia de novas descobertas e...</span>
                </a>
                <a href="#" className="flex flex-col gap-2 group bg-zinc-800/20 p-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors">
                    <div className="relative">
                        <Image
                            src={descobertaDaSemana}
                            alt="Descobertas da semana"
                            height={190}
                            className="rounded"
                        />
                        <button className="absolute right-0 top-28 invisible group-hover:visible">
                            <PlayCircle size={60} color="#FF00EA" weight="fill" />
                        </button>
                    </div>
                    <strong className="mt-1 font-bold text-white">Descobertas da sem...</strong>
                    <span className="text-sm font-semibold text-zinc-500">Sua mixtape semanal cheia de novas descobertas e...</span>
                </a>
                <a href="#" className="flex flex-col gap-2 group bg-zinc-800/20 p-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors">
                    <div className="relative">
                        <Image
                            src={descobertaDaSemana}
                            alt="Descobertas da semana"
                            height={190}
                            className="rounded"
                        />
                        <button className="absolute right-0 top-28 invisible group-hover:visible">
                            <PlayCircle size={60} color="#FF00EA" weight="fill" />
                        </button>
                    </div>
                    <strong className="mt-1 font-bold text-white">Descobertas da sem...</strong>
                    <span className="text-sm font-semibold text-zinc-500">Sua mixtape semanal cheia de novas descobertas e...</span>
                </a>
                <a href="#" className="flex flex-col gap-2 group bg-zinc-800/20 p-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors">
                    <div className="relative">
                        <Image
                            src={descobertaDaSemana}
                            alt="Descobertas da semana"
                            height={190}
                            className="rounded"
                        />
                        <button className="absolute right-0 top-28 invisible group-hover:visible">
                            <PlayCircle size={60} color="#FF00EA" weight="fill" />
                        </button>
                    </div>
                    <strong className="mt-1 font-bold text-white">Descobertas da sem...</strong>
                    <span className="text-sm font-semibold text-zinc-500">Sua mixtape semanal cheia de novas descobertas e...</span>
                </a>
                <a href="#" className="flex flex-col gap-2 group bg-zinc-800/20 p-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors">
                    <div className="relative">
                        <Image
                            src={descobertaDaSemana}
                            alt="Descobertas da semana"
                            height={190}
                            className="rounded"
                        />
                        <button className="absolute right-0 top-28 invisible group-hover:visible">
                            <PlayCircle size={60} color="#FF00EA" weight="fill" />
                        </button>
                    </div>
                    <strong className="mt-1 font-bold text-white">Descobertas da sem...</strong>
                    <span className="text-sm font-semibold text-zinc-500">Sua mixtape semanal cheia de novas descobertas e...</span>
                </a>
                <a href="#" className="flex flex-col gap-2 group bg-zinc-800/20 p-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors">
                    <div className="relative">
                        <Image
                            src={descobertaDaSemana}
                            alt="Descobertas da semana"
                            height={190}
                            className="rounded"
                        />
                        <button className="absolute right-0 top-28 invisible group-hover:visible">
                            <PlayCircle size={60} color="#FF00EA" weight="fill" />
                        </button>
                    </div>
                    <strong className="mt-1 font-bold text-white">Descobertas da sem...</strong>
                    <span className="text-sm font-semibold text-zinc-500">Sua mixtape semanal cheia de novas descobertas e...</span>
                </a>
                <a href="#" className="flex flex-col gap-2 group bg-zinc-800/20 p-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors">
                    <div className="relative">
                        <Image
                            src={descobertaDaSemana}
                            alt="Descobertas da semana"
                            height={190}
                            className="rounded"
                        />
                        <button className="absolute right-0 top-28 invisible group-hover:visible">
                            <PlayCircle size={60} color="#FF00EA" weight="fill" />
                        </button>
                    </div>
                    <strong className="mt-1 font-bold text-white">Descobertas da sem...</strong>
                    <span className="text-sm font-semibold text-zinc-500">Sua mixtape semanal cheia de novas descobertas e...</span>
                </a>
            </div>
        </main>
    )
}