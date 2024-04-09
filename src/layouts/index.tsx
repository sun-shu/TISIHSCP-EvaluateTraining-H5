import classNames from 'classnames';
import {Outlet} from 'umi';
import './index.less'
import {useSearchParams} from '@@/exports';
import {useCookieState} from 'ahooks';


export default function Layout() {
    const [, setToken] = useCookieState('TOKEN', {
        defaultValue: '',
        path: '/',
        expires: undefined,
    });

    const [searchParams] = useSearchParams();

    const userToken = searchParams.get('userToken');

    // 这里的TOKEn应该不能通过通过本地种，应该需要通过接口请求
    // useEffect(() => {
    //     if (userToken) {
    //         setToken(userToken);
    //     }
    // }, []);

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
