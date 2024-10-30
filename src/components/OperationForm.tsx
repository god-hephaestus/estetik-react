import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import {
  CountryCode,
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
} from "libphonenumber-js";
import { DefaultOptionType } from "antd/es/select";

const { TextArea } = Input;
const { Option } = Select;

interface Country {
  code: CountryCode;
  name: string;
  phoneCode: string;
}

export default function OperationForm({ isExpanded }: { isExpanded: boolean }) {
  const containerClassNames = `flex justify-center lg:h-[450px] 2xl:h-[520px] items-center ${
    isExpanded ? "z-50 h-full" : ""
  }`;
  const [form] = Form.useForm();
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<CountryCode>("US");
  const [countries, setCountries] = useState<Country[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const [queryParams, setQueryParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    gclid: "",
  });

  useEffect(() => {
    // Extract URL parameters
    const params = new URLSearchParams(window.location.search);
    setQueryParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
    });

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

  const handleSubmit = async (values: {
    name: string;
    email: string;
    operation: string;
    message: string;
  }) => {
    setSubmitting(true);
    try {
      if (!isValidPhoneNumber(phone, countryCode)) {
        console.log("Phone number is invalid");
        return;
      }

      const payload = {
        op_source: "ist",
        lead_name: values.name,
        lead_phone: `${countryCode} ${phone}`,
        lead_email: values.email,
        lead_campaign: "ReactLP",
        lead_message: values.message || "",
        lead_treatment: values.operation,
        lead_language: "EN",
        gclid: queryParams.gclid,
        gtags: JSON.stringify({
          utm_source: queryParams.utm_source,
          utm_medium: queryParams.utm_medium,
          utm_campaign: queryParams.utm_campaign,
          utm_content: queryParams.utm_content,
          utm_term: queryParams.utm_term,
        }),
      };

      const response = await fetch("https://amo-gw.estetikcep.com/index.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Submission success:", await response.json());

      // Redirect to the thank-you page
      window.location.assign(`/thankyou?email=${values.email}`);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setSubmitting(false);
      form.resetFields();
    }
  };

  return (
    <div className={containerClassNames}>
      <Form
        name="operationForm"
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="w-full h-full flex-1 px-6 bg-[#d0eeec] rounded-[25px] border-2 border-[#d0eeec] shadow-md"
      >
        <Form.Item
          name="utm_source"
          initialValue={queryParams.utm_source}
          hidden
        >
          <Input type="hidden" />
        </Form.Item>
        <Form.Item
          name="utm_medium"
          initialValue={queryParams.utm_medium}
          hidden
        >
          <Input type="hidden" />
        </Form.Item>
        <Form.Item
          name="utm_campaign"
          initialValue={queryParams.utm_campaign}
          hidden
        >
          <Input type="hidden" />
        </Form.Item>
        <Form.Item
          name="utm_content"
          initialValue={queryParams.utm_content}
          hidden
        >
          <Input type="hidden" />
        </Form.Item>
        <Form.Item name="utm_term" initialValue={queryParams.utm_term} hidden>
          <Input type="hidden" />
        </Form.Item>
        <Form.Item name="gclid" initialValue={queryParams.gclid} hidden>
          <Input type="hidden" />
        </Form.Item>

        <Form.Item
          className="mb-4"
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
          className="mb-4"
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
              filterOption={(input: string, option?: DefaultOptionType) => {
                if (!option) return false;
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
          className="mb-4"
          label="Operation"
          name="operation"
          rules={[{ required: true, message: "Please select an operation!" }]}
        >
          <Select
            placeholder="Select an operation"
            className="border-2 border-[#13a89e] rounded-xl"
          >
            <Option value="bbl">BBL</Option>
            <Option value="breast">Breast Surgeries</Option>
            <Option value="total">Total Body</Option>
          </Select>
        </Form.Item>
        <Form.Item
          className="mb-4"
          label="Message"
          name="message"
          rules={[{ required: false }]}
        >
          <TextArea
            rows={4}
            placeholder="Enter your message"
            className="border-2 border-[#13a89e] rounded-xl"
          />
        </Form.Item>
        <Form.Item className="text-right mt-4">
          <Button
            className="bg-[#b574ed] px-12 rounded-[25px]"
            htmlType="submit"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
