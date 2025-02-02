import Banner from "../../components/Home/Banner"
import Faq from "../../components/Home/Faq"
import OurMission from "../../components/Home/OurMission"
import HelmetTitle from "../../components/share/HelmetTitle"

const Home = () => {
  return (
    <section>
      <HelmetTitle title={'Home'}></HelmetTitle>
      <Banner></Banner>
      <OurMission></OurMission>
      <Faq></Faq>
    </section>
  )
}

export default Home
