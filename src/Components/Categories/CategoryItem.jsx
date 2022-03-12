const CategoryItem = ({ item }) => {

    return (
        <div className="Container_cat2">
            
            <img className="Image_cat2" src={item.img} alt=""/>

            <div className="Info_cat2">

                <h1 className="Title_cat2">{item.title}</h1>
                <button className="btn_cat2">ACHETER MAINTENANT</button>
            
            </div>
        
        </div>
    )
}

export default CategoryItem