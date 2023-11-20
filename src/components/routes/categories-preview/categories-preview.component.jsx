import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../../context/categories.context";
import CategoryPreview from "../../category-preview/category-preview.componenet";

const CategoriesPreview  = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    console.log(categoriesMap);
    return(
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key ={title} title={title} products={products} />
                })
            }
        </Fragment>
        
    )
};
export default CategoriesPreview;