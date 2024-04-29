import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../store'
import { play } from '../store/slices/player.ts'
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
    const lessons = useAppSelector((state) => {
        return state.player.course.modules[moduleIndex].lessons
    })

    const { currentModuleIndex, currentLessonIndex } = useAppSelector(state => {
        const { currentModuleIndex, currentLessonIndex } = state.player

        return { currentModuleIndex, currentLessonIndex }
    })

    const dispatch = useDispatch()

    return (
        <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
            <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-sm">
                    {moduleIndex + 1}
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <strong>{title}</strong>
                    <span className="text-sm text-zinc-400">{lessonsAmount} aulas</span>
                </div>

                <ChevronDown className="ml-auto size-5 text-zinc-400 transition-transform group-data-[state=open]:rotate-180"/>
            </Collapsible.Trigger>

            <Collapsible.Content>

                <nav className="relative flex flex-col gap-4 p-6">
                    {lessons.map((lesson, lessonIndex) => {
                        const isCurrent = currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex

                        return (
                            <Lesson
                                key={lesson.id}
                                title={lesson.title}
                                duration={lesson.duration}
                                onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                                isCurrent={isCurrent}
                            />
                        )
                    })}
                </nav>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}