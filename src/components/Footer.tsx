import { ArrowUDownLeft, CaretLeft, CaretRight, DesktopTower, HeartStraight, ImageSquare, PauseCircle, Queue, Shuffle, SpeakerHigh } from "@phosphor-icons/react";
import  descobertaDaSemana  from '../../public/descobertaDaSemana.jpg'
import Image from "next/image";

export function Footer(){
    return(
        <footer className="h-ww bg-zinc-900 border-t border-zinc-800 items-center grid grid-cols-3 pl-4">
            <div className="flex">
                <div className="flex items-center text-sm font-sans font-light text-white gap-4">
                    <Image
                        src={descobertaDaSemana}
                        alt="Descobertas da semana"
                        height={56}
                    />
                    <div className="flex flex-col">
                        <a href="#" className="hover:underline">
                            <strong>Brazilian Soul (feat, Sofi Tukker) - Acoustic Bossa Version</strong>
                        </a >
                        <div className="flex gap-1">
                            <a href="#" className="text-xs text-zinc-400 hover:underline hover:text-white transition-colors">
                                <strong>The Knocks,</strong>
                            </a>
                            <a href="#" className="text-xs text-zinc-400 hover:underline hover:text-white transition-colors">
                                <strong>Sofi Tukker</strong>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center group ml-8">
                        <button className="">
                            <HeartStraight size={20} color="#ff00ea" weight="fill" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center group">
                        <button className="">
                            <ImageSquare size={20} color="#f2f2f2" weight="fill" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center space-y-1 pb-1 mr-4">    
                <div className="flex items-center">
                    <button className="px-2">
                        <Shuffle size={22} color="#ff00ea" weight="fill" />
                    </button>
                    <button className="px-2">
                        <CaretLeft size={28} color="#ff00ea" weight="fill"/>
                    </button>
                    <button className="px-1">
                        <PauseCircle size={40} color="#ff00ea" weight="fill" />
                    </button>
                    <button className="px-2">
                        <CaretRight size={28} color="#ff00ea" weight="fill" />
                    </button>
                    <button className="px-2">
                        <ArrowUDownLeft size={22} color="#ff00ea" weight="fill" />
                    </button>
                </div> 
                <div className="flex items-center gap-2 text-zinc-400 text-xs font-sans font-normal">
                    <span>0:51</span>
                    <div className="h-1 rounded-full w-eg bg-zinc-600">
                        <div className="bg-zinc-200 w-40 h-1 rounded-full"/>
                    </div>
                    <span>4:21</span>
                </div>
            </div>

            <div className="flex justify-end items-center gap-3 pr-5">
                <div className="flex group items-center">
                    <button>
                        <Queue size={22} color="#ff00ea" weight="light"/>
                    </button>
                </div>
                <div className="flex group items-center">
                    <button className="">
                        <DesktopTower size={22} color="#ff00ea" weight="light"/>
                    </button>
                </div> 
                <div className="flex gap-1 group items-center">
                    <button className="">
                        <SpeakerHigh size={22} color="#ff00ea" weight="light"/>
                    </button>
                    <button className="bg-zinc-200 w-ex h-1 rounded-full"/>
                </div> 
            </div>
        </footer>
    )
}