import { categories } from '../../Data/Data'
import CategoryItem from '../Categories/CategoryItem'

const Categories = () => {

    return (
        <div className='Container_cat1'>
            
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}    
        
        </div>
    )
}

export default Categories