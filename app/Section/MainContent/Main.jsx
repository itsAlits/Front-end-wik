import React from "react";
import Banner from "../ContentBanner/Banner";
import MotorList from "../ContentMotorList/MotorList";
import DetailMotor from "../DetailListMotor/DetailMotor";

export default function Main() {
  return (
    <div className=" ms-[270px] p-6 min-h-screen">
      <div className="wraper-content">
        {/* <DetailMotor /> */}
        <Banner />
        <MotorList />
      </div>
    </div>
  );
}
