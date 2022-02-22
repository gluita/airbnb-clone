import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Explore from "../components/Explore";
import CardData from "../components/Cards";
export default function Home({ articles, cards }) {
  // console.log(articles);
  return (
    <div className="">
      <Header />
      <Banner />
      <main className="max-w-[80%] mx-auto">
        <section className="pt-[20px]">
          <h2 className="pb-[20px]">Explore Nearby</h2>
          <Explore articles={articles} />
        </section>
        <section className="pt-[30px]">
          <h2 className="pb-[20px]">Live Anywhere</h2>
          <div className="flex gap-x-3 overflow-scroll pt-2 scrollbar-hide">
            {cards.map((doc) => (
              <CardData key={doc.id} img={doc.img} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const articles = await fetch("http://localhost:3000/api/places").then((res) =>
    res.json()
  );

  const cards = await fetch("http://localhost:3000/api/places").then((res) =>
    res.json()
  );
  return {
    props: {
      articles,
      cards,
    },
  };
};
