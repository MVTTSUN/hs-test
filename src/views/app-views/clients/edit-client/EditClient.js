import React, { useEffect, useState } from "react";
import { Form, Button, Input, Row, Col } from "antd";
import { ROW_GUTTER } from "constants/ThemeConstant";
import { getClient, updateClients } from "services/JSONPlaceholder";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { createPortal } from 'react-dom';
import Preloader from 'components/shared-components/Preloader';

export const EditClient = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    setIsLoading(true);
    await updateClients(values);
    setIsLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const getClientAsync = async () => {
    const client = await getClient(id);

    form.setFieldsValue({
      name: client.name,
      email: client.email,
      phone: client.phone,
      address: `${client.address.street}, ${client.address.suite}`,
      company: client.company.name,
    });
  };

  useEffect(() => {
    id && getClientAsync();
  }, [id]);

  return (
    <Form
      name="basicInformation"
      layout="vertical"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row>
        <Col xs={24} sm={24} md={24} lg={16}>
          <Row gutter={ROW_GUTTER}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid phone!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid address!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Company"
                name="company"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid company!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Col>
      </Row>
      {createPortal(<Preloader isLoading={isLoading} />, document.body)}
    </Form>
  );
};

export default EditClient;
