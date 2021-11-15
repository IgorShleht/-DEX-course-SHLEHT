export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  cartData.map((el) => {
    if (el.oldPrice - el.price >= 0) {
      return {
        ...el,
        ...(el.discount = el.oldPrice - el.price),
        ...delete el.oldPrice
      };
    }
    return {
      ...el,
      ...delete el.oldPrice
    };
  });
  return cartData;
};

export const makeCartItemCopy = (cartItem) => {
  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
  const findEl = cartItem.find((el) => el.name === "Пицца с анчоусами");
  const findElCopy = { ...findEl };
  findElCopy.addedIngredients[0].count += 1;

  return findElCopy;
};

export const calcSum = (cartData) => {
  //TODO: посчитать суммы по типам товаров и их цены
  let purchaseData = {
    total: { count: 0, sum: 0 },
    water: { count: 0, sum: 0 },
    pizza: { count: 0, sum: 0 },
    other: { count: 0, sum: 0 }
  };

  cartData.forEach((e) => {
    for (const key in purchaseData) {
      if (key === e.type) {
        purchaseData[key].count += e.count;
        purchaseData[key].sum += e.price * e.count;
        purchaseData["total"].count += e.count;
        purchaseData["total"].sum += e.price * e.count;
      }
    }
  });
  return purchaseData;
};

export const getCartItemsByDate = (cartData, date) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  const searchDate = new Date(date).toLocaleDateString();
  date &&
    (cartData = cartData.filter(
      (el) => new Date(el.date).toLocaleDateString() === searchDate
    ));

  return cartData;
};

export const repeatOrder = (cartData, date) => {
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
  const searchDate = new Date(date).toLocaleDateString();
  cartData.map((el) => {
    cartData = [...cartData];
    if (new Date(el.date).toLocaleDateString() === searchDate) {
      return [
        ...cartData,
        cartData.unshift({
          ...el,
          id: cartData.length.toString(),
          date: new Date()
        })
      ];
    }
  });
  return cartData;
};

export const addItem = (cartData, item) => {
  //TODO: увеличить кол-во товара в полученном элементе
  cartData.map((el) => {
    return { ...el, count: el.id === item.id && el.count++ };
  });
  return cartData;
};

export const checkPromo = (cartData) => {
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров
  let totalSum = 0;
  let maxSumOnly = false;
  let discount = false;
  cartData.forEach((e) => {
    totalSum += e.price * e.count;
    discount = e.discount ? true : false;
  });
  cartData.forEach((el) =>
    el.price * el.count > 500 ? (maxSumOnly = true) : null
  );
  return {
    total: totalSum > 1000,
    oneBigPosition: maxSumOnly,
    notDiscounted: discount
  };
};
