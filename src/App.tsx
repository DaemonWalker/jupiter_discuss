import React from 'react';
import 'antd/dist/antd.css';
import './content/app.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Home } from './pages/home';
import { Block } from './pages/block';
const { Header, Content, Footer } = Layout;

function App() {
    return (
        <BrowserRouter>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
                        <Menu.Item>登录</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', display: 'flex', flexDirection: 'column' }}>
                    <div className="site-layout-content">
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/block/:id" exact component={Block}></Route>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>DBD2 Discuss ©2021 Created by TechClub</Footer>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
