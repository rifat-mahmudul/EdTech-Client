import Banner from "../../components/Home/Banner"
import OurMission from "../../components/Home/OurMission"
import HelmetTitle from "../../components/share/HelmetTitle"

const Home = () => {
  return (
    <section>
      <HelmetTitle title={'Home'}></HelmetTitle>
      <Banner></Banner>
      <OurMission></OurMission>
    </section>
  )
}

export default Home
