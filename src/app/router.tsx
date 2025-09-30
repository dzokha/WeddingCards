import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import WeddingCard from '@pages/WeddingCard';
import NotFound from '@pages/NotFound';

export const Router: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<WeddingCard />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
