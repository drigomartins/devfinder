"use client";
import { useEffect, useState } from 'react';

import { RepositoryData } from '@/core/domain';

import { findRepo } from '@/core/infra';

import Header from '@/core/components/header';
import StarIcon from '@/assets/svg/star';

import styles from './styles.module.css';

export default function RepositoryDetails({ params }: { params: { id: string[] } }) {
  const [loading, setLoading] = useState< '' | 'true' | 'false' >('');
  const [repository, setRepository] = useState<RepositoryData>();

  const getRepository = (data: string[]): void => {
    setLoading('true');
    findRepo(data[0],data[1])
      .then((data: RepositoryData) => {
        setRepository(data);
      })
      .finally(() => {
        setLoading('false');
      })
  }

  useEffect(() => {
    getRepository(params.id);
  },[])
  
  return (
    <section>
      <Header />
      {loading === 'false' && (<><div className={styles.box}>
        <div className={styles.alignTextTitle}>
          <div className={styles.alignTitle}>
            <h2 className={styles.title}>{repository?.name}</h2>
            <p>{repository?.description}</p>
          </div>
          <div className={styles.alignStar}>
            <StarIcon className={styles.star} fill="#f1e05a" />
            <p className={styles.starInfo}>{repository?.forks}</p>
          </div>
        </div>
        {repository?.language && <h4 className={styles.subtitle}>Languages</h4>}
        {repository?.language && <div className={styles.languages}>
          <span className={styles.languageItem}>{repository.language}</span>
        </div>}
      </div><div className={styles.boxLink}>
          <a href={repository?.html_url} target='_blank' className={styles.link}>Acessar</a>
        </div></>
    )}
    {loading === 'true' && <p className={styles.alignCenter}>Carregando....</p>}
    </section>
  )
}