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
      <h1 className={styles.title_text}>βCast</h1>
      <img src="img/logo.png" className={styles.opensource}/>
      {/* <img src="../../img_girl.jpg" alt="Girl in a jacket" width="500" height="600"> */}
      <h1 className={styles.header_text}>Mas é só qualquer coisa sobre coisa alguma. <br />
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
          <div className={'button--div', styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://whats.link/betacast1')}>
              Lista What's App
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://www.instagram.com/betacastbeta/')}>
              Instagram
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://www.youtube.com/channel/UCQ70im76p8hYpCIC_ea3N6w/')}>
              YouTube
            </Link>
            <Link
              className={clsx(
                'button button--outline button--third button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('arquivo/hello')}>
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
