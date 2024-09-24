import { Metadata } from "next";
import StepsComp from "@/components/spaghetti/StepsComp";

export const metadata: Metadata = {
  title: "LP 2",
  description: "LP Description",
};

export default function Page() {
  return (
    <>
      <StepsComp></StepsComp>
    </>
  );
}
