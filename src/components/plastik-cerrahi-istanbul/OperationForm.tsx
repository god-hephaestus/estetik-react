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
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<CountryCode>("US");
  const [countries, setCountries] = useState<Country[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [ipApiCalled, setIpApiCalled] = useState(false);

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
    const newQueryParams = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
    };
    setQueryParams(newQueryParams);

    form.setFieldsValue({
      utm_source: newQueryParams.utm_source,
      utm_medium: newQueryParams.utm_medium,
      utm_campaign: newQueryParams.utm_campaign,
      utm_content: newQueryParams.utm_content,
      utm_term: newQueryParams.utm_term,
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
          setCountryCode("TR");
        }
      } catch (error) {
        console.warn("IP detection failed, defaulting to TR.");
        setCountryCode("TR");
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

  const handleSubmit = async (values: {
    name: string;
    email: string;
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
        lead_campaign: "ReactLP TR",
        lead_message: values.message || "",
        lead_language: "TR",
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
    <div className="flex justify-center lg:h-[470px] 2xl:h-[490px] items-center">
      <Form
        name="operationForm"
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="w-full h-full flex-1 px-6 bg-[#d0eeec] rounded-[25px] border-2 border-[#d0eeec] "
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
          className="mb-4 mt-4"
          label="Adınız"
          name="name"
          rules={[{ required: true, message: "Lütfen Adınızı Girin!" }]}
        >
          <Input
            className="border-2 border-[#13a89e] bg-[#d0eeec] h-[40px] rounded-[25px]"
            placeholder="Lütfen adınızı girin"
          />
        </Form.Item>
        <Form.Item
          className="mb-4 "
          label="Telefon No"
          required
          rules={[
            {
              required: true,
              message: "Lütfen geçerli bir telefon numarası girin!",
            },
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
          <div className="flex items-center space-x-2 ">
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
              className="select-bg w-1/2 lg:3/5 border-2 border-[#13a89e] rounded-[25px] h-[40px]"
              popupClassName="bg-[#d0eeec]"
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
              placeholder="Telefon numaranız"
              maxLength={10}
              className="w-1/2 lg:w-3/5 border-2 border-[#13a89e] bg-[#d0eeec] h-[40px] rounded-[25px]"
            />
          </div>
        </Form.Item>
        <Form.Item
          className="mb-4"
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Lütfen mail adresinizi girin!" },
            { type: "email", message: "Lütfen geçerli bir mail adresi girin!" },
          ]}
        >
          <Input
            className="border-2 border-[#13a89e] bg-[#d0eeec] h-[40px] rounded-[25px]"
            placeholder="Mail adresiniz"
          />
        </Form.Item>
        <Form.Item
          className="mb-4"
          label="Mesajınız"
          name="message"
          rules={[
            { max: 300, message: "Mesajınız 300 karakterden uzun olamaz" },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="Mesajınızı yazın"
            className="border-2 border-[#13a89e] bg-[#d0eeec] rounded-[25px]"
          />
        </Form.Item>

        <Form.Item className="text-right mt-4">
          <Button
            className="bg-[#13a89e] px-12 rounded-[25px] text-white h-[32px] lg:h-[40px]"
            htmlType="submit"
            disabled={submitting}
          >
            {submitting ? "Gönderiliyor..." : "Gönder"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
