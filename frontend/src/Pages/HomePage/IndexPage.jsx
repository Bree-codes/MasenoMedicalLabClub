import "./IndexPageStyles/IndexPage.css";
import IndexPageHeader from "./IndexPageHeader.jsx";
import IndexPageCarousel from "./IndexPageCarousel.jsx";
import IndexPageAboutUs from "./IndexPageAboutUs.jsx";
import IndexPageContactUs from "./IndexPageContactUs.jsx";
const IndexPage = () => {
    return (
        <div className={"index-page-sections"}>
            <div id={"index-header"}>
                <IndexPageHeader />
            </div>
            <div className={"index-body"} >
                <IndexPageCarousel />
                <IndexPageAboutUs />
                <IndexPageContactUs />
            </div>
        </div>
    )
}

export default IndexPage;