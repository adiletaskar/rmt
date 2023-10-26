import Image from 'next/image'
import styles from './Header.module.scss'

import logoImg from '@/assets/icons/logo.svg'
import chatImg from '@/assets/icons/chat.svg'
import arrowImg from '@/assets/icons/arrow-down.svg'
import avatarImg from '@/assets/icons/profile.svg'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setNavbarActive } from '@/store/features/navbar/navbarSlice'
// import arrowLeftImg from '@/assets/icons/back.svg'

const Header = ({ ...rest }) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.header} {...rest}>
            <div className={styles.header__logo}></div>
            {/* <div className={styles.navigation}>
                <Image width={25} height={50} src={arrowLeftImg} alt="back" />
                <Image width={25} height={50} src={arrowLeftImg} alt="back" />
            </div> */}

            <div className={styles.header__right}>
                <div className={styles.header__right_icons}>
                    <Image width={30} height={30} src={chatImg} alt="chat" />
                    <Image
                        width={45}
                        height={45}
                        src={avatarImg}
                        alt="avatar"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
