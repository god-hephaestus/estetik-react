"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Select } from "antd";

const { TextArea } = Input;
const { Option } = Select;

export default function OperationForm() {
  const [form] = Form.useForm();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const newUtmValues = {
      utm_term: params.get("utm_term") || "",
      utm_source: params.get("utm_source") || "",
      utm_ad: params.get("utm_ad") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
    };

    form.setFieldsValue(newUtmValues);
  }, [form]);

  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="w-[350px] p-6 m-6 shadow-2xl rounded-2xl ">
      <Form
        name="operationForm"
        variant="outlined"
        size="middle"
        scrollToFirstError
        form={form}
        layout="vertical"
        onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}>
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}>
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        <Form.Item
          label="Operation"
          name="operation"
          rules={[{ required: true, message: "Please select an operation!" }]}>
          <Select placeholder="Select an operation">
            <Option value="operation1">Operation 1</Option>
            <Option value="operation2">Operation 2</Option>
            <Option value="operation3">Operation 3</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Message" name="message" rules={[{ required: false }]}>
          <TextArea rows={4} placeholder="Enter your message" />
        </Form.Item>

        <Form.Item name="utm_term" hidden>
          <Input />
        </Form.Item>
        <Form.Item name="utm_source" hidden>
          <Input />
        </Form.Item>
        <Form.Item name="utm_ad" hidden>
          <Input />
        </Form.Item>
        <Form.Item name="utm_campaign" hidden>
          <Input />
        </Form.Item>
        <Form.Item name="utm_content" hidden>
          <Input />
        </Form.Item>

        <Form.Item className="text-right ">
          <Button type="primary" htmlType="submit" className="px-6">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
