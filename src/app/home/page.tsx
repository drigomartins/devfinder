"use client";
import { useState } from 'react';

import { ListData, User } from '@/core/domain';

import { findUserByName } from '@/core/infra';

import Search from '@/core/components/search';
import Header from '@/core/components/header';
import List from '@/core/components/list';

import styles from './styles.module.css';

export default function Home() {
  const [loading, setLoading] = useState< '' | 'true' | 'false' >('');
  const [search, setSearch] = useState<string>('');
  const [user, setUser] = useState<ListData[]>();

  const factoryUserList = (user: User[]): ListData[] => {
    const factoryUser = user.map((data: User) => ({ title: data.login, route: `user-details/${data.login}`, id: data.id }))
    return factoryUser
  }

  const searchUser = (): void => {
    setLoading('true');
    findUserByName(search)
      .then((data) => {
        const factoryData = factoryUserList(data.items)
        setUser(factoryData);
      })
      .finally(() => {
        setLoading('false');
      })
  }

  const setSearchValue = (data: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(data.target.value)
  }

  return (
    <section>
        <Header />
        <Search onChange={setSearchValue} onClick={searchUser} />
        {loading === 'false' && <h2 className={styles.title}>Users</h2>}
        {loading === 'false' && <List className={styles.list} height={600} list={user} />}
        {loading === 'true' && <p className={styles.alignCenter}>Carregando....</p>}
    </section>
  )
}