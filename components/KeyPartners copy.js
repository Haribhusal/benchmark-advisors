import Image from 'next/image'
import Link from 'next/link'


const KeyPartners = ({ ninjas }) => {
    console.log(ninjas)


    return (

       

    )
}


export const getStaticProps = async () => {
    const res = await fetch('https://benchmark.promotingnepal.com/api/partner');
    const data = await res.json();

    return {
        props: {
            ninjas: data
        }
    }
}

export default KeyPartners