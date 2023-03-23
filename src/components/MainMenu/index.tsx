import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useLocation, useNavigate} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: '栏目1',
        key: '/page1',
        icon: <PieChartOutlined/>,
    },
    {
        label: '栏目2',
        key: '/page2',
        icon: <DesktopOutlined/>,
    },
    {
        label: '栏目3',
        key: '/page3',
        icon: <UserOutlined/>,
        children: [
            {
                label: '栏目301',
                key: '/page3/page301',
            },
            {
                label: '栏目302',
                key: '/page3/page302',
            }, {
                label: '栏目303',
                key: '/page3/page303',
            }
        ]
    },
    {
        label: '栏目4',
        key: '/page4',
        icon: <TeamOutlined/>,
        children: [
            {
                label: '栏目401',
                key: '/page4/page401',
            },
            {
                label: '栏目402',
                key: '/page4/page402',
            },
        ]
    },
    {
        label: '栏目5',
        key: '/page5',
        icon: <FileOutlined/>,
    },

];

const Comp: React.FC = () => {
    const navigateTo = useNavigate()
    const currentRoute = useLocation()
    console.log(currentRoute.pathname)
    const menuClick = (e: { key: string }) => {
        navigateTo(e.key)
    }
    const handleOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]])
    }
    let firstOpenKey: string = ""

    function findKey(obj:{key:string}) {
        return obj.key === currentRoute.pathname
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]!['children'].length>0 &&  items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key
            break ;
        }

    }

    const [openKeys, setOpenKeys] = useState([firstOpenKey])
    return (
        <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]} mode="inline" items={items} onClick={menuClick}
              openKeys={openKeys} onOpenChange={handleOpenChange}
        />
    )
}
export default Comp;
