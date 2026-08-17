import * as React from "react";

export const SlowComponent = React.memo(() => {
  console.log('SlowComponent повторный рендеринг...');

  return <p>Я очень медленное дерево компонентов.</p>;
});
