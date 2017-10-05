import React, {Component} from 'react';
import MenuContent from './menu_content';
import {getRootMenu} from '../../fakeApi/menu_api';
export default class MenuSideBar extends Component {
    constructor(props) {
        super(props);

        const ml = getRootMenu('CRM', 'CRM');
        // this.setState({rootMenus:ml});

        this.state = {
            rootMenus: ml
        };
    }
    componentDidMount(props) {

        //Load rootMenu
    }
    renderMenuContents() {
        // if Item has Child then render as submenu if Item no chils then render as
        // menuitem

        if (!this.state.rootMenus) {
            return <li className="header">Loading...</li>
        }
        const ret = this
            .state
            .rootMenus
            .map((m) => {
                return (<MenuContent menu={m}/>);
            });
        return ret;
    }

    render() {
        return (
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#">
                                <i className="fa fa-circle text-success"></i>
                                Online</a>
                        </div>
                    </div>
                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        {this.renderMenuContents()}
                    </ul>
                </section>
                {/* /.sidebar */}
            </aside>
        );
    }
};