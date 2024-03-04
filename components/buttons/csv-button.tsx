'use client';
import { useEffect, useState } from "react";
export default function CSVButton({data}:{data}){
    const [buttonText, setButtonText] = useState('')
    const changeButtonText = () => {
        setButtonText('')
    }
    useEffect(() => {
        
        const header = Object.keys(data[0]);
        const refinedData = []
        refinedData.push(header)
        data.forEach(item => {
            refinedData.push(Object.values(item))  
          })
        let csvContent = ''
        refinedData.forEach(row => {
            csvContent += row.join(',') + '\n'
        })
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'CCFIL_Referrals.csv')
        link.textContent = buttonText
        document.querySelector('#csv-button').append(link)
        setButtonText('')
        setButtonText('Download CSV')
    },[buttonText])

    return (
            <button id={`csv-button`} className={`csv-button relative flex text-center justify-center items-center border-2 border-blue2 bg-white bg-opacity-75 rounded-full px-4 hover:scale-[1.02] hover:bg-blue2 hover:text-white active:scale-95 text-nowrap`} onChange={changeButtonText}/>
    )
}
