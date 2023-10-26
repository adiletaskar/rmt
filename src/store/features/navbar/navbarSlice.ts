import { navbarType } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
export interface NavbarState {
    navbarItems: navbarType[]
}
const initialState: NavbarState = {
    navbarItems: [
        { id: 1, name: 'Content', link: '/', isActive: true },
        { id: 2, name: 'Community', link: '/community', isActive: false },
        {
            id: 3,
            name: 'Marketplace',
            link: '/marketplace',
            isActive: false,
        },
        { id: 4, name: 'Settings', link: '/settings', isActive: false },
        {
            id: 5,
            name: 'Your Channel',
            link: '/channel/1/content',
            isActive: false,
        },
    ],
}

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,

    reducers: {
        setNavbarActive: (state, { payload }) => {
            const newArr = state.navbarItems.map((item) => {
                if (item.id !== payload) return { ...item, isActive: false }
                else return { ...item, isActive: true }
            })
            state.navbarItems = newArr
        },
    },
})

export const { setNavbarActive } = navbarSlice.actions

export default navbarSlice.reducer
