import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Publicações/Publishing</>,
    description: (
      <>
        <b>[pt]</b> Toda Segunda e Sexta começando em 19/10/2020.
        <p>
        <b>[en]</b> Every Monday and Friday starting at 10/19/2020.
        </p>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--8 col--offset-2', styles.features2)}>
      <h3 className={styles.features2}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className={styles.coverContainer}>
      <h1 className={styles.title_text}>βCast</h1>
      <img src="img/logo.png" className={styles.opensource}/>
      {/* <img src="../../img_girl.jpg" alt="Girl in a jacket" width="500" height="600"> */}
      <h1 className={styles.header_text}>
                                  [pt_br] <br />
                                  Mas é só qualquer coisa sobre coisa alguma. <br />
                                  Pensamentos diários, ou não, sobre coisas "desimportantes".<br />
                                  De difícil compreensão para cegos, mas acessível em áudio e texto.<br /><br />
                                  [en] <br />
                                  But it's just anything, about something. <br />
                                  Daily thoughts, or not, about "unimportant" things. <br />
                                  Difficult to understand for the blind, but accessible in audio and text. </h1>

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
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://twitter.com/cast_beta')}>
              Twitter
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://medium.com/@betacastbeta')}>
              Medium
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://github.com/betacastbeta/site')}>
              Github
            </Link>

            <Link
              className={clsx(
                'button button--outline button--third button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('hello')}>
              Passado/Past
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
              <section className={styles.features}>
                <div className="container">
                  <div className="row">
                    {features.map((props, idx) => (
                      <Feature key={idx} {...props} />
                    ))}
                  </div>
                </div>
              </section>
            )}
      </main>
    </Layout>
  );
}

export default Home;
