import { useEffect } from "react";

export function setDocumentTitle(title: string){
    useEffect(() => {
        document.title = title;
    }, [title]);
}

export function generateSales(){
    let min = Math.ceil(1000);
    let max = Math.floor(20000)

    return formatNumber(Number((Math.floor(Math.random() * (max - min + 1)) + min).toFixed(2)));
}

export function formatNumber(num: number){
    return num.toLocaleString();
}