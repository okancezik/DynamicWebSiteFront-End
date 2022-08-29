import React, { useState, useEffect } from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Container, FormGroup } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AdminService from '../services/adminService';
import { useNavigate } from 'react-router';


export default function LogInPage() {

    const [admins, setAdmins] = useState([])


    useEffect(() => {
        let adminService = new AdminService();
        adminService.getAdmins().then(result => setAdmins(result.data.data));
    }, [])

    const initialValues = { userName: "", password: "" };

    const schema = Yup.object({
        userName: Yup.string().required("kullanıcı adını girmek zorunludur..."),
        password: Yup.string().required("parolayı girmek zorunludur...")
    });

    let navigate = useNavigate();

    function handleEntry(values) {
        let controlEntry = false;
        admins.forEach(admin => {
            console.log(admin.userName + " ve p:" + admin.password)
            if (admin.userName === values.userName && admin.password === values.password) {
                controlEntry = true;
                window.location.href = "/operations";
            }
        });
        if (controlEntry === false) {
            alert("hatalı bilgi girişi yaptınız...");
            navigate("/login");
        }
    }


    return (
        <div>
            <Container id="login">
                {/* <Card>
                    <Card.Title>MYSOFT</Card.Title>
                </Card> */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        handleEntry(values);
                    }}>
                    <Card className='shadow-lg p-4'>
                        <Card.Title >Admin Giriş</Card.Title>
                        <Card.Body>
                            <Form className='bt-form'>
                                <FormGroup className="mb-3">
                                    <Field type="text" name="userName" placeholder="Kullanıcı adı" ></Field>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Field type="password" name="password" placeholder="Parola" ></Field>
                                </FormGroup>
                                <Button variant="success" type="submit">Giriş Yap</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Formik>
            </Container>
        </div>
    )
}
