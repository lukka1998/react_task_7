import React from 'react';
import FaqQuestion from '../FaqQuestion/FaqQuestion';

const FaQList = () => {
  const faqs = [
    { question: 'How many team members can I invite?', answer: 'No more than 2GB. All files in your account must fit your allotted storage space.' },
    { question: 'What is the maximum file upload size?', answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'},
    { question: 'How do I reset my password?', answer: 'No more than 2GB. All files in your account must fit your allotted storage space.' },
    { question: 'Can I cancel my subscription?', answer: 'No more than 2GB. All files in your account must fit your allotted storage space.' },
    { question: 'Do you provide additional support?', answer: 'No more than 2GB. All files in your account must fit your allotted storage space.' },

    

      
  ];

  return (
    <div style={{display:"flex" ,justifyContent:"center" , alignItems:"flex-start" ,flexDirection:"column" ,gap:"20px"  }} >
      <h1>FAQ</h1>
      { faqs.map((faq, index) => (
        <FaqQuestion key={index} question={faq.question} answer={faq.answer} />
      ))}
      
    </div>
  );
};

export default FaQList;
