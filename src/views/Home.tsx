import React, {useState} from 'react';

import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {Outlet, useNavigate} from "react-router-dom";
import MainMenu from "@/components/MainMenu";

const {Header, Content, Footer, Sider} = Layout;


const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)'}}/>
                <MainMenu></MainMenu>
            </Sider>
            <Layout className="site-layout">
                <Header style={{paddingLeft: "16px", background: colorBgContainer}}>
                    <Breadcrumb style={{lineHeight: '64px'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{margin: '16px  16px 0', height: '100%'}}>
                    <Outlet></Outlet>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;
