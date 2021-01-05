/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */

import * as React from "react";
import Footer from "./footer";
import Header from "./header";
import SEO from "./seo";

interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = (props: PageProps) => {

  return (
    <>
      <Header siteTitle={props.title} />
      <SEO title={props.title} />
      <main>
        {props.children}
      </main>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default Page;
