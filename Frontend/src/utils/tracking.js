// UTM and Analytics Tracking Utilities

/**
 * Get UTM parameters from URL
 */
export const getUTMParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
    utmTerm: params.get('utm_term') || '',
    utmContent: params.get('utm_content') || '',
  };
};

/**
 * Determine traffic source
 */
export const getSource = () => {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source');
  const referrer = document.referrer;

  if (utmSource) {
    if (utmSource.includes('facebook') || utmSource.includes('fb') || utmSource.includes('meta')) {
      return 'Meta Ads';
    }
    if (utmSource.includes('google')) {
      return 'Google';
    }
    return 'Other';
  }

  if (referrer) {
    if (referrer.includes('google')) return 'Google';
    if (referrer.includes('facebook') || referrer.includes('fb')) return 'Meta Ads';
    return 'Referral';
  }

  return 'Direct';
};

/**
 * Get all tracking data
 */
export const getTrackingData = () => {
  return {
    ...getUTMParams(),
    source: getSource(),
    landingPage: window.location.pathname,
    referrer: document.referrer || '',
  };
};

/**
 * Fire Meta Pixel Lead Event
 */
export const fireMetaPixelLead = (data = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: data.serviceType || 'General Inquiry',
      content_category: data.serviceType || 'Lead',
      value: 1,
      currency: 'INR',
    });
  }
};

/**
 * Fire Google Analytics Event
 */
export const fireGAEvent = (eventName, data = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Lead',
      event_label: data.serviceType || 'General',
      value: 1,
      ...data,
    });
  }
};

/**
 * Track form submission
 */
export const trackFormSubmission = (serviceType, formData) => {
  // Fire Meta Pixel
  fireMetaPixelLead({ serviceType });

  // Fire Google Analytics
  fireGAEvent('generate_lead', {
    serviceType,
    source: formData.source,
  });

  // Console log for debugging (remove in production)
  console.log('Lead tracked:', { serviceType, source: formData.source });
};

/**
 * Generate WhatsApp message with lead summary
 */
export const generateWhatsAppMessage = (formData, serviceType) => {
  const serviceName = {
    'MBBS_INDIA': 'MBBS in India',
    'MBBS_ABROAD': 'MBBS Abroad',
    'STUDY_ABROAD': 'Study Abroad',
    'WORK_ABROAD': 'Work Abroad',
  }[serviceType] || serviceType;

  let message = `Hi! I just submitted an inquiry for *${serviceName}* on your website.\n\n`;
  message += `*Name:* ${formData.fullName}\n`;
  message += `*Phone:* ${formData.phone}\n`;
  message += `*Email:* ${formData.email}\n`;

  if (formData.city) message += `*City:* ${formData.city}\n`;

  return encodeURIComponent(message);
};

/**
 * Open WhatsApp with pre-filled message
 */
export const openWhatsApp = (formData, serviceType, phoneNumber = '919876543210') => {
  const message = generateWhatsAppMessage(formData, serviceType);
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};
