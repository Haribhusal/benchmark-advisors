import React, { useEffect, useState } from "react";
import Image from "next/image";
import DownloadDocument from "../../components/DownloadDocument";
import useSWR from "swr";
import { useRouter } from "next/router";

const DocumentCategory = () => {
  const [documents, setDocument] = useState();

  const documentCategoryFetcher = async () => {
    const response = await fetch(
      `https://benchmark.promotingnepal.com/api/document-category`
    );
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR("docCategories", documentCategoryFetcher);
  if (error) return "An error occured";
  if (!data) return "";
  const docCategories = data.data;

  const router = useRouter();
  const { slug } = router.query;
  const docCategory = docCategories.find((a) => a.slug === slug);
  if (!docCategory) {
    return <div>docCategory Not Found</div>;
  }

  const documentsFetcher = async () => {
    const documents = await fetch(
      `https://benchmark.promotingnepal.com/api/download-document/${slug}`
    );
    // const response = await fetch(`${process.env.BASE_URL}setting`)
    const data = await documents.json();
    setDocument(data);

    return data;
  };

  documentsFetcher();

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
      <section className="iconImage py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex align-items-center">
              <div className="textwrapper">
                <div className="subtitle f14 text-muted">
                  Download Free Documents
                </div>
                <h3 className="title font_p text_big mb-5">
                  {docCategory.title}
                </h3>
                <p className="text f14 my-3">{docCategory.description}</p>
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
            <DownloadDocument docs={documents} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default DocumentCategory;
