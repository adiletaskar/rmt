import Image from 'next/image'
import styles from './Header.module.scss'

import logoImg from '@/assets/icons/logo.svg'
import chatImg from '@/assets/icons/chat.svg'
import arrowImg from '@/assets/icons/arrow-down.svg'
import avatarImg from '@/assets/icons/profile.svg'
// import arrowLeftImg from '@/assets/icons/back.svg'

const Header = () => {
    const dropdownItems = ['WALLET', 'WLS', 'AIRDROP']

    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <Image width={150} height={46} src={logoImg} alt="logo" />
            </div>
            {/* <div className={styles.navigation}>
                <Image width={25} height={50} src={arrowLeftImg} alt="back" />
                <Image width={25} height={50} src={arrowLeftImg} alt="back" />
            </div> */}
            <div className={styles.header__search}>
                <input
                    type="text"
                    placeholder="Search Channels, Videos or NFTs"
                />
            </div>
            <div className={styles.header__right}>
                <ul className={styles.header__right_dropdowns}>
                    {dropdownItems.map((item, idx) => (
                        <li
                            key={idx}
                            className={styles.header__right_dropdowns_item}
                        >
                            {item}
                            <Image
                                width={20}
                                height={20}
                                src={arrowImg}
                                alt="arrow"
                            />
                        </li>
                    ))}
                </ul>
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
