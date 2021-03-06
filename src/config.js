import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PinDropIcon from '@material-ui/icons/PinDrop';
import EmailIcon from '@material-ui/icons/Email';
import ExtensionIcon from '@material-ui/icons/Extension';
import MenuIcon from '@material-ui/icons/Menu';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import PaletteIcon from '@material-ui/icons/Palette';
import PersonIcon from '@material-ui/icons/Person';
import EventNoteIcon from '@material-ui/icons/EventNote';
import FaceIcon from '@material-ui/icons/Face';
import ChatIcon from '@material-ui/icons/Chat';
import DateRangeIcon from '@material-ui/icons/DateRange';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import PollIcon from '@material-ui/icons/Poll';
import GroupIcon from '@material-ui/icons/Group';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import themes from './themes';

export const configuredTheme = themes[0].theme;

export const configuredLayout = {
    currentLayout: 'classic',
    notificationsOpen: false
};

const iconStyle = {
    fontSize: 16
};

export const menuItems = [

{
    title: 'Dashboard',
    href: '/',
    icon: <DashboardIcon style={iconStyle}/>
},


{
    title: 'Employee',
    href: '/apps/contacts',
    icon: <GroupIcon style={iconStyle}/>
},

{
    title: 'Attendness',
    href: '/dashboards/project',
    icon: <AlarmOnIcon style={iconStyle}/>
},


{
    title: 'Chat',
    href: '/apps/chat',
    icon: <ChatIcon style={iconStyle}/>
}, 


{
    title: 'Notice',
    href: '/apps/notes',
    icon: <NotificationsNoneIcon style={iconStyle}/>
},
{
    title: 'Holidays',
    href: '/apps/calendar',
    icon: <DateRangeIcon style={iconStyle}/>
},

{
    title: 'Leaves',
    href: '/leave',
    icon: <PollIcon style={iconStyle}/>
},



{
    title: 'Role Permision',
    icon: <DeviceHubIcon style={iconStyle}/>,
    children: [{
        title: 'Roles',
        href: '/role'
    }, {
        title: 'Add Role',
        href: '/addrole'
    }]
},


{
    title: 'Users',
    icon: <AccountCircleIcon style={iconStyle}/>,
    children: [{
        title: 'User list',
        href: '/apps/contacts'
    }, {
        title: 'Add User',
        href: '/addusers'
    }]
},


{
    title: 'Settings',
    href: '/theming',
    icon: <BuildIcon style={iconStyle}/>
},


{
    title: 'Log Out',
    href: '/login',
    icon: <PowerSettingsNewIcon style={iconStyle}/>
},





];
