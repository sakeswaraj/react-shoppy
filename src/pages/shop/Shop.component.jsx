import React ,{useState} from 'react'
import PreviewCollection from '../../components/preview-collection/PreviewCollection.component'
import SHOP_DATA from "../../utils/shopData"

function Shop() {
    
    const [shopDataArray,setShopDataArray]=useState(SHOP_DATA)
    return (
        <div className='shop-page'>
        {shopDataArray.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
}

export default Shop
