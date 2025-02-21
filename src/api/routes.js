import HomePageAsync from "@pages/HomePage/HomePage.async";
import FilmsPageAsync from "@pages/FilmsPage/FilmsPage.async";
import FilmAsync from "@pages/Film/Film.async";
import NotFoundPageAsync from "@pages/NotFoundPage/NotFoundPage.async";
import ProfileAsync from "@pages/Profile/Profile.async";
import { TempPage } from "@pages/TempPage/TempPage";
import FavoritesPageAsync from "@pages/Favorites/Favorites.async";

export const routesPath = {
     HOME: "/",
     FILMS: "films/:type",
     FILM: "film/:id",
     PROFILE: "profile",
     TEMP: "temp",
     NOT_FOUND: "*",
     FAVORITES: "favorites"
}

const routes = {
     home: {
          path: routesPath.HOME,
          element: <HomePageAsync />
     },
     films: {
          path: routesPath.FILMS,
          element: <FilmsPageAsync/>
     },
     film: {
          path: routesPath.FILM,
          element: <FilmAsync/>
     },
     profile: {
          path: routesPath.PROFILE,
          element: <ProfileAsync />,
          isPrivate: true
     },
     favoritesPage: {
          path: routesPath.FAVORITES,
          element: <FavoritesPageAsync/>,
          isPrivate: true
     },
     tempPage: {
          path: routesPath.TEMP,
          element: <TempPage/>,
          isPrivate: true
     },
     notFound: {
          path: routesPath.NOT_FOUND,
          element: <NotFoundPageAsync/>
     }
}


export default routes;