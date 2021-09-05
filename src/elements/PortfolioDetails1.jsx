import React, { Component } from "react";
import Scrollspy from 'react-scrollspy';
import { FiX , FiMenu} from "react-icons/fi";
import Helmet from "../component/common/Helmet";



class ServiceDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <Helmet pageTitle="Unilead || モンゴルパワーを⽇本へ" />
                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img className="logo-1" src="/assets/images/logo/logo.png" alt="Logo Images"/>
                                    <img className="logo-2" src="/assets/images/logo/logo.png" alt="Logo Images"/>
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home','service', 'portfolio','team','testimonial','blog', 'contact']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">ホーム</a></li>
                                    <li><a href="#service">企業概要</a></li>
                                    {/* <li><a href="#about">企業概要</a></li> */}
                                    <li><a href="#portfolio">事業概要</a></li>
                                    <li><a href="#team">チームメンバー</a></li>
                                    <li><a href="#testimonial">言葉</a></li>
                                    <li><a href="#blog">ブログ</a></li>
                                    <li><a href="#contact">お問い合わせ</a></li>
                                </Scrollspy>
                            </nav>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">日本製フェースシールド製造販売事業</h2>
                                    <p>【コロナウィルス感染拡大防止のために】 コロナウィルスが流行する中、最前線でウィルスと戦う医療関係者の防護具 が圧倒的に不足しており、感染拡大防止に少しでも役に立つために フェイスガード・フェイスシールドの製造・販売を始めました。 ウィルスと戦うすべての人々のために、良いものをより早くお届けするために 最善を尽くします。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}
            </React.Fragment>
        )
    }
}
export default ServiceDetails;