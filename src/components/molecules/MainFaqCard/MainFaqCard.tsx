import  { useState, useEffect } from 'react';

import FaQList from '../../atoms/FaQL/FaQlist';
import image from "../../../assets/illustration-woman-online-desktop.svg"
const MainFaqCard = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    

   useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles ={
    container: {
      width: windowWidth <= 500 ? "327px" : "920px",
      display: 'flex',
      flexDirection: windowWidth <= 500 ? "column" : "row",
      padding: '30px',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexShrink: 0,
      borderRadius: '23px',
      background: '#FFF',
      boxShadow: '0px 50px 50px -20px rgba(53, 18, 122, 0.50)',
      height: windowWidth <= 500 ? "535px" : "509px",
    },
  };
  
  const imagestyle = {
    marginLeft: windowWidth <= 500 ? " 0": "-100px",
    marginTop: windowWidth <= 500 ? " -230px": "0",
    width :windowWidth <= 500 ? " 327px": "500px"
  }
  // this is use because i used inline style and its difficult to create respnsive design so  i googled that
    return (
        
        <div style={styles.container as React.CSSProperties}>
          {/* flexdirection is type errorad miwerda undefined imitom rom bevri tipi aqvs da davgoogle  */}
            <div>
                <img style={imagestyle} src={image} alt="" />

            </div>
            <div>
               <FaQList/>
            </div>
       

           
        </div>
    )
}

export default MainFaqCard;