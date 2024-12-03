import SearchForm from "../searchForm/SearchForm";
import './header.css';

export default function Header() {
    return (

        <div className="blur-background headerDiv">
        <div className="blur-overlay">
           <div className="nameDiv"> <strong>netflix</strong>roulette</div>
        <SearchForm></SearchForm>
        </div>
      </div>
    )
}