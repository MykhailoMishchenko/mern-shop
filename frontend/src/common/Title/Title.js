import React from "react";
import { Helmet } from 'react-helmet'

const Title = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Title.defaultProps = {
  title: 'Онлайн магазин',
  description: 'Магазин аксессуаров',
  keywords: 'Очки'
}

export default Title;
