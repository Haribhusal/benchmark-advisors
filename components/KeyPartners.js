import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import axios from "axios";


const KeyPartners = () => {
  const[partners,setPartners] = useState([])
  console.log("partners",partners)
  useEffect(() =>  {
     axios.get('https://benchmark.promotingnepal.com/api/partner')
    .then(res=>   {
      const allPartners = res.data;
      setPartners(allPartners);
    })
  }, [])

    return (
    <section className="keypartners py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="titlewrapper mb-5 text-center">
              <h3 className="title font_p">Key Partners</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {partners.map((partner) => (
            <div className="col-sm-3" >
              <Link href={partner.url}>
                <a className="">
                  <div className="partnerwrapper mb-4  rounded_medium p-3 text-center bg_white">
                    <div className="image">
                      <Image
                        src={partner.imagepath}
                        height={100}
                        width={100}
                        objectFit="contain"
                        priority
                      />  
                    </div>
                    <div className="title">
                      <strong className="f14 text_t">
                         {partner.title} 
                        </strong>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="buttonwrapper text-center my-5">
              <button className="btn btn_p_dim rounded_big text_p f14 py-2 px-3">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default KeyPartners;
