import React, { useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import CityInfoSection from "@/components/CityInfoSection";

const CityPage = () => {
  const router = useRouter();
  const name = router.query.name;
  return (
    <>
      <Head>
        <title>{name} weather</title>
        <meta name="description" content={`${name} real time weather`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <main>
      <CityInfoSection cityName={name} />
      </main>
    </>
  );

};

export default CityPage;
