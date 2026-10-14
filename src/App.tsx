import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './routes/HomePage';
import { ExplorePage } from './routes/ExplorePage';
import { IndustriesPage } from './routes/IndustriesPage';
import { TemplateDetailPage } from './routes/TemplateDetailPage';
import { EditorPage } from './routes/EditorPage';
import { ComponentLibraryPage } from './routes/ComponentLibraryPage';
import { ColorSystemsPage } from './routes/ColorSystemsPage';
import { FavoritesPage } from './routes/FavoritesPage';

// Public layout wrapper with Navbar & Footer
const MarketplaceLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketplace Routes with persistent Navigation and Footer */}
        <Route element={<MarketplaceLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/template/:templateId" element={<TemplateDetailPage />} />
          <Route path="/components" element={<ComponentLibraryPage />} />
          <Route path="/color-systems" element={<ColorSystemsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>

        {/* Visual Studio Editor Routes (Distraction-Free) */}
        <Route path="/editor/:templateId" element={<EditorPage />} />
        <Route path="/editor" element={<Navigate to="/editor/dermatology-luxury-01" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
