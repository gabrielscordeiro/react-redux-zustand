import { ChevronDown, MessageCircle, Video } from 'lucide-react'
import ReactPlayer from 'react-player'

export function Player() {
    return (
        <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
            <div className="flex w-[1100px] flex-col gap-6">
                <div className="flex items-center justify-between">

                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">
                            Fundamentos do Redux
                        </h1>
                        <span className="text-sm text-zinc-400">
                            Módulo "Desvendando o Redux"
                        </span>
                    </div>

                    <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
                        <MessageCircle className="size-4" />
                        Deixar feedback
                    </button>
                </div>

                <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
                    <div className="flex-1">
                        <div className="aspect-video w-full bg-zinc-950">
                            <ReactPlayer
                                width="100%"
                                height="100%"
                                controls
                                url="https://www.youtube.com/watch?v=v1DhQl0lYsA"
                            />
                        </div>
                    </div>

                    <aside className="w-80 border-l border-zinc-800 bg-zinc-900">
                        <div>
                            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                                <div className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-sm">1</div>

                                <div className="flex flex-col gap-1 text-left">
                                    <strong>Desvendando o Redux</strong>
                                    <span className="text-sm text-zinc-400">12 aulas</span>
                                </div>

                                <ChevronDown className="ml-auto size-5 text-zinc-400"/>
                            </button>

                            <nav className="relative flex flex-col gap-4 p-6">
                                <button className="flex items-center gap-3 text-sm text-zinc-400">
                                    <Video className="size-4 text-zinc-500"/>
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-zinc-500">09:33</span>
                                </button>

                                <button className="flex items-center gap-3 text-sm text-zinc-400">
                                    <Video className="size-4 text-zinc-500"/>
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-zinc-500">09:33</span>
                                </button>

                                <button className="flex items-center gap-3 text-sm text-zinc-400">
                                    <Video className="size-4 text-zinc-500"/>
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-zinc-500">09:33</span>
                                </button>
                            </nav>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    )
}