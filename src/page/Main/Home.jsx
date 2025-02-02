import Banner from "../../components/Home/Banner"
import Faq from "../../components/Home/Faq"
import LearningSystem from "../../components/Home/LearingSystem"
import OurMission from "../../components/Home/OurMission"
import HelmetTitle from "../../components/share/HelmetTitle"

const Home = () => {
  return (
    <section>
      <HelmetTitle title={'Home'}></HelmetTitle>
      <Banner></Banner>
      <LearningSystem></LearningSystem>
      <OurMission></OurMission>
      <Faq></Faq>
    </section>
  )
}

export default Home
