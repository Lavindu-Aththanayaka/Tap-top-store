import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"HP"} heading={"HP"}/>
      <HorizontalCardProduct category={"APPLE"} heading={"APPLE"}/>

      <VerticalCardProduct category={"MSI"} heading={"MSI"}/>
      <VerticalCardProduct category={"LENOVO"} heading={"LENOVO"}/>
      <VerticalCardProduct category={"DELL"} heading={"DELL"}/>
      <VerticalCardProduct category={"ACER"} heading={"ACER"}/>
      <VerticalCardProduct category={"ACER ASPIRE GO 15"} heading={"ACER ASPIRE GO 15"}/>
      <VerticalCardProduct category={"MICROSOFT SURFACE LAPTOP"} heading={"MICROSOFT SURFACE LAPTOP"}/>
      <VerticalCardProduct category={"DELL XPS 13 (2024)"} heading={"DELL XPS 13 (2024)"}/>
      <VerticalCardProduct category={"SAMSUNG GALAXY BOOK4"} heading={"SAMSUNG GALAXY BOOK4"}/>
    </div>
  )
}

export default Home