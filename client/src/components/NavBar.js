import React, { useContext } from 'react'
import UserStore from '../store/UserStore'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { Button, Container } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'


const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="primary" variant="dark" style={{marginTop: "0px"}}>
            <Container>
                <NavLink to={ SHOP_ROUTE } style={{color: 'white'}} > FoxShop </NavLink>
                {
                    user.isAuth ?
                    <Nav className="ml-auto">
                    <Button variant={'outline-light'}> Выйти </Button>
                    <Button variant={'outline-light'} className="ml-4"> Панель администратора </Button>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Button variant={'outline-light'} onClick={()=>user.setIsAuth(true)}> Авторизация </Button>
                </Nav>
                }
                </Container>
        </Navbar>
    )
})

export default NavBar