import "./styles.css";
import Oscar from "../../assets/oscar-logo.png";

const Header = () => {
    return(
        <header>
            <img src={Oscar} alt="oscar-logo"/>
            <span>Oscar Winners</span>
        </header>
    )
}

export default Header;