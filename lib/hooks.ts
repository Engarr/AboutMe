import { useActiveSectionContext } from '@/context/activeSection';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionNameType } from './types';


export function useSectionInView(
  SectionName: SectionNameType,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(SectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, SectionName]);
  
  return {
    ref,
  };
}
