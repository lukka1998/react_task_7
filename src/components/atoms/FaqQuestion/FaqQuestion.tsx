import React, { useState } from 'react';
import image from "../../../assets/Path 2.png"
interface FaqQuestionProps {
  question: string;
  answer: string;
}

const FaqQuestion: React.FC<FaqQuestionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAnswer = () => {
    setIsOpen(prevState => !prevState); // true = false // false = true
  };

  const arrowStyle = {
    transition: 'transform 0.3s ease',  // Smooth transition
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',  // Conditional rotation
  };
  const styles1 = {
   color: isOpen ? 'black': "#4B4C5F",
  fontFamily: '"Kumbh Sans"',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: isOpen? 600:400,
  lineHeight: 'normal' ,
  
  }
  return (
    <div > 
      <div style={{display:"flex" , width:"350px",justifyContent:"space-between" ,alignItems:"center" , marginBottom:"20px" ,cursor:"pointer" }} onClick={toggleAnswer} > 
        {/* yuveli ckick is shemdeg isopen icvlis mnishvnelobas */}
        <h3    onMouseEnter={(e) => {
       
       if (!isOpen) {
         e.currentTarget.style.color = '#F47B56'
       }}} 
       onMouseLeave={(e) => {
         if (!isOpen) {
           e.currentTarget.style.color = "#4B4C5F" 
         }
       }} style={styles1}>{question}</h3>
        <img  style={arrowStyle} src={image} alt="" />
      </div>
      {isOpen && <p  style={{display:"flex" , justifyContent:"center" ,alignItems:"center", width:"350px" ,color: '#787887', fontFamily: '"Kumbh Sans"', fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '18px' ,marginBottom:"20px" }}  >{answer}</p>} 
      {/* when isopen is true answer is visible  */}
      {/* <hr style={{width: '350px', height: '0.5px', flexShrink: 0, background: '#E8E8EA' }} /> */}
      <div style={{width: '350px', height: '1px', flexShrink: 0, background: '#E8E8EA' }}></div>
     


    </div>
  );
};

export default FaqQuestion;

