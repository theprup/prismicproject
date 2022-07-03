// ~/pages/[uid].js

import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";

function Page({ menu, slices }) {
    return (
        <Layout menu={menu}>
            <SliceZone slices={slices} components={components} />
        </Layout>
    );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getSingle("menu");
  const page = await client.getByUID("page", params.uid);

  return {
    props: {
      menu,
      slices: page.data.slices,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
}

export default Page;