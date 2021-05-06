import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import {LOGIN_ROUTE, REGISTATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight -  54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h3 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h3>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-4'
                        placeholder='Введите ваш адрес эл. почты...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш пароль...'
                    />
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {
                            isLogin ?
                                <NavLink to={REGISTATION_ROUTE}>
                                    Регистрация
                                </NavLink>
                                :
                                <NavLink to={LOGIN_ROUTE}>
                                    Уже есть аккаунт?
                                </NavLink>
                        }
                        <Button
                            variant={"outline-success"}
                        >
                            {
                                isLogin ? 'Войти' : 'Зарегистрироваться'
                            }
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;