import React from "react";
import Head from "next/head";

const HeadComp = ({ page }: any) => {
  return (
    <Head>
      <title>{page}</title>
      <meta name="description" content="anyRec:- See Recommendations" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComp;
