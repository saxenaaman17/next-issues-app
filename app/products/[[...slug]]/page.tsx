"use client";
import React, { useState } from "react";
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(
//   () => import("../../components/HeavyComponent"),
//   { loading: () => <p>Loading...</p>, ssr: false }
// );
// import HeavyComponent from "../../components/HeavyComponent";
import _ from "lodash";

interface Props {
  params: {
    slug: string[];
  };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  // const [isHeavyComponentVisible, setIsHeavyComponentVisible] = useState(false);

  return (
    <div>
      ProductPage {slug} {sortOrder}
      <button
        className="btn btn-primary"
        onClick={async () => {
          // setIsHeavyComponentVisible(true);
          const _ = (await import("lodash")).default;

          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sortedArray = _.orderBy(users, ["name"]);
          console.log(sortedArray);
        }}
      >
        Show Heavy component
      </button>
      {/* {isHeavyComponentVisible && <HeavyComponent />} */}
    </div>
  );
};

export default ProductPage;
