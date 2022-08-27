import React, { useState, useEffect } from "react";
import { ImGift } from "react-icons/im";
import { useReach, fmtClasses } from "../../hooks";
import styles from "../../styles/Shared.module.css";
import Contribute from "./Contribute";
import proposal from "../../styles/Proposals.module.css";

const Proposals = () => {
    const { setContract, connectAndClaimRefund, proposals,  connectAndClaimTokens, sortArrayOfObjects, setViews } = useReach();
    const [page, setPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [showContrib, setShowContrib] = useState(false);

    useEffect(() => {
        const x = [], runs = Math.ceil(proposals.length / 5);
        let i = 0;
        for (i; i < runs; i++) {
            x.push(i);
        }
        setPageNumbers(x);
    }, [proposals]);

    const PageNumbers = ({ index }) => {
        return (
            <div key={ index } className={ fmtClasses(
                styles.flat,
                styles.flex,
                styles.widthFitContent,
                styles.itemsCenter,
                page === index ? styles.pageNumActive : styles.pageNum
            ) } onClick={ () => { setPage(index); } }>
                { index }
            </div>
        );
    };


    return (
        <div className={ fmtClasses(
            styles.container,
            styles.spaceBetween,
            styles.flex,
            styles.directionY,
            styles.gap15,
        ) }>
            {
                sortArrayOfObjects(proposals, "id").filter(el => el.id > ((page - 1) * 5) && el.id <= ((page) * 5)).map((el, i) => {
                    return (
                        <div key={ i } className={ fmtClasses(
                            styles.flex,
                            styles.widthMax,
                            proposal.container
                        ) }>
                            <h3 className={ fmtClasses(
                                proposal.title
                            ) }>{ el.title }</h3>
                            <ul className={ fmtClasses(
                                styles.flat,
                                styles.widthMax,
                            ) }>
                                <li className={ fmtClasses(
                                    styles.flat,
                                    styles.widthMax,
                                ) }>
                                    { el.description }
                                </li>
                                <li className={ fmtClasses(
                                    styles.flat,
                                    styles.widthMax,
                                ) }>
                                    <div className={ fmtClasses(
                                        proposal.infoContainer,
                                        styles.widthMax,
                                    ) }>
                                        <span className={ fmtClasses(
                                            proposal.owner,
                                        ) }> <strong>Owner:</strong> { el.owner }</span>
                                        <a className={ fmtClasses(
                                            proposal.readMe,
                                        ) } href={ el.link } target="_blank" rel="noreferrer">View Proposal Details</a>
                                    </div>
                                </li>
                            </ul>

                            { !el.timedOut ?
                                <div className={ fmtClasses(
                                    styles.flat,
                                    styles.gap15,
                                    styles.flex,
                                    styles.widthMax,
                                    styles.itemsCenter,
                                    proposal.interact,
                                ) }>
                                    <div className={ fmtClasses(
                                        proposal.innerInteract,
                                        styles.flex,
                                        styles.widthFitContent,
                                        styles.itemsCenter,
                                        styles.directionY,
                                    ) } title='Contribute to this project'>
                                        <ImGift onClick={ () => {
                                            setShowContrib(true);
                                        } }
                                            className={ fmtClasses(
                                                proposal.contribute,
                                            ) } />
                                        <span className={ fmtClasses(
                                            proposal.dInlineBlock
                                        ) }
                                        >{ el.contribs ?? 0 }</span>
                                    </div>

                                </div>
                                :
                                el.didPass ?
                                    <div className={ fmtClasses(
                                        styles.flat,
                                        styles.flex,
                                        styles.widthMax,
                                        styles.itemsCenter
                                    ) }>
                                        <span className={ fmtClasses(
                                            proposal.dInlineBlock
                                        ) }
                                        >Project passed!</span>
                                        <button
                                            className={ fmtClasses(
                                                styles.actionButton,
                                            ) }
                                            onClick={ () => {
                                                connectAndClaimTokens(el.contract);
                                            } }
                                        >Claim Tokens</button>
                                    </div>
                                    :
                                    <div className={ fmtClasses(
                                        styles.flat,
                                        styles.flex,
                                        styles.widthMax,
                                        styles.itemsCenter
                                    ) }>
                                        <button
                                            className={ fmtClasses(
                                                styles.actionButton,
                                            ) }
                                            onClick={ () => {
                                                connectAndClaimRefund(el.contract);
                                            } }
                                        >Reclaim Funds</button>
                                    </div>
                            }

                            <div className={ fmtClasses(
                                styles.flat,
                                styles.gap15,
                                styles.flex,
                                styles.widthMax,
                                styles.itemsCenter,
                                styles.directionY,
                                proposal.interact,
                            ) }>
                                { showContrib &&
                                    <Contribute id={ el.id } infoStr={ el.contract } hide={ () => { setShowContrib(false); } } />
                                }
                            </div>
                        </div>
                    );
                })
            }
            <div className={ fmtClasses(
                styles.flat,
                styles.flex,
                styles.widthMax,
                styles.itemsCenter,
                styles.gap10,
            ) }>
                <button onClick={ () => { setViews({ view: 'MakeProposal', wrapper: 'ProposalWrapper' }); } } className={ fmtClasses(
                    styles.width70,
                    styles.actionButton,
                    styles.dInlineBlock,
                ) }>Make Proposal</button>
            </div>
            <div className={ fmtClasses(
                styles.flat,
                styles.flex,
                styles.widthMax,
                styles.itemsCenter,
                styles.gap10,
            ) }>
                {
                    pageNumbers.map((el, i) => <PageNumbers key={ i } index={ i + 1 } />)
                }
            </div> </div>
    );
};

export default Proposals;