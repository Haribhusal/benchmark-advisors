import React, { useEffect, useState } from 'react'
import axios from "axios";


const KeyPartners = () => {

    const [partner, setPartner] = useState([]);

    useEffect(() => {
        // scholarship
        axios
            .get(`https://benchmark.promotingnepal.com/api/partner`)
            .then((res) => {
                setPartner(res.data);
            });

        console.log(partner)


    }, []);


    return (
        <div>


        </div>
    )
}

export default KeyPartners
