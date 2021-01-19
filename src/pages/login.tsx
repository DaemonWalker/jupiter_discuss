import React from 'react';
import { Row, Col, Divider, Card, Form, Input, Button, Checkbox } from 'antd'

export class Login extends React.Component<IProps, IState> {
    layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };
    tailLayout = {
        wrapperCol: { offset: 6, span: 16 },
    };
    onFinish = (values: any) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <Row justify="space-around" align="middle">
                <Col md={{ offset: 6, span: 12 }} xl={{ offset: 16, span: 6 }} sm={24}>
                    <Card title="Welcome to JupiterDiscuss!">
                        <Form
                            {...this.layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                label="员工卡号"
                                name="username"
                                rules={[{ required: true, message: '请输入用户名' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{ required: true, message: '请输入密码' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <Form.Item {...this.tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        );
    }
}

interface IProps {

}
interface IState {

}