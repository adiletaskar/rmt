import Image from 'next/image'
import { setNavbarActive } from '@/store/features/navbar/navbarSlice'
import { RootState } from '@/store/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Navbar.module.scss'

import contentIcon from '../../assets/icons/nav-content.png'
import communityIcon from '../../assets/icons/nav-community.png'
import marketplaceIcon from '../../assets/icons/nav-marketplace.png'
import settingsIcon from '../../assets/icons/nav-settings.png'

const navMainIconsPaths = [
    contentIcon,
    communityIcon,
    marketplaceIcon,
    settingsIcon,
]

const Navbar = ({ ...rest }) => {
    const dispatch = useDispatch()
    const { navbarItems } = useSelector((store: RootState) => store.navbar)

    let navItems = navbarItems

    return (
        <ul className={styles.navbar} {...rest}>
            {navItems.map((item, index) => {
                const { id, name, link, isActive } = item
                return (
                    <Link
                        href={link}
                        key={id}
                        onClick={() => {
                            dispatch(setNavbarActive(id))
                        }}
                    >
                        <li className={isActive ? styles.active : ''}>
                            <span>{name}</span>
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default Navbar
