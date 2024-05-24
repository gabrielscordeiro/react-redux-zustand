import { Loader } from 'lucide-react'
import ReactPlayer from 'react-player'

import { useCurrentLesson, useStore } from '../store'

export function Video() {
    const { currentLesson } = useCurrentLesson()

    const { isLoading, next } = useStore(store => {
        return {
            isLoading: store.isLoading,
            next: store.next
        }
    })

    function handlePlayNext() {
        next()
    }

    return (
        <div className="aspect-video w-full bg-zinc-950">
            {isLoading ? (
                <div className="flex h-full items-center justify-center">
                    <Loader className="size-6 animate-spin text-zinc-400" />
                </div>
            ) : (
                <ReactPlayer
                    width="100%"
                    height="100%"
                    controls
                    playing
                    onEnded={handlePlayNext}
                    url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
                />
            )}
        </div>
    )
}
