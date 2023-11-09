import { ChangeEventHandler, MouseEventHandler } from 'react';

import SearchIcon from '@/assets/svg/search';

import styles from './styles.module.css';

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>,
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Search = ({onClick, onChange}: Props) => {
  return (
    <div className={styles.box}>
        <SearchIcon className={styles.icon} />
        <input type="text" className={styles.input} onChange={onChange} placeholder='Digite o usuário que deseja pesquisar' />
        <button className={styles.button} onClick={onClick}>search</button>
    </div>
  )
}

export default Search;