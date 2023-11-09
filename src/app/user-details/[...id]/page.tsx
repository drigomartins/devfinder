"use client";
import { useEffect, useState } from 'react';

import { ListData, RepositoryData, User } from '@/core/domain';

import { findRepos, findUser } from '@/core/infra';

import Header from '@/core/components/header';
import UserInfo from '@/core/components/user-info';
import List from '@/core/components/list';

import styles from './styles.module.css';

export default function UserDetails({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState< '' | 'true' | 'false' >('');
  const [user, setUser] = useState<User>();
  const [repositories, setRepositories] = useState<ListData[]>();

  const factoryRepositoryList = (user: RepositoryData[]): ListData[] => {
    const factoryUser = user.map((data: any) => ({ title: data.name, desc: data.description, route: `/repository-details/${params.id}/${data.name}`, id: data.id }))
    return factoryUser
  }

  const getUser = (name: string): void => {
    findUser(name)
      .then((data: User) => {
        setUser(data);
      })
  }

  const getRepositories = (name: string): void => {
    setLoading('true');
    findRepos(name)
      .then((data: RepositoryData[]) => {
        const factoryData = factoryRepositoryList(data)
        setRepositories(factoryData);
      })
      .finally(() => {
        setLoading('false');
      })
  }

  useEffect(() => {
    getUser(params.id);
    getRepositories(params.id);
  },[])

  return (
    <section>
        <Header />
        {user && <UserInfo user={user} />}
        {loading === 'false' && <h2 className={styles.title}>Repositories</h2>}
        {loading === 'false' && <List className={styles.list} height={400} list={repositories} />}
        {loading === 'true' && <p className={styles.alignCenter}>Carregando....</p>}
    </section>
  )
}
