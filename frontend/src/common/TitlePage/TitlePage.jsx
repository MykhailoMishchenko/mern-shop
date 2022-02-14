import React from "react"
import {Helmet} from "react-helmet";

const TitlePage = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

TitlePage.defaultProps = {
  title: 'Онлайн магазин',
  description: 'Магазин аксессуаров',
  keywords: 'Очки'
}

export default TitlePage;