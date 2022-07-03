import Head from "next/head";

import { Header } from "./Header";

export const Layout = ({ children, menu }) => {
  return (
    <div className="text-neutral-700 antialiased">
      <Head>
        <title> Guy Proops </title>
      </Head>
      <Header menu={menu} />
      <main>{children}</main>
    </div>
  );
};

