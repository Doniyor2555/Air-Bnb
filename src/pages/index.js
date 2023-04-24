import Header from "../../components/Header";
import Image from 'next/image';
import Banner from "../../components/Banner";
import SmallCard from '../../components/SmallCard'
import MediumCard from "../../components/MediumCard";
import LargeCard from "../../components/LargeCard";
import Footer from "../../components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-2xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(item => (
              <SmallCard
                key={item.id}
                img={item.img}
                distance={item.distance}
                location={item.location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ id, img, title }) => (
              <MediumCard key={id} img={img} title={title} />
            ))}
          </div>
        </section>

        <section>
          <LargeCard
            img='https://links.papareact.com/4cj'
            title='The Greatest Outdoors'
            description='Wishlists curated by Airbnb'
            buttonText='Get Inspired'
          />
        </section>

      </main>


      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:3000/cardItems").then(res => res.json());

  const cardsData = await fetch("http://localhost:3000/cardsData").then(res => res.json())

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}