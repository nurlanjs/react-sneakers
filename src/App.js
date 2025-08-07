import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";

function App() {

  const [items, setItems] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [cardOpened, setCardOpened] = useState(false);


  useEffect(() => {
    fetch('https://68943e4ebe3700414e126aa4.mockapi.io/items')
      .then(res => res.json())
      .then(json => setItems(json))
      .catch(err => console.error("Ошибка при получении данных:", err));
  }, []);

  const onAddToCard = (obj) => {
    setCardItems(prev => [...prev, obj]);
  }

  const removeItemOnCard = (name) => {
    setCardItems(prevItems => prevItems.filter(item => item.name !== name));
  }

  return (
    <div className="wrapper clear">
      {cardOpened && <Drawer items={cardItems} onClose={() => setCardOpened(false)} />}
      <Header onClickCard={() => setCardOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кровссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search" width={14} height={14} />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items.map((item, index) => {
              return <Card
                key={index}
                {...item}
                onFavorite={() => console.log("Закладки")}
                onPlus={(obj) => onAddToCard(obj)}
                notOnPlus={(name) => removeItemOnCard(name)}
              />;
            })
          }
        </div>
      </div>
    </div >
  );
}

export default App;
