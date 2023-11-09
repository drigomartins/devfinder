import ArrowIcon from '@/assets/svg/arrow';

import styles from './styles.module.css';
import Link from 'next/link';

export const List = (props: any) => {
  const { list } = props;
  
  return (
    <div {...props}>
        <div className={styles.box} style={{maxHeight: props.height}}>
          {list?.map((item: any) => (
            <Link href={`${item.route}`} className={styles.item} key={item.id}>
              <div>
                <h2 className={styles.title}>{item.title}</h2>
                {item?.desc && <p className={styles.subtitle}>{item?.desc}</p>}
              </div>
              <ArrowIcon className={styles.arrow} />
            </Link>
          )) || <p className={styles.alignCenter}>Por favor, tente novamente!</p>}
        </div>
    </div>
  )
}

export default List;