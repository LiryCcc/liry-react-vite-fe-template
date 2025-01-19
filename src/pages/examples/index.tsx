import { Link, Outlet } from 'react-router';

const Examples = () => {
  return (
    <>
      {/* <div>{'Examples'}</div> */}
      <div>
        <div>{'examples 路由'}</div>
        <Link to={'./'}>{'examples本地'}</Link>
        <Link to={'./env'}>{'env'}</Link>
        <Link to={'./i18n'}>{'i18n'}</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Examples;
