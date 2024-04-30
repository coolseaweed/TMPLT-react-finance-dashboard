import React from "react";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

type Props = {};

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  console.log("data:", data);
  return (
    <>
      <DashboardBox gridArea={"a"} />
      <DashboardBox gridArea={"b"} />
      <DashboardBox gridArea={"c"} />
    </>
  );
};

export default Row1;
