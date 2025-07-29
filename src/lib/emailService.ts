import emailjs from '@emailjs/browser';

// Initialize counter in localStorage if not exists
const initializeQueryCounter = () => {
  if (!localStorage.getItem('queryCounter')) {
    localStorage.setItem('queryCounter', '1');
  }
};

// Get and increment query number
const getNextQueryNumber = () => {
  initializeQueryCounter();
  const currentCounter = parseInt(localStorage.getItem('queryCounter') || '1');
  localStorage.setItem('queryCounter', (currentCounter + 1).toString());
  return currentCounter;
};

// Format query number with leading zeros
const formatQueryNumber = (num: number) => {
  return `ZEN-${new Date().getFullYear()}-${num.toString().padStart(4, '0')}`;
};

export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const queryNumber = formatQueryNumber(getNextQueryNumber());

  try {
    // Initialize EmailJS
    emailjs.init("B5E58zYnjkDmVgrBb");

    const baseTemplateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_message: formData.message,
      user_subject: formData.subject,
      query_id: queryNumber,
      reply_to: formData.email,
      timestamp: new Date().toLocaleString(),
    };

    // Send to zenista2k25@gmail.com
    const zenistaParams = {
      ...baseTemplateParams,
      email: 'zenista2k25@gmail.com',
    };
    const response1 = await emailjs.send(
      "service_bskti2b",
      "template_ku8c0wk",
      zenistaParams,
      "B5E58zYnjkDmVgrBb"
    );

    // Send to mdirreef@gmail.com
    const irreefParams = {
      ...baseTemplateParams,
      email: 'mdirreef@gmail.com',
    };
    const response2 = await emailjs.send(
      "service_bskti2b",
      "template_ku8c0wk",
      irreefParams,
      "B5E58zYnjkDmVgrBb"
    );

    if (response1.status !== 200 || response2.status !== 200) {
      throw new Error('Failed to send email to one or more recipients');
    }

    return { success: true, queryNumber };
  } catch (error) {
    throw error;
  }
};
