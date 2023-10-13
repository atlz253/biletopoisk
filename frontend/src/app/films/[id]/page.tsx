import { FilmCard } from "@/components/FilmCard/FilmCard";
import { FilmReviews } from "@/components/FilmReviews";
import { FunctionComponent } from "react";
import { StoreProvider } from "@/redux/StoreProvider";
import { fetchFilm } from "@/fetches/fetchFilm";

interface FilmPageProps {
    params: { id: string }
}

const FilmPage: FunctionComponent<FilmPageProps> = async ({ params }) => {
    const film = await fetchFilm(params.id);

    return (
        <main>
            <StoreProvider>
                <FilmCard.Big film={film} />
                <FilmReviews
                    className="margin-top"
                    filmId={params.id}
                />
            </StoreProvider>
        </main>
    )
};

export default FilmPage;