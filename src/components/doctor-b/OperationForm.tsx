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

interface Country {
  code: CountryCode;
  name: string;
  phoneCode: string;
}

export default function OperationForm() {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<CountryCode>("US");
  const [countries, setCountries] = useState<Country[]>([]);
  const [ipApiCalled, setIpApiCalled] = useState(false);

  const [queryParams, setQueryParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    utm_ad: "",
    gclid: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const newQueryParams = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      utm_ad: params.get("utm_ad") || "",
      gclid: params.get("gclid") || "",
    };
    setQueryParams(newQueryParams);

    form.setFieldsValue({
      utm_source: newQueryParams.utm_source,
      utm_medium: newQueryParams.utm_medium,
      utm_campaign: newQueryParams.utm_campaign,
      utm_content: newQueryParams.utm_content,
      utm_term: newQueryParams.utm_term,
      utm_ad: newQueryParams.utm_ad,
      gclid: newQueryParams.gclid,
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
      if (ipApiCalled) return;

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
      } finally {
        setIpApiCalled(true);
      }
    };

    detectUserCountry();
  }, [form, ipApiCalled]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleCountryChange = (value: CountryCode) => {
    setCountryCode(value);
  };

  const handlePhoneBlur = () => {
    if (phone && !isValidPhoneNumber(phone, countryCode)) {
      console.log("Phone number is invalid on blur");
    }
  };

  const handleCountryBlur = () => {
    if (phone && !isValidPhoneNumber(phone, countryCode)) {
      console.log("Phone number is invalid after country change");
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formUrlEncoded = (data: { [key: string]: any }) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join("&");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (values: any) => {
    const formattedValues = {
      ...values,
      type: "LND-Plastik-Yabanci",
      phone: `+${getCountryCallingCode(countryCode)}${phone}`,
      g_utm_source: queryParams.utm_source,
      g_utm_medium: queryParams.utm_medium,
      g_utm_campaign: queryParams.utm_campaign,
      g_utm_content: queryParams.utm_content,
      g_utm_term: queryParams.utm_term,
      g_utm_ad: queryParams.utm_ad,
      g_clid: queryParams.gclid,
    };

    if (!submitted) {
      setSubmitted(true);
      try {
        const response = await fetch(
          "https://lp.estetikinternational.com/en/thank-you-page-api",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formUrlEncoded(formattedValues),
          }
        );

        const responseData = await response.json();
        console.log("API response:", responseData);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        window.location.href =
          "https://lp.estetikinternational.com/en/thank-you-page";
      } catch (error) {
        console.error("There was an error with form submission:", error);
        setSubmitted(false);
      }
    }
  };

  return (
    <div className="flex justify-center lg:h-[470px] 2xl:h-[490px] items-center">
      <Form
        name="operationForm"
        form={form}
        layout="vertical"
        onFinish={handleFormSubmit}
        className="w-full h-full flex-1 px-6 bg-[#e4d4c2] rounded-[25px] border-2 border-[#e4d4c2] "
      >
        <Form.Item
          name="utm_source"
          initialValue={queryParams.utm_source}
          hidden
        >
          <Input type="hidden" />
        </Form.Item>
        <Form.Item name="type" initialValue="Reactlp" hidden>
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
          className="mb-4 mt-4"
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            className="border-2 border-[#c0a062] bg-[#e4d4c2] h-[40px] rounded-[25px]"
            placeholder="Enter your name"
          />
        </Form.Item>
        <Form.Item
          className="mb-4 "
          label="Phone"
          required
          rules={[
            { required: true, message: "Please input a valid phone number!" },
            () => ({
              validator(_: unknown, value: string) {
                if (isValidPhoneNumber(`${countryCode}${value}`, countryCode)) {
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
              onBlur={handleCountryBlur}
              placeholder="Country Code"
              optionFilterProp="label"
              filterOption={(input: string, option?: DefaultOptionType) => {
                if (!option) return false;
                const searchText = `${option.label}`.toLowerCase();
                return searchText.includes(input.toLowerCase());
              }}
              className="select-bg w-1/2 lg:3/5 border-2 border-[#c0a062] rounded-[25px] h-[40px]"
              popupClassName="bg-[#e4d4c2]"
            >
              {countries.map((country) => (
                <Select.Option
                  key={country.code}
                  value={country.code}
                  label={`${country.name} (+${country.phoneCode}) ${country.code}`}
                >
                  {country.code} (+{country.phoneCode})
                </Select.Option>
              ))}
            </Select>
            <Input
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              onKeyDown={(e) => {
                if (
                  !/[0-9]/.test(e.key) &&
                  e.key !== "Backspace" &&
                  e.key !== "Tab"
                ) {
                  e.preventDefault();
                }
              }}
              placeholder="Enter your phone number"
              maxLength={10}
              className="w-1/2 lg:w-3/5 border-2 border-[#c0a062] bg-[#e4d4c2] h-[40px] rounded-[25px]"
            />
          </div>
        </Form.Item>
        <Form.Item
          className="mb-4"
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input
            className="border-2 border-[#c0a062] bg-[#e4d4c2] h-[40px] rounded-[25px]"
            placeholder="Enter your email"
          />
        </Form.Item>
        <Form.Item
          className="mb-4"
          label="Message"
          name="message"
          rules={[
            { max: 300, message: "Message can't exceed 300 characters." },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="Write your message"
            className="border-2 border-[#c0a062] bg-[#e4d4c2] rounded-[25px]"
          />
        </Form.Item>
        <Form.Item className="text-right mt-4">
          <Button
            className="bg-[#c0a062] px-12 rounded-[25px] text-white h-[32px] lg:h-[40px]"
            htmlType="submit"
            disabled={submitted}
          >
            {submitted ? "Submitting..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
