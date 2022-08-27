import React, { useState } from "react";
import { fmtClasses, useReach } from "../../hooks";
import styles from '../../styles/Shared.module.css';

const MakeProposal = () => {
    const [inputs, setInputs] = useState({});
    const { makeProposal, proposals, user, setViews } = useReach();

    const handleOnChange = (e) => {
        const name = e.currentTarget.name;
        let value = e.currentTarget.value;
        if (name === 'title') {
            if (value.length > 25) {
                value = String(value).slice(0, 25);
                e.currentTarget.value = value;
            }
        }

        if (name === 'link') {
            if (value.length > 150) {
                value = String(value).slice(0, 150);
                e.currentTarget.value = value;
            }
        }

        if (name === 'description') {
            if (value.length > 180) {
                value = String(value).slice(0, 180);
                e.currentTarget.value = value;
            }
        }

        setInputs(inputs => ({ ...inputs, [name]: value }));
    };

    const makeAndUpdateProposals = async () => {
        // The proposal
        const proposal = {
            id: proposals.length > 0 ? proposals.length === 1 ? proposals[0].id : Number(proposals.reduce((a, b) => a.id > b.id ? a.id : b.id)) + 1 : 1,
            title: inputs['title'],
            link: inputs['link'],
            description: inputs['description'],
            owner: user.account.networkAccount.addr,
            hardCap: inputs['hardCap'],
            softCap: inputs['softCap'],
            maxContribution: inputs['maxContribution'],
            minContribution: inputs['minContribution'],
            // tokenName: inputs['tokenName'],
            // tokenSymbol: inputs['tokenSymbol'],
            // privateSaleAmt: inputs['privateSaleAmt'],
        };

        await makeProposal(proposal);
        setViews({ view: "Proposals", wrapper: "ProposalWrapper" });
    };

    return (
        <div className={ fmtClasses(styles.container, styles.itemsCenter) }>
            <h2 className={ fmtClasses(styles.infoText, styles.widthMax) }>Enter Project Information</h2>
            <label htmlFor="title" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Enter the project title (Max 25)
                </span>
                <input
                    spellCheck='true'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Title..."
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="link" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Enter the project link (Max 150)
                </span>
                <input
                    spellCheck='false'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="link"
                    type="url"
                    name="link"
                    placeholder="Link longer than 150 characters? Use a URL shortener first."
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="description" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Write a short description (Max 180)
                </span>
                <textarea
                    spellCheck='true'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="description"
                    name="description"
                    placeholder="If possible, describe your project in one sentence"
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="hardCap" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Enter the project hardCap
                </span>
                <input
                    spellCheck='false'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="hardCap"
                    type="number"
                    name="hardCap"
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="softCap" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Enter the project softCap
                </span>
                <input
                    spellCheck='false'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="softCap"
                    type="number"
                    name="softCap"
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="maxContribution" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Enter the maximum contribution for the project
                </span>
                <input
                    spellCheck='false'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="maxContribution"
                    type="number"
                    name="maxContribution"
                    onChange={ handleOnChange }
                />
            </label>
            <label htmlFor="minContribution" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Enter the minimum contribution for the project
                </span>
                <input
                    spellCheck='false'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="minContribution"
                    type="number"
                    name="minContribution"
                    onChange={ handleOnChange }
                />
            </label>
            {/* <h2 className={ fmtClasses(styles.infoText, styles.widthMax) }>Enter Token Information</h2>
            <label htmlFor="tokenName" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Enter the name of the Token you want to launch
                </span>
                <input
                    spellCheck='false'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="tokenName"
                    type="text"
                    name="tokenName"
                    onChange={ handleOnChange }
                />
            </label> 
            <label htmlFor="tokenSymbol" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Enter the symbol for the Token
                </span>
                <input
                    spellCheck='false'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="tokenSymbol"
                    type="text"
                    name="tokenSymbol"
                    onChange={ handleOnChange }
                />
            </label>  */}
            {/* <label htmlFor="privateSaleAmt" className={ fmtClasses(
                styles.widthMax,
                styles.flat,
                styles.container,
                styles.flex,
                styles.itemsCenter,
            ) }>
                <span className={ fmtClasses(
                    styles.widthMax,
                    styles.dInlineBlock,
                ) }>
                    Enter the number of tokens you want to make availabe for the private sale
                </span>
                <input
                    spellCheck='false'
                    className={ fmtClasses(
                        styles.field,
                        styles.widthMax,
                    ) }
                    id="privateSaleAmt"
                    type="number"
                    name="privateSaleAmt"
                    onChange={ handleOnChange }
                />
            </label> */}
            <button onClick={ makeAndUpdateProposals } className={ fmtClasses(
                styles.width70,
                styles.actionButton,
                styles.dInlineBlock,
            ) }
                disabled={
                    !inputs?.['title'] ||
                    !inputs?.['link'] ||
                    !inputs?.['description'] ||
                    !inputs?.['hardCap'] ||
                    !inputs?.['softCap'] ||
                    !inputs?.['maxContribution'] ||
                    !inputs?.['minContribution']
                }
            >Create a Project</button>
        </div>
    );
};

export default MakeProposal;