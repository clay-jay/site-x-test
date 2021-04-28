import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DeliveryCards from '../components/delivery/index.js'
import DescriptionBlock from "../components/descriptionBlock"
import DeliveryIcon from "../images/deliveryIcon.svg"

const IndexPage = () => (
  <div>
    <DescriptionBlock title="Информация о доставке" icon={DeliveryIcon}/>
    <DeliveryCards />
    <DescriptionBlock title="Характеристика" icon={DeliveryIcon}/>
    <DeliveryCards />

  </div>
)

export default IndexPage
