import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import Particles from 'react-particles-js';
import { FiChevronUp , FiX , FiMenu, FiCheck } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";
import AboutThree from "../component/HomeLayout/homeOne/AboutThree";
import CounterOne from "../elements/counters/CounterOne";
import TabTwo from "../elements/tab/TabTwo";
import Accordion01 from "../elements/Accordion";


const Portfolio_image = <img src="/assets/images/solorpanel.jpg" alt="React Creative Agency" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/interior/mask.png" alt="React Creative Agency" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/interior/services-3.jpg" alt="React Creative Agency" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/interior/services-1.jpg" alt="React Creative Agency" />;
let titleA = 'ビジョン、理念',
descriptionA = '技術の先端に挑戦し、常に理想(りそう)を追い求めて(おいもとめて)、よりよい未来へユニバースをリードする。';
const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'モンゴルパワーを⽇本へ\n⽇本の先端技術をモンゴルへ\nLEADする',
        description: 'コロナウィルス感染拡大防止のためフェイスガード・フェイスシールド製造販売中',
        buttonText: 'お問い合わせ',
        buttonLink: '#contact'
    }
]

const PortfolioList = [
    {
        image: Portfolio_image,
        category: '再⽣可能エネルギー事業',
        title: '再⽣可能エネルギー事業',
        description: ''
    },
    {
        image: Portfolio_image2,
        category: '日本製フェースシールド製造販売事業',
        title: '日本製フェースシールド製造販売事業',
        description: ''
    },
    {
        image: Portfolio_image3,
        category: 'モンゴル⼈就労者⽀援事業',
        title: 'モンゴル⼈就労者⽀援事業',
        description: ''
    },
    {
        image: Portfolio_image4,
        category: '再⽣可能エネルギー事業',
        title: '再⽣可能エネルギー事業',
        description: ''
    },
]

