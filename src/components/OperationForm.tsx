"use client";

import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import {
  CountryCode,
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
} from "libphonenumber-js";

const { TextArea } = Input;
const { Option } = Select;

interface Country {
  code: CountryCode;
  name: string;
  phoneCode: string;
}

export default function OperationForm() {
  const [form] = Form.useForm();
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<CountryCode>("US");
  const [countries, setCountries] = useState<Country[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const allCountries = getCountries().map((code) => {
      const countryName =
        new Intl.DisplayNames(["en"], { type: "region" }).of(code) || "Unknown";
      return {
        code,
        name: countryName,
        phoneCode: getCountryCallingCode(code),
      };
    });

    setCountries(allCountries);

    const detectUserCountry = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }
        );

        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://geocode.xyz/${latitude},${longitude}?geoit=json`
        );
        const data = await response.json();

        const detectedCountryCode = data.prov?.toUpperCase();

        if (
          detectedCountryCode &&
          getCountries().includes(detectedCountryCode as CountryCode)
        ) {
          setCountryCode(detectedCountryCode as CountryCode);
        } else {
          setCountryCode("US");
        }
      } catch (error) {
        console.warn("Geolocation failed, defaulting to US.");
        setCountryCode("US");
      }
    };

    detectUserCountry();
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleCountryChange = (value: CountryCode) => {
    setCountryCode(value);
  };

  const handleSubmit = async (values: any) => {
    setSubmitting(true);
    try {
      console.log("Form submitted:", values);
      console.log("Selected country code:", countryCode);
      console.log("Phone number:", phone);

      if (isValidPhoneNumber(phone, countryCode)) {
        console.log("Phone number is valid");
      } else {
        console.log("Phone number is invalid");
      }

      // Add form submission logic here
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setSubmitting(false);
      form.resetFields();
    }
  };

  return (
    <div className="max-w-md p-6 m-6 shadow-2xl rounded-2xl">
      <Form
        name="operationForm"
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
          rules={[
            { required: true, message: "Please input a valid phone number!" },
            () => ({
              validator(_: any, value: string) {
                if (isValidPhoneNumber(value, countryCode)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Invalid phone number."));
              },
            }),
          ]}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Select
              showSearch
              value={countryCode}
              onChange={handleCountryChange}
              placeholder="Country Code"
              optionFilterProp="label"
              filterOption={(input: string, option: any) => {
                const searchText = `${option.label}`.toLowerCase();
                return searchText.includes(input.toLowerCase());
              }}
              style={{ width: "30%" }}>
              {countries.map((country) => (
                <Option
                  key={country.code}
                  value={country.code}
                  label={`${country.name} (+${country.phoneCode}) ${country.code}`}>
                  {country.code} (+{country.phoneCode})
                </Option>
              ))}
            </Select>

            <Input
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              style={{ width: "70%", marginLeft: "10px" }}
            />
          </div>
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

        <Form.Item className="text-right">
          <Button
            type="primary"
            htmlType="submit"
            className="px-6"
            disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
