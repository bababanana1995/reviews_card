import React from 'react';
import {PagesType} from "../dataState/dataState";
import {useParams} from "react-router-dom";
import {CANCELLED} from "dns";
import {Error404} from "./Error404";
import {Content} from '../content/Content';

type PagePropsType = {
    pages: PagesType[]
    AddRating:(id:number,currentRating:number)=>void
}
export const Page = (props: PagePropsType) => {
    const params = useParams()
    const PageMap =
        <Content
            id={Number(params.id)}
            photo={props.pages[Number(params.id)].photo}
            heading={props.pages[Number(params.id)].heading}
            about={props.pages[Number(params.id)].about}
            price={props.pages[Number(params.id)].price}
            rating={props.pages[Number(params.id)].rating}
            AddRating={props.AddRating}
        />

    return (
        PageMap
    );
};
