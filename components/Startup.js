import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { getProfile } from "../actions/auth";

const Startup = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  console.log(user);
  useEffect(() => {
    // dispatch(getProfile())
  }, [dispatch]);
  return (
    <div className="investwrapper videowrapper rounded_medium">
      <div className="thumbnail">
        <div className="overlay"></div>
        <img
          src="https://picsum.photos/1000/500"
          className="img-fluid rounded_medium"
          alt=""
        />
      </div>
      <div className="profile">
        <img
          src="https://picsum.photos/500/500"
          className="img-fluid rounded_medium"
          alt=""
        />
      </div>
      <div className="textwrapper bg_white p-4 rounded_medium">
        <Link href="#">
          <a>
            <h3 className="title text_t f20 font_p">Techcare Softwares</h3>
          </a>
        </Link>
        <p className="text-muted f14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi
          numquam nobis perspiciatis reiciendis, autem repellendus magnam? Iste,
          quas.
        </p>
        <div className="facts">
          <div className=" d-flex gap my-3">
            <div className="fact shadow p-3 rounded_medium">
              <div className="titlewrapper">
                <h3 className="title fw900">50 +</h3>
              </div>
              <div className="detailwrapper">
                <p className="text-muted f14 mb-0">Investors</p>
              </div>
            </div>
            <div className="fact shadow p-3 rounded_medium">
              <div className="titlewrapper">
                <h3 className="title fw900">$200k</h3>
              </div>
              <div className="detailwrapper">
                <p className="text-muted f14 mb-0">Raised</p>
              </div>
            </div>
            <div className="fact shadow p-3 rounded_medium">
              <div className="titlewrapper">
                <h3 className="title fw900">$1M</h3>
              </div>
              <div className="detailwrapper">
                <p className="text-muted f14 mb-0">Valuation Cap</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-muted f14">New Baneshwor 10, Kathmandu, Nepal</p>
        <div className="tagswrapper flex-wrap d-flex gap">
          <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
            Design and Development
          </div>
          <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
            Development
          </div>
          <div className="tag f12 text-uppercase bg_gray py-2 px-3 rounded_big">
            Communication{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startup;
