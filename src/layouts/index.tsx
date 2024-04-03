import classNames from 'classnames';
import {Outlet} from 'umi';
import './index.less'

export default function Layout() {
    const isActive = (match, location) => {
        return location.path.includes('elder');
    };

    // const {initialState = {}, loading, error, refresh, setInitialState} =
    //     useModel('@@initialState');
    //
    // const {currentUser = {}} = initialState;

    return (
        <div
            className={classNames('bg-gray-F6  h-screen overflow-hidden w-full')}
        >
            <Outlet/>
        </div>
    );
}
