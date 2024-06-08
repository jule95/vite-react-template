import './App.scss';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import config from './config.ts';
import './App.scss';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <div className="App__navbar">
        <Link to={config.routes.home}>{t(`home`)}</Link>
        <Link to={config.routes.page1}>{t(`page1`)}</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
