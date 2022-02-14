import {ReactComponent as Aviator} from "../../assets/image/formForGlasses/aviator.svg";
import {ReactComponent as Kvadratnaya} from "../../assets/image/formForGlasses/kvadratnaya.svg";
import {ReactComponent as Kruglaya} from "../../assets/image/formForGlasses/kruglaya.svg";
import {ReactComponent as CatEyes} from "../../assets/image/formForGlasses/catEyes.svg";
import {ReactComponent as Babochka} from "../../assets/image/formForGlasses/babochka.svg";
import {ReactComponent as Zakruglenaya} from "../../assets/image/formForGlasses/zakruglenaya.svg";
import {ReactComponent as NeStandart} from "../../assets/image/formForGlasses/neStandartnaya.svg";
import {ReactComponent as Ovalnaya} from "../../assets/image/formForGlasses/Ovalnaya.svg";
import {ReactComponent as Pryamougolnaya} from "../../assets/image/formForGlasses/Pryamougolnaya.svg";
import React from "react";

export const config = {
  polarization: [
    {id: 1, value: true},
    {id: 2, value: false}
  ],
  frameForGlasses: [
    {id: 1, value: "Авиатор", img: <Aviator/>},
    {id: 2, value: "Квадратная", img: <Kvadratnaya/>},
    {id: 3, value: "Круглая", img: <Kruglaya/>},
    {id: 4, value: "Кошачий Глаз", img: <CatEyes/>},
    {id: 5, value: "Бабочка", img: <Babochka/>},
    {id: 6, value: "Закругленная", img: <Zakruglenaya/>},
    {id: 7, value: "Нестандартная", img: <NeStandart/>},
    {id: 8, value: "Овальная", img: <Ovalnaya/>},
    {id: 9, value: "Прямоугольная", img: <Pryamougolnaya/>}
  ],
  brand: [
    {id: 1, value: "Fendi"},
    {id: 2, value: "Gucci"},
    {id: 3, value: "Ray-Ban"},
    {id: 4, value: "Marc Jacobs"},
    {id: 5, value: "Polaroid"},
    {id: 6, value: "Guess"}
  ],
  sale: [
    {id: 1, value: true},
    {id: 2, value: false},
  ],
  gender: [
    {id: 1, value: "female"},
    {id: 2, value: "male"}
  ]
};
