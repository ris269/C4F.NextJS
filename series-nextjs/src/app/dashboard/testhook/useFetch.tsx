'use client'

import React, { useState, useEffect } from 'react';

export const useFetch = (options: any) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("useFetch useEffect running...")
        fetch(options.url).then((res) => res.json()).then((json) => {
            setData(json);
        });
    });

    return { data };
}

// useEffect(() => {
//     const fetchData = async () => {
//         const res aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa= await fetch(options.url);
//         const json = await res.json();
//         setData(json);
//     };
//     fetchData();
// }, [options.url]);