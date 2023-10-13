import { FilmsList } from "@/components/FilmsList";
import styles from "./page.module.css";
import { SearchFilterBar } from "@/components/SearchFilterBar/SearchFilterBar";
import { fetchFilms } from "@/fetches/fetchFilms";
import classNames from "classnames";
import { StoreProvider } from "@/redux/StoreProvider";

const HomePage = async ({ searchParams }: { searchParams: { cinemaId?: string } }) => {
  const films = await fetchFilms(searchParams.cinemaId);

  return (
    <div className={styles.wrapper}>
      <StoreProvider>
        <SearchFilterBar />
        <main className={classNames("margin-left", styles.main)}>
          <FilmsList films={films} />
        </main>
      </StoreProvider>
    </div>
  )
};

export default HomePage;