import React, { Component } from "react";
import emailjs from 'emailjs-com';

class ContactTwo extends Component{
    sendEmail(e){
        console.log(e.target);
        e.preventDefault();

        emailjs.sendForm('service_kxrrokj', 'template_hpnm4s7', e.target, 'user_dIkPipRwN3MrLQQcAX0QP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
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
                                    <span>Tel:</span>
                                    <a className="link im-hover" href="phone">011-311-3848</a>
                                </div>
                                <div className="im_address mt--5">
                                    <span>Email:</span>
                                    <a className="link im-hover" href="email">info@unilead.co.jp</a>
                                </div>
                                <div className="im_address mt--5">
                                    <span>Adress</span>
                                    <a className="link im-hover" href="email">〒004ｰ0841 北海道札幌市清田区清田1条4丁目1番45号　R4TMビル　2003号室</a>
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
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnSubject}
                                            onChange={(e)=>{this.setState({rnSubject: e.target.value});}}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.rnMessage}
                                            onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="btn-default" value="Send" type="submit">Submit Now</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/contact.jpg" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;