import React, { Component } from "react";
import emailjs from 'emailjs-com';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactTwo extends Component{
    static defaultProps = {
        center: {
            lat: 42.99925379949643,
            lng: 141.44080780738938
        },
        zoom: 15
    };
    sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_kxrrokj', 'template_hpnm4s7', e.target, 'user_dIkPipRwN3MrLQQcAX0QP')
            .then((result) => {
                document.getElementById("contact-message").innerText = "✓ ご希望が成功しました."
            }, (error) => {
                document.getElementById("contact-message").innerText = "✕ エラーが発生しました。もう一度やってみてください"
            });
            e.target.reset()
    }

    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <span className="subtitle">お気軽にお問い合わせください。</span>
                                <h2 className="title">お問い合わせ</h2>
                                <div className="im_address">
                                    <span>電話番号:</span>
                                    <a className="link im-hover">011-311-3848</a>
                                </div>
                                <div className="im_address mt--5">
                                    <span>メールアドレス:</span>
                                    <a className="link im-hover" >info@unilead.co.jp</a>
                                </div>
                                <div className="im_address mt--5">
                                    <span>郵便番号:</span>
                                    <a className="link im-hover" >〒004ｰ0841</a>
                                </div>
                                <div className="im_address mt--5">
                                    <span>アドレス:</span>
                                    <a className="link im-hover" >北海道札幌市清田区清田1条4丁目1番45号　R4TMビル　2003号室</a>
                                </div>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={this.sendEmail}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.rnName}
                                            onChange={(e)=>{this.setState({rnName: e.target.value});}}
                                            placeholder="お名前"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="メールアドレス"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnSubject}
                                            onChange={(e)=>{this.setState({rnSubject: e.target.value});}}
                                            placeholder="タイトル"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.rnMessage}
                                            onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
                                            placeholder="ご希望"
                                        />
                                    </label>
                                    <button className="btn-default" value="Send" type="submit">Submit</button>
                                    <div>
                                        <span id="contact-message"></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                             {/* Start Contact Map  */}
                            <div className="rn-contact-map-wrapper ptb--120 bg_color--1">
                                <div className="container">
                                    <div className="row">
                                        {/* Start Single Map  */}
                                        <div className="col-lg-12">
                                            <div className="rn-contact-map-area position-relative">
                                                <div style={{ height: '550px', width: '100%' }}>
                                                    <GoogleMapReact
                                                    defaultCenter={this.props.center}
                                                    defaultZoom={this.props.zoom}
                                                    >
                                                    <AnyReactComponent
                                                        lat={42.99925379949643}
                                                        lng={141.44080780738938}
                                                        text="My Marker"
                                                    />
                                                    </GoogleMapReact>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Map  */}
                                    </div>
                                </div>
                            </div>
                            {/* End Contact Map  */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;