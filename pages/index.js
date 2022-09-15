import { SliceZone } from '@prismicio/react'
import { components } from '../slices/index'
import { createClient } from '../prismicio'
import { Layout } from "../components/Layout";


const Page = ({menu, page }) => {
    return (
      <Layout menu={menu}>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const menu = await client.getSingle("menu");
  const page = await client.getByUID("page", "home")

  return {
    props: { page, menu}, // Will be passed to the page component as props
  }
}


export default Page;