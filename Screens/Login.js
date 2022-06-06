import {Button, Container} from 'react-bootstrap';

export default function Login() {
    return (
        <div>
            <Container className='row justify-content-center align-content-between'>
                <form action="">
                    <h2 className='text-center'>Welcome To<br/>WhatToEat</h2>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="email" className="form-control" id="username"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>
                    <div className='row mt-3'>
                        <Button className="btn btn-primary">Login</Button>
                        <Button className="btn btn-secondary">Register</Button>
                    </div>
                </form>
            </Container>
        </div>
    );
}
