"use client";

import { Accordion } from "@/components/ui/Accordion/Accordion";
import { Card } from "@/components/ui/Card/Card";
import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

const FAQPage: FunctionComponent = (): ReactNode => {
  return (
    <main>
      <Card className={classNames("padding-md", "user-select-none")}>
        <h2>Вопросы-ответы</h2>
      </Card>
      <Accordion className="margin-top">
        <Accordion.Group title="Что такое Билетопоиск?">
          <p>
            Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
            фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
            видео и интересные факты, поставить фильмам оценки, написать
            рецензии и дополнить описание фильмов.
          </p>
        </Accordion.Group>
        <Accordion.Group title="Какой компании принадлежит Билетопоиск?">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
            voluptatum maxime? Laboriosam aspernatur, eligendi minus labore
            error dolor vitae. Debitis suscipit voluptatibus numquam alias
            placeat tempora est in maiores quibusdam.
          </p>
          <p className="margin-top-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolore
            repellendus odio numquam ullam accusamus illo vitae rem. Sint quos
            quasi consectetur modi, non eligendi temporibus molestias excepturi
            dolor at. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates architecto distinctio labore! Mollitia sunt ratione
            recusandae unde possimus, optio suscipit alias eos minima, neque
            placeat totam ea enim ipsum labore. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsam autem nostrum aliquam itaque
            necessitatibus dolore minima sunt similique nisi error corrupti
            expedita culpa illum, eligendi amet tempore. Architecto, modi
            dolorem!
          </p>
          <p className="margin-top-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            aspernatur, deleniti dolor tempore nihil id quidem consequatur ea
            veniam magni perferendis! Harum repellendus, quasi excepturi
            nesciunt nostrum et omnis animi.
          </p>
        </Accordion.Group>
        <Accordion.Group title="Как купить билет на Билетопоиск?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi
            dolorum nam deleniti asperiores? Est, sequi? Quia quibusdam tempore
            voluptatum autem rerum deserunt ducimus ex facere optio, temporibus
            ipsum. Eos.
          </p>
        </Accordion.Group>
        <Accordion.Group title="Как оставить отзыв на Билетопоиск?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid
            quidem molestiae, dolorum voluptatibus voluptatem maxime quis cum?
            Dolorum nam itaque expedita odio ducimus fugit aperiam blanditiis
            corrupti voluptatibus ea? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Temporibus, sint eligendi enim sequi dolores ab
            eos aperiam libero blanditiis officiis alias vitae at deleniti quae
            non nemo sapiente dolorem ipsam!
          </p>
        </Accordion.Group>
      </Accordion>
    </main>
  );
};

export default FAQPage;
