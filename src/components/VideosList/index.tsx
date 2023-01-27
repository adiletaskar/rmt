import { RootState } from '@/store/store'
import Image from 'next/image'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import style from './VideosList.module.scss'

const VideoList: FC = () => {
    const videos = useSelector((store: RootState) => store.videos.videos)
    return (
        <div className={style.video__list}>
            {videos.map((item) => {
                return (
                    <section key={item.id} className={style.video__item}>
                        <Image
                            src={item.poster}
                            width={187}
                            height={108}
                            alt="img"
                            className={style.video_img}
                        />
                        <div className={style.video_info}>
                            <div className={style.title}>{item.title}</div>
                            <div className={style.video_info__footer}>
                                <span className={style.author}>{item.channel}</span>
                                <div className={style.video_stat__list}>
                                    <span className={style.video_stat__item}>
                                        100 345
                                    </span>
                                    <span className={style.video_stat__item}>
                                        2 days ago
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

export default VideoList
