import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import SubServices from "../../components/SubServices";
import axios from "axios";

export default function SingleSubService() {
  const [subService, setSubService] = useState([]);

  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);
  const fetcher = async () => {
    (
      await axios.get(
        `https://benchmark.promotingnepal.com/api/team/featurelist/${slug}`
      )
    )
      .then((res) => {
        console.log("result", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  fetcher();
  return (
    <>
      <Meta />
      <main
        className="page"
        style={{
          backgroundImage: "url('/background/bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        hey
      </main>
    </>
  );
}
