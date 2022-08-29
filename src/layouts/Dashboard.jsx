import React from 'react'
import Navi from './Navi'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomerList from '../pages/entrypages/CustomerList';
import ProductList from '../pages/ProductList';
import OrderDetails from '../pages/entrypages/OrderDetails';
import { Route, Routes } from "react-router-dom";
import LogInPage from '../pages/LogInPage';
import MainPage from '../pages/MainPage';
import Crm from '../pages/products/Crm';
import Kurumsal from '../pages/Kurumsal';
import ProductAdd from '../pages/entrypages/ProductAdd';
import ProductDelete from '../pages/entrypages/ProductDelete';
import ContactUs from '../pages/ContactUs';
import CustomerAdd from '../pages/entrypages/CustomerAdd';
import CustomerDelete from '../pages/entrypages/CustomerDelete';
import OrderDelete from '../pages/entrypages/OrderDelete';
import OperationPage from '../pages/entrypages/OperationPage';
import ProductTableList from '../pages/entrypages/ProductTableList';
import OrderAdd from '../pages/entrypages/OrderAdd';
import EBelge from '../pages/products/EBelge';
import Muhasebe from '../pages/products/Muhasebe';
import Iys from '../pages/products/Iys';
import Kvkk from '../pages/products/Kvkk';
import EMutabakat from '../pages/products/EMutabakat';
import Raporlama from '../pages/products/Raporlama';
import Btrans from '../pages/products/Btrans';
import InBox from '../pages/entrypages/InBox';

export default function Dashboard(props) {

  return (
    <div>
      <Navi></Navi>
      <br></br>
      <br />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path='/' exact element = {<MainPage></MainPage>}></Route>
              <Route path='/products' exact element={<ProductList></ProductList>} />
              <Route path="/products/table" exact element={<ProductTableList></ProductTableList>}/>
              <Route path='/customers' exact element={<CustomerList></CustomerList>} />
              <Route path='/orders' exact element={<OrderDetails></OrderDetails>} />
              <Route path='/login' exact element={<LogInPage></LogInPage>} />
              <Route path='/crm' exact element={<Crm></Crm>} />
              <Route path="/e-belge" exact element={<EBelge></EBelge>} />
              <Route path='/on-muhasebe' exact element={<Muhasebe></Muhasebe>}/>
              <Route path='/iys' exact element={<Iys></Iys>}/>
              <Route path='/kvkk' exact element={<Kvkk/>}/>
              <Route path="/e-mutabakat" exact element={<EMutabakat></EMutabakat>} />
              <Route path='/raporlama' exact element={<Raporlama></Raporlama>}/>
              <Route path='/btrans' exact element={<Btrans></Btrans>}/>
              <Route path='/kurumsal' exact element={<Kurumsal></Kurumsal>} />
              <Route path='/product/add' exact element={<ProductAdd></ProductAdd>} />
              <Route path='/product/delete' exact element = {<ProductDelete></ProductDelete>} />
              <Route path='/customer/add' exact element={<CustomerAdd></CustomerAdd>}/>
              <Route path="/customer/delete" exact element={<CustomerDelete/>}/>
              <Route path="/order/delete" exact element={<OrderDelete></OrderDelete>} />
              <Route path='/order/add' exact element={<OrderAdd></OrderAdd>}/> 
              <Route path='/contact' exact element={<ContactUs></ContactUs>} />
              <Route path='/operations' exact element={<OperationPage></OperationPage>}></Route>
              <Route path="/inbox" exact element={<InBox></InBox>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
