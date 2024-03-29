import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';
import classNames from 'classnames';
import { history, Link, NavLink, Outlet } from 'umi';
import { useModel } from '@@/exports';
import {NavBar} from "antd-mobile";

export default function Layout() {
  const px2rem = px2remTransformer({
    rootValue: 16, // 32px = 1rem; @default 16
    precision: 10,
  });

  const isActive = (match, location) => {
    return location.path.includes('elder');
  };

  const { initialState = {}, loading, error, refresh, setInitialState } =
    useModel('@@initialState');

  const { currentUser = {} } = initialState;

  return (
    <StyleProvider transformers={[px2rem]}>
      <div
        className={classNames('bg-gray-F6  h-screen overflow-hidden w-full')}
      >
        <Outlet />
      </div>
    </StyleProvider>
  );
}
