import Contact from "@/components/Contact";
import Doctors from "@/components/Doctors";
import OperationForm from "@/components/OperationForm";
import Location from "@/components/Location";
import ParentState from "@/components/ParentState";
import Testimonials from "@/components/Testimonials";
import { Divider } from "antd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LP 2",
  description: "LP Description",
};

export default function Page() {
  return (
    <>
      <OperationForm></OperationForm>
      <Contact></Contact>
    </>
  );
}
