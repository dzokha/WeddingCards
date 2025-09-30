
import { Helmet } from 'react-helmet'; // add dependency react-helmet if desired

interface Props { 
  title?: string; 
  description?: string; 
}

const SEO: React.FC<Props> = ({ title = 'WeddingCards', description }) => (
  // if you don't want react-helmet, replace by direct document.title manip
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
  </Helmet>
);

export default SEO;
