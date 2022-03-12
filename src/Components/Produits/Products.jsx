import { popularProducts } from '../../Data/Data'

import Product from '../Produits/Product'

const Products = () => {

    return (

        <div className="Container_products">
            
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        
        </div>
    )
}

export default Products