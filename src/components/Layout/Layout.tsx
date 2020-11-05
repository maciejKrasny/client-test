import * as React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { GridContainer } from '../Grid/Grid.styled';

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({
  children,
  title = 'Default title',
}) => (
  <GridContainer>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <Header />
    {children}
    <Footer />
  </GridContainer>
);

export default Layout;
