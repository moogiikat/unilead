import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: '⼀般⼟⽊・建築⼯事請負事業',
        description: '⼀般⼟⽊・建築⼯事請負事業'
    },
    {
        icon: <FiLayers />,
        title: '再生可能エネルギー事業',
        description: '再生可能エネルギー事業（太陽光発電所設計・施工・メンテナンス）'
    },
    {
        icon: <FiUsers />,
        title: '特定技能者支援業務',
        description: '特定技能者支援業務（許可19登-0034469)'
    },
    { 
        icon: <FiMonitor />,
        title: 'マスク',
        description: '日本製フェイスガード・フェイスシールド製造販売事業'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    }
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
