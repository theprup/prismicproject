// ~/pages/[uid].js

import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";

function BlogPage({ menu, slices, title }) {
    return (
        <Layout menu={menu}>
            <PrismicRichText field={title}/>
            <SliceZone slices={slices} components={components} />
        </Layout>
    );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getSingle("menu");
  const page = await client.getByUID("blogpage", params.uid);

  return {
    props: {
      menu,
      title:page.data.title,
      slices: page.data.slices,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("blogpage");

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
}

export default BlogPage;