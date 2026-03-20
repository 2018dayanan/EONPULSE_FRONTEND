import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import BlogArticle from './src/components/BlogArticle.jsx';

const html = renderToString(
  <MemoryRouter initialEntries={['/blog/1']}>
    <Routes>
      <Route path="/blog/:id" element={<BlogArticle />} />
    </Routes>
  </MemoryRouter>
);

console.log('HTML Output:');
console.log(html);
