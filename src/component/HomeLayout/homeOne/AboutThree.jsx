import React, { Component } from "react";
import { FiSend, FiCheck } from "react-icons/fi";
import { Link } from 'react-router-dom';


class AboutThree extends Component {

    render(){
        let title = '会社概要',
        description = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        description2 = 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences';
        var namesItemOne = [
            '会社名​: 株式会社UNILEAD（ユニリード）',
            '代表取締役​: エルデネバートル・テルグーン​',
            '所在地​: 〒004-0841 札幌市清田区清田一条四丁目１番45号R4TMビル2003号室​',
            'Email: info@unilead.co.jp​',
            'Website​: http://www.unilead.co.jp/​',
            '設立​: 2018年11月16日​',
            '資本金​: 500万円​',
            '従業員数​:正社員6名、パート・アルバイト2名​',
            '許可​: 登録電気工事業者（一般用・自家用電気工作物）【北海道知事登録（石狩）第20211088号​,登録支援機関　【許可19登-0034469】​',
            '資格​: 1級⼟⽊施⼯管理技⼠ 1名​, 2級⼟⽊施⼯管理技⼠ 1名​, 2級建築施⼯管理技⼠ 1名​, 第1種電気⼯事⼠ 1名​, 第2種電気⼯事⼠ 1名​, ドローン操縦士1名​',
        ];
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.png" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <div className="icon">
                                            <FiSend />
                                        </div>
                                        <h2 className="title">{title}</h2>
                                        <ul className="list-style--1">
                                            {namesItemOne.map((name, index) => {
                                                return <li key={ index }><FiCheck /> {name}</li>;
                                            })}
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AboutThree;