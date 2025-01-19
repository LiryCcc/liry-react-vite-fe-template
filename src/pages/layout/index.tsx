import { Link, Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <div>{'模板'}</div>
      <div>
        {'layout路由'}
        <div>
          <Link to={'/examples'}>{'examples'}</Link>
          <br />
          <Link to={'/home'}>{'home'}</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
