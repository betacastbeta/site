import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function ProjectTitle() {
  return (
    <div className={styles.coverContainer}>
      {/* <img src="img/bg-3.png" className={styles.cover} /> */}
      <h1 className={styles.title_text}>multiCast</h1>
      <h1 className={styles.header_text}>Mas é só qualquer coisa, sobre alguma coisa. <br />
                                  Pensamentos diários, ou não, sobre coisas "desimportantes".<br />
                                  De difícil compreensão para cegos, mas acessível em áudio e texto.</h1>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`whathafuck!?`}
      description="don't know <head />">
      <header className={styles.background}>
        <div className="container">
        <ProjectTitle />
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('sprints/sprint-intro')}>
              Lista What's App
            </Link>
            <Link
              className={clsx(
                'button button--outline button--third button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('recomendacoes/recomendacoes-hello')}>
              Arquivo
            </Link>
          </div>
        </div>
      </header>
      <main>
      </main>
    </Layout>
  );
}

export default Home;
