import React , {useState,useEffect} from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {Col, FormGroup, Row} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomerService from '../../services/customerService';
import { Link } from 'react-router-dom';
import {MdOutlineArrowBack} from "react-icons/md";

export default function CustomerDelete() {

    const [customers, setCustomers] = useState([])

    let customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomers().then(result => setCustomers(result.data.data))
    }, []);
    
    const initialValues = { companyName: "" };

    const schema = Yup.object({
        companyName: Yup.string().required("şirket adı zorunludur...")
    });

    function deleteControl(companyName){
        for(let i=0;i<customers.length;i++){
            if(customers[i].companyName === companyName){
                console.log("bulundu");
                return true;
            }
        }
        console.log("bulunamadı");
        return false;
    }

    function deleteCustomer(values){
        console.log(values.companyName);
        if(deleteControl(values.companyName)){
            customerService.deleteCustomer(values.companyName);
            alert('Müşteri Sistemden Silindi');
            window.location.href = '/customers';
        }
        else{
            alert('Bu isimde herhangi bir şirket sistemde bulunamadı...');
            window.location.href = '/customer/delete';
        }
    }

    return (
        <div className="operationsform">
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {   //values form icindeki field'lerden gelen değerlerdir
                    deleteCustomer(values);
                }}>
                <Card className='shadow-lg p-4'>
                    <Card.Title>Müşteri Silme Formu</Card.Title>
                    <Card.Body>
                        <Form className='bt-form'>
                            <FormGroup className="mb-3">
                                <Field
                                    type="text" size="50"
                                    name="companyName"
                                    placeholder="Silinecek şirket adı"
                                    required>
                                </Field>
                            </FormGroup>
                            <Button variant="danger" type="submit">Müşteriyi Sil</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Formik>
            <Row>
                <Col id = "backcstmrdlt"><Link to="/operations"><MdOutlineArrowBack/></Link></Col>
            </Row>
        </div>
    )
}
