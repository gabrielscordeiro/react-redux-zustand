import { ChevronDown } from 'lucide-react'

import { Lesson } from './lesson.tsx'

interface ModuleProps {
    moduleIndex: number
    title: string
    lessonsAmount: number
}

export function Module({
    moduleIndex,
    title,
    lessonsAmount
}: ModuleProps) {
    return (
        <div>
            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-sm">
                    {moduleIndex + 1}
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <strong>{title}</strong>
                    <span className="text-sm text-zinc-400">{lessonsAmount} aulas</span>
                </div>

                <ChevronDown className="ml-auto size-5 text-zinc-400"/>
            </button>

            <nav className="relative flex flex-col gap-4 p-6">
                <Lesson title="Fundamentos do Redux" duration="09:33"/>
                <Lesson title="Fundamentos do Redux" duration="09:33"/>
                <Lesson title="Fundamentos do Redux" duration="09:33"/>
            </nav>
        </div>
    )
}