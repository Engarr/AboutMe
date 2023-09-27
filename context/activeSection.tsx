'use client';

import { useState, createContext, useContext } from 'react';
import type { SectionNameType } from '@/lib/types';

type ContextProviderType = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionNameType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNameType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({ children }: ContextProviderType) => {
  const [activeSection, setActiveSection] = useState<SectionNameType>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }

  return context;
};
