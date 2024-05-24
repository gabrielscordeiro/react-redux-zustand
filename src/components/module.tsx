import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'

import { useStore } from '../store'
import { Lesson } from './Lesson'

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
} 

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {

    const { currentModuleIndex, currentLessonIndex, play, lessons } = useStore(store => {
        return {
            lessons: store.course?.modules[moduleIndex].lessons,
            currentModuleIndex: store.currentModuleIndex,
            currentLessonIndex: store.currentLessonIndex,
            play: store.play
        }
    })

    return (
        <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
            <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
                    {moduleIndex + 1}
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <strong className="text-sm">{title}</strong>
                    <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
                </div>

                <ChevronDown className="ml-auto size-5 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
            </Collapsible.Trigger>

            <Collapsible.Content>
                <nav className="relative flex flex-col gap-4 p-6">
                    {lessons && lessons.map((lesson, lessonIndex) => {
                        const isCurrent = currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex

                        return (
                            <Lesson
                                key={lesson.id}
                                title={lesson.title}
                                duration={lesson.duration}
                                isCurrent={isCurrent}
                                onPlay={() => play([moduleIndex, lessonIndex])}
                            />
                        )
                    })}
                </nav>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}
