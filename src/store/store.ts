import { configureStore, Store } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import navbarSlice from './features/navbar/navbarSlice'
import filter from './features/rankings-filter/filter'
import videos from './features/videos/videosSlice'


const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        filter:filter,
        videos

    },
})

export type RootState = ReturnType<typeof store.getState>
export default store
