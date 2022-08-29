import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from 'react-router-dom';

export default function UserOperatios() {
    return (
        <div>
            <DropdownButton title="Kullanıcı İşlemleri" variant="dark" id="operations2menu">
                <Dropdown.Menu variant='dark'>
                    <Dropdown.Item as={NavLink} to="/inbox">Gelen Kutusu</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/">Güvenli Çıkış</Dropdown.Item>
                </Dropdown.Menu>
            </DropdownButton>
        </div>
    )
}
