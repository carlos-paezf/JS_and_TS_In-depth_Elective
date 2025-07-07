import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentación accesible',
    Svg: require( '@site/static/img/undraw_docusaurus_mountain.svg' ).default,
    description: (
      <>
        Documentación abierta para estudiantes, profesores y entusiastas de la
        informática. Aprende sobre JavaScript y TypeScript en un
        entorno colaborativo y accesible.
      </>
    ),
  },
  {
    title: 'Aprende a tu ritmo',
    Svg: require( '@site/static/img/undraw_docusaurus_tree.svg' ).default,
    description: (
      <>
        Aprende a tu propio ritmo con ejemplos prácticos. La
        documentación está diseñada para ser fácil de seguir y entender.
      </>
    ),
  },
  {
    title: 'Repositorio abierto',
    Svg: require( '@site/static/img/undraw_docusaurus_react.svg' ).default,
    description: (
      <>
        Contribuye al proyecto y mejora la documentación. Tu participación es
        valiosa y ayuda a construir una comunidad más fuerte.
      </>
    ),
  },
];

function Feature ( { title, Svg, description }: FeatureItem ) {
  return (
    <div className={ clsx( 'col col--4' ) }>
      <div className="text--center">
        <Svg className={ styles.featureSvg } role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{ title }</Heading>
        <p>{ description }</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures (): ReactNode {
  return (
    <section className={ styles.features }>
      <div className="container">
        <div className="row">
          { FeatureList.map( ( props, idx ) => (
            <Feature key={ idx } { ...props } />
          ) ) }
        </div>
      </div>
    </section>
  );
}
