import React, { Component } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { FiCheck } from "react-icons/fi";

class Accordion01 extends Component {
    render(){
        var namesItemOne = [
            'あるべき状態より、よくあるためか？',
            '仲間と協力し最後までやり遂げるためか？',
            '人、仲間、会社、社会のためか？',
            'プロとして誇れる仕事をするためか？<',
            '失敗を恐れず、まず試してみるためか？',
            'あるべき状態とは？プロとは？',
            '責任をもってやり遂げること',
            '常にお客様の期待以上の仕事をすること',
            '失敗を繰り返さず、学び続けること',
        ];

        var namesItemZero = [
            '人を大切にし、人を磨き、人が活躍する場を作る',
            'やっている仕事のプロフェショナルであるこ',
            '同じ価値観をもつ最強のチームを作ること',
        ];

        var namesItemMinus = [
            '「最先端技術とともに進展し、独自の領域を切り拓くことで新しい価値を創り出し、よりよい未来へ導く',
            '激しく変化していく時代の最先端技術の開発・応用・組み合わ せを通じて、プロフェショナルとして私たちにしかできないこと を追い求めていき、磨き上げることで新しい価値を生み出すこと が私たちのビジョンです。お客様だけでなく、社会と新しい時代 に求められる事業・サービスを提供し、持続可能な未来のため、 社会の課題に挑みます。',
        ];

        return(
            <Accordion className="accodion-style--1" preExpanded={'0'}>
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            ビジョン
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ul className="list-style--1">
                            {namesItemMinus.map((name, index) => {
                                return <li key={ index }><FiCheck /> {name}</li>;
                            })}
                        </ul>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            目標
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ul className="list-style--1">
                            {namesItemZero.map((name, index) => {
                                return <li key={ index }><FiCheck /> {name}</li>;
                            })}
                        </ul>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            ミッション
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            あらゆる面でのあるべき状態のお手本になり、新しい道を切り拓き、夢を与えることが私たちの使命だと考えています。
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            行動方針
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ul className="list-style--1">
                            {namesItemOne.map((name, index) => {
                                return <li key={ index }><FiCheck /> {name}</li>;
                            })}
                        </ul>
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>
        )
    }
}

export default Accordion01;





