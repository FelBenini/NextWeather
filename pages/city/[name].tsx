import React, { useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import CityInfoSection from "@/components/CityInfoSection";
import { LoadingContext } from "@/components/loadingContext";
import LoadingArea from "@/components/loadingArea";

const CityPage = () => {
  const router = useRouter();
  const { loading } = useContext(LoadingContext);
  const name = router.query.name;
  return (
    <>
      <Head>
        <title>{name} weather</title>
        <meta name="description" content={`${name} real time weather`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <CityInfoSection cityName={name} />
    </>
  );

};

export default CityPage;
