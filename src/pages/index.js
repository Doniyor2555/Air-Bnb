import Header from "../../components/Header";
import Image from 'next/image';
import Banner from "../../components/Banner";
import SmallCard from '../../components/SmallCard'

export default function Home({ data }) {
  return (
    <div>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-2xl font-semibold pb-5">Explore Nearby</h2>

          {data?.map(item => (
            <SmallCard 
            img={item.img} 
            distance={item.distance} 
            location={item.location}/>

            
          ))}
        </section>
      </main>

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:3000/cardItems");
  const data = await exploreData.json()

  return {
    props: {
      data,
    },
  }
}