import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../store'
import { next } from '../store/slices/player.ts'

export function Video(){
    const dispatch = useDispatch()

    const lesson = useAppSelector(state => {
        const { currentModuleIndex, currentLessonIndex } =  state.player

        const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

        return currentLesson
    })

    function handlePlayNext() {
        dispatch(next())
    }

    return (
        <div className="aspect-video w-full bg-zinc-950">
            <ReactPlayer
                width="100%"
                height="100%"
                controls
                playing
                onEnded={handlePlayNext}
                url={`https://www.youtube.com/watch?v=${lesson.id}`}
            />
        </div>
    )
}