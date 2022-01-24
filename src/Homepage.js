import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Card} from './components/Card';
import{ Cardcomponents} from './components/Cardcomponents';
import { Col, Row } from 'react-bootstrap';
import  Footer from './components/Footer';




function Homepage() {
  return (
    <>
    
     <Header/>
     <Card/>
     <Row style={{backgroundColor: 'grey',height:600,borderRadius:10,width:1200,marginLeft:70,marginBottom:20}}>
     <Row >
       
     <Col >
     <br/>
     <Cardcomponents heading='Student Registration' direction='./components/Login/Login'/>
     </Col>

     <Col>
     <br/>
     <Cardcomponents heading='Teacher Registration'/>
     </Col>
     </Row>

     <Row >
       
     <Col >
     
     <Cardcomponents heading='NGO Registration'/>
     </Col>

     <Col>
     
     <Cardcomponents heading='Admin'/>
     </Col>
     </Row>
     
     </Row>
     
     

     
   
    
    <div>
    <Footer/>
    </div>
    </>
  );
}

export default Homepage;
