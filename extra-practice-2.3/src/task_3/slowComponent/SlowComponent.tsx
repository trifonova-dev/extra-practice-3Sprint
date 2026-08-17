export const SlowComponent = () => {
  console.log('SlowComponent повторный рендеринг...');

  return <p>Я очень медленное дерево компонентов.</p>;
};
