import { SliceZone, PrismicLink, PrismicRichText } from '@prismicio/react'
import { components } from '../slices/index'
import { createClient } from '../prismicio'
import { Layout } from "../components/Layout";


const Page = ({menu, page, heading }) => {
    return (
      <Layout menu={menu}>
    
        {page.data.articles.map((article)=> (
          
            <PrismicLink  document={article.blogArticle}>
                <PrismicRichText field={article.blogArticle.data.title} />
            </PrismicLink>
        ))}
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const menu = await client.getSingle("menu");
  const page = await client.getSingle('blog-home-page',{graphQuery: blogHomePageGraphQuery})

  return {
    props: { page, menu}, // Will be passed to the page component as props
  }
}

//This query gets product data for home-page
  export const blogHomePageGraphQuery = `{
    blog-home-page{
      articles{
        blogArticle{
          title
        }
      }
      slices
    }
  }`

export default Page;