class HomeParticles extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
   

    render(){
        var namesItemOne = [
            'The Philosophy Of business analytics',
            'Fast-Track Your business',
            'Lies And Damn Lies About business',
        ];

        const PostList = BlogContent.slice(0 , 5);
        
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        
        return(
            <Fragment>
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
                
                {/* Start Slider Area   */}
                <div className="slider-activation slider-creative-agency with-particles" id="home">
                    <div className="frame-layout__particles">
                        <Particles
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 100
                                    },
                                    "size": {
                                        "value": 3
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="im_modern_slider bg_image bg_image--27 ">
                            {SlideList.map((value , index) => (
                                <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description_style-2">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-large" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div id="about" className="fix">
                    <div className="about-area ptb--120 bg_color--5">
                        <div className="about-wrapper">
                            <div className="container">
                                <div className="row row--35">
                                    {/* <div className="col-lg-5">
                                        <div className="thumbnail">
                                            <img className="w-100" src="/assets/images/about/about-7.jpg" alt="About Images"/>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <div className="about-inner inner">
                                            <div className="section-title">
                                                <span className="subtitle">経営理念 Vision</span>
                                                <h2 className="title">{titleA}</h2>
                                                <p className="description mt_dec--20">{descriptionA}</p>
                                            </div>
                                            <div className="row mt--30">
                                                <TabTwo tabStyle="tab-style--1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* End About Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row row--35">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-4.jpeg" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <span className="subtitle">経営理念 Vision</span>
                                        <h2 className="title">ビジョン、理念</h2>
                                        <p>技術の先端に挑戦し、常に理想(りそう)を追い求めて(おいもとめて)、よりよい未来へユニバースをリードする。</p>
                                    </div>
                                    <div className="accordion-wrapper mt--30">
                                        <Accordion01 />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start About Area */}
                <div className="about-area ptb--120 bg_color--1" id="about">
                    <AboutThree />
                </div>
                {/* End About Area */}
 
                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <div className="section-title text-left mb--30">
                                    <span className="subtitle">会社概要</span>
                                    <h2 className="title">事業内容</h2>
                                    <p className="description"></p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--120 pb--140 bg_color--1" id="portfolio">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left mb--30 mb_sm--0">
                                        <span className="subtitle">事業概要</span>
                                        <h2 className="title">最近の事業概要</h2>
                                        <p className="description">モンゴルパワーを活用し、お客様が満足する品質とサービスを提供します。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {PortfolioList.map((value , index) => (
                                    <div className="col-lg-6 col-sm-6 col-12 mt--30" key={index}>
                                        <div className="im_portfolio">
                                            <div className="thumbnail_inner">
                                                <div className="thumbnail">
                                                    <Link to="/portfolio-details">
                                                        {value.image}
                                                    </Link>    
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <div className="portfolio_heading">
                                                        <div className="category_list">
                                                            <Link to="/portfolio-details">{value.category}</Link>
                                                        </div>
                                                        <h4 className="title"><Link to="/portfolio-details">{value.title}</Link></h4>
                                                    </div>
                                                    <div className="portfolio_hover">
                                                        <p>{value.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <Link className="transparent_link" to={"/portfolio-details-"+index}></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}




                {/* Start CounterUp Area */}
                <div className="rn-counterup-area pt--140 p pb--110 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">Experts growts</span>
                                    <h2 className="title">当社の成長</h2>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                        <div className="row" style={{paddingTop: "30px"}}>
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h2 className="title">SDGsへの取り組み</h2>
                                    <h3 className="title" style={{color: "#f58634"}}>SDGsとは</h3>
                                    <p className="description">SDGsとは、２０１５年９月の国連サミットで採択された「持続可能な開発のための２０３０アジェンダ」に記載された２０１６年から２０３０年までの国際目標です。貧困や格差、気候変動などの世界の問題に人類全体が一丸となって取り組み、２０３０年までに解決を目指すものです。</p>
                                    <h3 className="title" style={{color: "#f58634"}}>UNILEADの取り組み</h3>
                                    <p className="description">SDGsの１７の目標は企業努力で実現できる範囲を超えた目標もあり、当社が貢献しやすい分野から着手しています。当社は以下の６目標を重点として、活動を開始しています。UNILEADは社員にストレスをかけないため、ノルマや期限を重視していませんが、掲げた目標は時間がかかっても必ず達成しています。</p>
                                    <p className="description">女性が働きやすい職場環境を作ることは、女性に限らず誰にとっても働きやすい職場環境の創出につながります。鹿島は「女性活躍推進」に積極的に取り組み、電気工事、ICTに女性の社員が女性がライフイベントに対応しやすくなるように、当社では多様な人事制度改革を実施し続けています。例えば、フレックスタイム制の導入、シェアオフィスの活用など、子育てなどをしている女性も働きやすい制度を積極的に展開しています。育児休暇</p>
                                    <h3 className="title" style={{color: "#f58634"}}>環境への取り組み</h3>
                                    <p className="description">弊社の施工した太陽光発電所31ヵ所は、年間/月間〇〇kWhの電気を発電している。これは、〇〇トン/kgのCO₂の排出を削減した。</p>
                                    <h3 className="title" style={{color: "#f58634"}}>社会への取り組み</h3>
                                    <p className="description">新型コロナウィルスの感染拡大防止に少しでも役に立てればと思い、近隣の小中高等学校に弊社が製造しているフェイスシールドを寄付させていただきました。一人ひとりの感染拡大防止に努力することはもちろん、弊社としても地域の一員としてできることで応援していきたいです。</p>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6 col-12 mt--30">
                                            <div className="im_portfolio">
                                                <div className="thumbnail_inner">
                                                    <div className="thumbnail">
                                                        <img src={`/assets/images/service/1.jpeg`} alt="Blog Images"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12 mt--30">
                                            <div className="im_portfolio">
                                                <div className="thumbnail_inner">
                                                    <div className="thumbnail">
                                                        <img src={`/assets/images/service/2.jpeg`} alt="Blog Images"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12 mt--30">
                                            <div className="im_portfolio">
                                                <div className="thumbnail_inner">
                                                    <div className="thumbnail">
                                                        <img src={`/assets/images/service/3.jpeg`} alt="Blog Images"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Team Area  */}
                <div className="rn-team-area ptb--120 bg_color--1" id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-left mb--25 mb_sm--0">
                                    <span className="subtitle">Our Experts</span>
                                    <h2 className="title">チームメンバー</h2>
                                    <p className="description">紹介</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120" id="testimonial">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}
                

                {/* Start Blog Area */}
                <div className="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="section-title text-left">
                                    <span className="subtitle">ニュース</span>
                                    <h2 className="title">最近のニュース</h2>
                                    <p className="description"></p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
                            <div className="col-lg-12">
                                <Slider {...slickDot}>
                                    {PostList.map((value , i ) => (
                                        <div className="im_box" key={i}>
                                            <div className="thumbnail">
                                                <Link to="/blog-details">
                                                    <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <div className="content_heading">
                                                        <div className="category_list">
                                                            <Link to={"/blog-details-"+i}>{value.category}</Link>
                                                        </div>
                                                        <h4 className="title">
                                                            <Link to={"/blog-details-"+i}>{value.title}</Link>
                                                        </h4>
                                                    </div>
                                                    <div className="content_footer">
                                                        <Link to={"/blog-details-"+i} className="rn-btn btn-opacity">Read More</Link>
                                                    </div>
                                                </div>
                                                <Link className="transparent_link" to={"/blog-details-"+i}></Link>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>    
                    </div>    
                </div>
                {/* End Blog Area */}

                {/* Start Contact Us */}
                <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
                    <Contact />
                </div>
                {/* End Contact Us */}

                 {/* Start Footer Style  */}
                 <FooterTwo />
                {/* End Footer Style  */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

            </Fragment>
        )
    }
}
export default HomeParticles;