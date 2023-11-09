import Image from 'next/image';

import { User } from '@/core/domain';

import styles from './styles.module.css';

type Props = {
    user: User
}

export const UserInfo = ({ user }: Props) => {

    const factoryDate = (dateString: string): string => {
        const date = new Date(dateString);
        const getMonth = date.toLocaleString('pt-BR', {
            month: 'long',
        });
        return `${date.getDay()} ${getMonth} ${date.getFullYear()}`
    }

    return (
        <div className={styles.box}>
            <div>
            <Image
                src={user.avatar_url}
                alt="Picture of the author"
                className={styles.image}
                width={130}
                height={130}
            />
            </div>
            <div className={styles.content}>
                <div className={styles.alignTextTitle}>
                    <div className={styles.alignTitle}>
                        <h2 className={styles.title}>{user?.name}</h2>
                        <a href={user.html_url} target='_blank' className={styles.link}>{user.html_url}</a>
                    </div>
                    <p className={styles.dateInfo}>Joined {factoryDate(user.created_at)}</p>
                </div>
                <p>{user.bio}</p>
                <div className={styles.userStatus}>
                    <div className={styles.status}>
                        <h4 className={styles.statusTitle}>Repos</h4>
                        <p className={styles.statusInfo}>{user.public_repos}</p>
                    </div>
                    <div className={styles.status}>
                        <h4 className={styles.statusTitle}>Followers</h4>
                        <p className={styles.statusInfo}>{user.followers}</p>
                    </div>
                    <div className={styles.status}>
                        <h4 className={styles.statusTitle}>Following</h4>
                        <p className={styles.statusInfo}>{user.following}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;