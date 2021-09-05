import React ,{ Component }from "react";
import { FiHome , FiCloudLightning , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiHome />,
        title: '一般土木・建築工事請負事業',
        description: '若手人材でお客様の建設現場を応援します。コンクリート基礎、型枠、鉄筋、小規模土木工事を請け負います。\n\n\n\n\n'
    },
    {
        icon: <FiCloudLightning />,
        title: '再生可能エネルギー事業',
        description: '太陽光発電所設計・施工・メンテナンスを一式請け負います。今までの経験と実績を活かし、高い品質の発電所を短期間で施工することでお客様のニーズにお応えします。\n\n\n'
    },
    {
        icon: <FiUsers />,
        title: 'i-construction支援 3DCAD・BIM・CIM',
        description: '建設業の生産性を向上のため、起工測量、3次元テータ作成、ICT建機による施工、3次元出来形管理、3次元データ納品、CIM、空中写真撮影・動画作成のサービスを提供し、i-constuctionで現場を支援します。'
    },
    { 
        icon: <FiUsers />,
        title: '特定技能者支援業務',
        description: '初めて来日する人でも安心して仕事を続けられるように支援し、お客様の雇用の維持・拡大を努めます。優秀なモンゴル人材を紹介し、就労ビザ取得支援をおこないます。\n\n\n'
    },
    {
        icon: <FiUsers />,
        title: '貿易（販売及び輸出入）',
        description: 'フェイスガードを製造、販売した経験に基づき、将来衣料品、日用雑貨、食料品の販売及び輸出入に向けて調査中です。\n\n\n\n\n'
    },
    // { 
    //     icon: <FiMonitor />,
    //     title: 'sample2',
    //     description: 'text text text text text text text text'
    // }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row service-main-wrapper">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2 text-left bg-gray">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
