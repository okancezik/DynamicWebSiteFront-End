import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Operations() {
    return (
        <div>
            <DropdownButton title="Portal İşlemleri" id="operationsmenu" variant='dark'>
                <Dropdown.Menu variant='dark'>
                    <Dropdown.Header><b>LİSTELEME İŞLEMLERİ</b></Dropdown.Header>
                    <Dropdown.Item eventKey="1" as={NavLink} to="/products/table">Ürün Listesi</Dropdown.Item>
                    <Dropdown.Item eventKey="2" as={NavLink} to="/customers">Müşteri Listesi</Dropdown.Item>
                    <Dropdown.Item eventKey="3" as={NavLink} to="/orders">Sipariş Listesi</Dropdown.Item>
                    <Dropdown.Header><b>EKLEME İŞLEMLERİ</b></Dropdown.Header>
                    <Dropdown.Item eventKey="4" as={NavLink} to="/product/add">Yeni Ürün Ekle</Dropdown.Item>
                    <Dropdown.Item eventKey="5" as={NavLink} to="/customer/add">Yeni Müşteri Ekle</Dropdown.Item>
                    <Dropdown.Item eventKey="6" as={NavLink} to="/order/add">Yeni Sipariş Ekle</Dropdown.Item>
                    <Dropdown.Header><b>SİLME İŞLEMLERİ</b></Dropdown.Header>
                    <Dropdown.Item eventKey="7" as={NavLink} to="/product/delete">Ürün Silme</Dropdown.Item>
                    <Dropdown.Item eventKey="8" as={NavLink} to="/customer/delete">Müşteri Silme</Dropdown.Item>
                    <Dropdown.Item eventKey="9" as={NavLink} to="/order/delete">Sipariş Silme</Dropdown.Item>
                </Dropdown.Menu>
            </DropdownButton><br></br><hr /><br />

            <DropdownButton title = "Kullanıcı İşlemleri" variant = "dark" id = "operations2menu">
                <Dropdown.Menu variant = 'dark'>
                    <Dropdown.Item as = {NavLink} to = "/inbox">Gelen Kutusu</Dropdown.Item>
                    <Dropdown.Item as = {NavLink} to = "/">Güvenli Çıkış</Dropdown.Item>
                </Dropdown.Menu>
            </DropdownButton>

        </div>
    )
}

