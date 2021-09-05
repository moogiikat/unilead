import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>✓ 最先端技術とともに進展し、独自の領域を切り拓くことで新しい価値を創り出し、よりよい未来へ導く</p>
                                                <br />

                                                <p>✓ 激しく変化していく時代の最先端技術の開発・応用・組み合わ せを通じて、プロフェショナルとして私たちにしかできないこと を追い求めていき、磨き上げることで新しい価値を生み出すこと が私たちのビジョンです。お客様だけでなく、社会と新しい時代 に求められる事業・サービスを提供し、持続可能な未来のため、 社会の課題に挑みます。</p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span></span></h6>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>✓ 人を大切にし、人を磨き、人が活躍する場を作る </p>
                                                <p>✓ やっている仕事のプロフェショナルであるこ</p>
                                                <p>✓ 同じ価値観をもつ最強のチームを作ること</p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span></span></h6>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    {/* <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p></p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span></span></h6>
                                            </div>
                                        </div>
                                    </TabPanel> */}
                                   

                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>✓ あらゆる面でのあるべき状態のお手本になり、新しい道を切り拓き、夢を与えることが私たちの使命だと考えています。</p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span></span></h6>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    
                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>✓ あるべき状態より、よくあるためか？</p>
                                                <p>✓ 仲間と協力し最後までやり遂げるためか？</p>
                                                <p>✓ 人、仲間、会社、社会のためか？</p>
                                                <p>✓ プロとして誇れる仕事をするためか？</p>
                                                <p>✓ 失敗を恐れず、まず試してみるためか？</p>
                                                <p>✓ あるべき状態とは？プロとは？</p>
                                                <p>✓ 責任をもってやり遂げること</p>
                                                <p>✓ 常にお客様の期待以上の仕事をすること</p>
                                                <p>✓ 失敗を繰り返さず、学び続けること</p>                                                
                                            </div>
                                            <div className="author-info">
                                                <h6><span> </span></h6>
                                            </div>
                                        </div>
                                    </TabPanel>

                               
                                </div>
                                <div className="col-lg-6 mt_md--40 mt_sm--40">
                                    <TabList className="testimonial-thumb-wrapper">
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/assets/images/team/vision-1.png" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/assets/images/team/vision-4.png" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                        {/* <Tab>
                                            <div style={{display : "none"}} className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/assets/images/team/vision-5.png" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab> */}
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/assets/images/team/vision-3.png" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/assets/images/team/vision-2.png" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                      
                                        {/* <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/assets/images/client/testimonial-7.jpg" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/assets/images/client/testimonial-8.jpg" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab> */}
                                    </TabList>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;