import brand from "../../img/brand.svg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Tienda de Musica" title="Tienda de Musica"></img>
        </Link>
    )
}

export default Brand;