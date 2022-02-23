import { useState } from 'react';
import useclassnames from '@maxigarcia/useclassnames';
import useMemoClassnames from '@maxigarcia/useclassnames/dist/memo';

import './App.css';

function App() {
  const [isBgNavi, setIsBgNavi] = useState(true);
  const [bigTitle, setBigTitle] = useState(false);

  const appClassNames = useclassnames({
    classNames: 'App',
    objectClassNames: { navi: isBgNavi, red: !isBgNavi },
  });

  const titleClassNames = useMemoClassnames(
    {
      classNames: 'center',
      objectClassNames: { 'title--big': bigTitle, 'title--normal': !bigTitle },
    },
    [bigTitle]
  );

  return (
    <div className={appClassNames}>
      <h1 className={titleClassNames}>Hello useClassnames!</h1>
      <section className='center'>
        <button type='button' onClick={() => setIsBgNavi((prevState) => !prevState)}>
          Click me to change the backgroud
        </button>
        <button type='button' onClick={() => setBigTitle((prevState) => !prevState)}>
          Click me to change the title size
        </button>
      </section>
      <section>
        <h2>useclassnames</h2>
        <p>
          Just use it when you want to build strings of classes in every render. if you hava many render maybe you
          should to use <b>useMemoClassnames</b>
        </p>
        <h2>useMemoClassnames</h2>
        <p>Just use it when you want to build strings of classes when array of dependencies change.</p>
      </section>
    </div>
  );
}

export default App;
