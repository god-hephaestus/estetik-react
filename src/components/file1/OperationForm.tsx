import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import {
  CountryCode,
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
} from "libphonenumber-js";
import Location from "./Location";

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
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const detectedCountryCode = data.country_code;

        if (
          detectedCountryCode &&
          getCountries().includes(detectedCountryCode as CountryCode)
        ) {
          setCountryCode(detectedCountryCode as CountryCode);
        } else {
          setCountryCode("US");
        }
      } catch (error) {
        console.warn("IP detection failed, defaulting to US.");
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

  const handleSubmit = async (values: unknown) => {
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
    <div className="flex justify-center items-center md:mr-0 md:ml-6 h-full">
      <Form
        name="operationForm"
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="w-full h-full flex-1 max-w-lg px-6 bg-[#d0eeec] rounded-[25px] border-2 border-[#d0eeec] shadow-md"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10133147.836277347!2d29.356114206454567!3d42.49165901949489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac64c07925733%3A0x96ea14ba8be2cdb6!2sEstetik%20International!5e0!3m2!1sen!2str!4v1726670444497!5m2!1sen!2str"
          loading="lazy"
          className="w-full my-4 h-56"
        ></iframe>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            className="border-2 border-[#13a89e]"
            placeholder="Enter your name"
          />
        </Form.Item>
        <Form.Item
          label="Phone"
          required
          rules={[
            { required: true, message: "Please input a valid phone number!" },
            () => ({
              validator(_: unknown, value: string) {
                if (isValidPhoneNumber(value, countryCode)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Invalid phone number."));
              },
            }),
          ]}
        >
          <div className="flex items-center space-x-2">
            <Select
              showSearch
              value={countryCode}
              onChange={handleCountryChange}
              placeholder="Country Code"
              optionFilterProp="label"
              /* eslint-disable @typescript-eslint/no-explicit-any */
              filterOption={(input: string, option: any) => {
                const searchText = `${option.label}`.toLowerCase();
                return searchText.includes(input.toLowerCase());
              }}
              className="w-1/3 border-2 border-[#13a89e] rounded-xl"
            >
              {countries.map((country) => (
                <Option
                  key={country.code}
                  value={country.code}
                  label={`${country.name} (+${country.phoneCode}) ${country.code}`}
                >
                  {country.code} (+{country.phoneCode})
                </Option>
              ))}
            </Select>

            <Input
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              className="w-2/3 border-2 border-[#13a89e]"
            />
          </div>
        </Form.Item>
        <Form.Item
          label="Operation"
          name="operation"
          rules={[{ required: true, message: "Please select an operation!" }]}
        >
          <Select
            placeholder="Select an operation"
            className="border-2 border-[#13a89e] rounded-xl h-full"
          >
            <Option value="bbl">BBL</Option>
            <Option value="breast">Breast Surgeries</Option>
            <Option value="total">Total Body</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Message" name="message" rules={[{ required: false }]}>
          <TextArea
            rows={4}
            placeholder="Enter your message"
            className="border-2 border-[#13a89e] rounded-xl"
          />
        </Form.Item>
        <Form.Item className="text-right">
          <Button type="primary" htmlType="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}