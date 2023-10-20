import { Header } from "@/components/Header/Header";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import styles from "./layout.module.css";
import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";
import { inter } from "./fonts";
import { StoreProvider } from "@/redux/StoreProvider";

export const metadata = {
  title: "Билетопоиск",
  description: "Все баги написал Алексеев Федор",
};

interface RootLayoutProps {
  children?: ReactNode;
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({
  children,
}): ReactNode => {
  return (
    <html lang="ru">
      <body className={classNames(styles.body, inter.className)}>
        <StoreProvider>
          <Header />
        </StoreProvider>
        <div className={styles.wrapper}>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
