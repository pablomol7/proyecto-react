import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/vientos"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/cuerdas">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/percusion">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/pianos">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;

