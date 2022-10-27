import Link from 'next/link'
import Card from '../components/Card'
import Slider from '../components/Slider'
import axios from "axios"
import AllProducts from '../public/SVG_components/ExtraIcons/AllProducts'

export const getStaticProps = async () => {
  const res = await axios.get("https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json");
  const data = await res.data;

  return {
    props: {
      productList: data.data.products,
      metaData: data.metadata
    }
  }
}

const Home = ({ productList, metaData }) => {

  return (
    <div className='container'>
      <Slider />
      <div>
        <div className='mainSectionText'>
          <span className='productText'>
            {metaData.subcategory_name}
          </span>
          <span className='numberOfProducts'>{productList.length} products
            <Link href='#'><a><AllProducts /></a></Link>
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', }}>
          {
            productList.map((product, index) => {
              return <Card product={product} key={index} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home