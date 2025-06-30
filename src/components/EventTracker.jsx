// Hook para tracking de eventos
export const useEventTracker = () => {
  const trackEvent = (eventName, parameters = {}) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: 'engagement',
        ...parameters
      });
    }
  };

  const trackPageView = (pageTitle, pageLocation) => {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageTitle,
        page_location: pageLocation
      });
    }
  };

  const trackConversion = (plan, value) => {
    trackEvent('purchase', {
      event_category: 'ecommerce',
      event_label: plan,
      value: value,
      currency: 'BRL'
    });
  };

  const trackButtonClick = (buttonName, section) => {
    trackEvent('button_click', {
      event_label: buttonName,
      custom_parameter: section
    });
  };

  const trackScroll = (sectionName) => {
    trackEvent('scroll', {
      event_label: sectionName
    });
  };

  const trackTabChange = (tabName) => {
    trackEvent('tab_change', {
      event_label: tabName
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    trackButtonClick,
    trackScroll,
    trackTabChange
  };
};

// Componente para tracking automático de scroll
export const ScrollTracker = ({ children }) => {
  const { trackScroll } = useEventTracker();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'benefits', 'pricing', 'testimonials'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            trackScroll(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScroll]);

  return children;
}; 