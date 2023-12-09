import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeatureSurvey from "../../Home/FeatureSurveys/FeatureSurveys";
import FAQ from "../FAQ/FAQ";
import Latest_Serveys from "../LatestSurvey/LatestSurvey";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Survey App | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeatureSurvey></FeatureSurvey>
            <Latest_Serveys></Latest_Serveys>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;