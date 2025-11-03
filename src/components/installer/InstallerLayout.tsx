import React from 'react';
import InstallerHeader from './InstallerHeader';
import InstallerNavigation from './InstallerNavigation';
import InstallerTableOfContents from './InstallerTableOfContents';
import InstallerFooter from './InstallerFooter';

interface InstallerLayoutProps {
  children: React.ReactNode;
  activeTab: 'apps' | 'server';
  onTabChange: (tab: 'apps' | 'server') => void;
}

export default function InstallerLayout({ children, activeTab, onTabChange }: InstallerLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <InstallerHeader />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Navigation - Hidden on mobile, visible on md+ */}
        <div className="hidden md:block w-64 overflow-y-auto">
          <InstallerNavigation activeTab={activeTab} onTabChange={onTabChange} />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-neutral-900">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
            {children}
          </div>
        </main>
        
        {/* Right Table of Contents - Hidden on mobile and tablet, visible on lg+ */}
        <div className="hidden lg:block w-64 overflow-y-auto">
          <InstallerTableOfContents activeTab={activeTab} />
        </div>
      </div>
      
      <InstallerFooter />
    </div>
  );
}
