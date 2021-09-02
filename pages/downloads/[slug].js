import React, { useEffect, useState } from "react";
import Image from "next/image";
import DownloadDocument from "../../components/DownloadDocument";
import useSWR from "swr";
import { useRouter } from "next/router";
import axios from "axios";
import {isEmpty} from 'lodash'

const DocumentCategory = () => {

  const router = useRouter();
  const { slug } = router.query;
  const [docCategory, setDocCategory] = useState();
  const [document, setDocument] = useState();
  console.log("test", docCategory);
  console.log(document)

  useEffect(() => {
    axios.get(`https://benchmark.promotingnepal.com/api/download-document/${slug}`)
    .then(res => {
      setDocument(res.data)
    })
    }, [slug])

  useEffect(() => {
  axios.get('https://benchmark.promotingnepal.com/api/document-category')
  .then(res => {
    const singleItem = res.data.data?.filter((a) => a.slug === slug);
    setDocCategory(singleItem)
  })
  }, [slug])

  return (
    <main
      className="page"
      style={{
        backgroundImage: "url('/background/bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="py-5"
    >
       {!isEmpty(docCategory) ? 
      <section className="iconImage py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex align-items-center">
              <div className="textwrapper">
                <div className="subtitle f14 text-muted">
                  Download Free Documents, Test
                </div>
                <h3 className="title font_p text_big mb-5">
                  {docCategory?.[0]?.title}
                </h3>
                <p className="text f14 my-3">{ docCategory?.[0]?.description}</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="imagewrapper text-center">
                <Image
                  src="/images/agreements.png"
                  height={400}
                  width={350}
                  priority
                ></Image>
              </div>
            </div>
          </div>
          <div className="row py-5">
          {document?.data?.map((doc) => (
            <DownloadDocument  slug={slug} id={doc.id} title={doc.title} />
          ))}
          </div>
        </div>
      </section>
      : <div>loading</div>
      } 
</main>
  );
};

export default DocumentCategory;