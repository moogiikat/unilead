import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProgressBar } from 'react-bootstrap';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "ビジョン",
        tab2 = "ミッション",
        tab3 = "目標",
        tab4 = "行動方針";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>
{/* 
                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div className={`rn-progress-bar progress-bar--1 mt_dec--10`}>
                                                <div className="single-progress">
                                                    <h6 className="title">Designing</h6>
                                                    <ProgressBar now={95} />
                                                    <span className="label">95%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Managment</h6>
                                                    <ProgressBar now={85} />
                                                    <span className="label">85%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Marketing</h6>
                                                    <ProgressBar now={75} />
                                                    <span className="label">75%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Development</h6>
                                                    <ProgressBar now={80} />
                                                    <span className="label">80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel> */}
                                    
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">
                                                   •「最先端技術とともに進展し、独自の領域を切り拓くことで新しい価値を創り出し、よりよい未来へ導く」
                                                   </a>
                                                   •激しく変化していく時代の最先端技術の開発・応用・組み合わ
                                                    せを通じて、プロフェショナルとして私たちにしかできないこと
                                                    を追い求めていき、磨き上げることで新しい価値を生み出すこと
                                                    が私たちのビジョンです。お客様だけでなく、社会と新しい時代
                                                    に求められる事業・サービスを提供し、持続可能な未来のため、
                                                    社会の課題に挑みます。
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">•あらゆる面でのあるべき状態のお手本になり、新しい道を切り拓き、夢を与えることが私たちの使命だと考えています。</a>
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">•人を大切にし、人を磨き、人が活躍する場を作る</a>
                                               </li>
                                               <li>
                                                   <a href="/service">•やっている仕事のプロフェショナルであること</a>
                                               </li>
                                               <li>
                                                   <a href="/service">•同じ価値観をもつ最強のチームを作ること</a> 
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">•あるべき状態より、よくあるためか？</a>
                                               </li>
                                               <li>
                                                   <a href="/service">•仲間と協力し最後までやり遂げるためか？</a>
                                               </li>
                                               <li>
                                                   <a href="/service">•人、仲間、会社、社会のためか？</a>
                                               </li>
                                               <li>
                                                   <a href="/service">•プロとして誇れる仕事をするためか？</a>
                                               </li>
                                               <li>
                                                   <a href="/service">•失敗を恐れず、まず試してみるためか？</a>
                                               </li>
                                               <li>
                                                   <a href="/service">•あるべき状態とは？プロとは？</a>
                                               </li>
                                               <li>
                                                   <a href="/service">•責任をもってやり遂げること</a>
                                               </li>
                                               <li>
                                                   <a href="/service">•常にお客様の期待以上の仕事をすること</a>
                                               </li>
                                               <li>
                                                   <a href="/service">•失敗を繰り返さず、学び続けること</a>
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;