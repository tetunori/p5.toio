import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/easy.svg',
    description: (
      <>
        p5.toio was designed from the ground up to be easily integrated and
        used to control toio™Core Cube in p5.js simply and quickly.
      </>
    ),
  },
  {
    title: <>Focus on What You Create</>,
    imageUrl: 'img/focus.svg',
    description: (
      <>
        p5.toio lets you focus on your creativity, and we&apos;ll do the chores. 
        A lot of usuful APIs and utilities are included in this treasure box.
      </>
    ),
  },
  {
    title: <>Powered by Web Bluetooth</>,
    imageUrl: 'img/powered.svg',
    description: (
      <>
        Since p5.toio was implemented based on Web Bluetooth, you can start programming toio™Core Cube 
        by simply accessing the URL from your browser 
        and it runs on many devices, including Windows, Mac and Android.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`toio lib for p5.js`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--4')}>
              <img className={styles.heroImg} src="img/logo.png" />
            </div>
            <div className={classnames('col col--6')}>
              <h1 className="hero__title">Control toio™Core Cube in p5.js instantly</h1>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    'button button--secondary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/')}>
                  Get Started
                </Link>
              </div>
            </div>
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
