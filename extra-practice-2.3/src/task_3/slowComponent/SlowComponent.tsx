export const SlowComponent = () => {
  console.log('SlowComponent повторный рендеринг...');

  let now = performance.now();

  while (performance.now() - now < 1000) {
    // Искусственная задержка - ничего не делает в течение 100 мс
  }

  return <p>Я очень медленное дерево компонентов.</p>;
};
