import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(
    "https://benchmark.promotingnepal.com/api/setting"
  );
  // const response = await fetch(`${process.env.BASE_URL}setting`)
  const data = await response.json();
  return data;
};

const Footer = () => {
  const { data, error } = useSWR("settings", fetcher);
  if (error) return "An error occured";
  if (!data) return "";
  const settings = data[0];

  return (
    <footer
      className="py-5 page"
      style={{
        backgroundImage: `url("/background/bg.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backdropFilter: "20px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="leftwrapper">
              <div className="logowrapper">
                <Image src={settings.logo} width={120} height={90} />
                <h6 className="title"> {settings.site_title}</h6>
                <h2></h2>
              </div>

              <div className="textwrapper">
                <p className="text-muted small">
                  {settings.about_text.slice(0, 250)}...
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="rightwrapper">
              <div className="row">
                <div className="col-sm-4">
                  <div className="menuwrapper">
                    <div className="titlewrapper">
                      <h6 className="title mb-3 font_p fw800">Contact Us</h6>
                    </div>
                    <div className="menu">
                      <ul>
                        <li className="text-muted f14">{settings.address}</li>
                        <li className="text-muted f14">{settings.email}</li>
                        <li className="text-muted f14">
                          {settings.mobile_no}, {settings.phone_no}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="menuwrapper">
                    <div className="titlewrapper">
                      <h6 className="title mb-3 font_p fw800">
                        Social Account
                      </h6>
                    </div>
                    <div className="menu">
                      <ul>
                        <li className="text-muted f14">
                          <Link href={settings.facebook_url}>
                            <a target="_blank" className="link text_t">
                              Facebook
                            </a>
                          </Link>
                        </li>
                        <li className="text-muted f14">
                          <Link href={settings.instagram_url}>
                            <a target="_blank" className="link text_t">
                              Instagram
                            </a>
                          </Link>
                        </li>
                        <li className="text-muted f14">
                          <Link href={settings.twitter_url}>
                            <a target="_blank" className="link text_t">
                              Twitter
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="sponsor">
                    <div className="titlewrapper">
                      <h6 className="title font_p f18 fw500">Tech Partner</h6>
                    </div>
                    <div className="techpartner d-flex gap flex-column align-items-start">
                      <Image
                        src="/images/tcs.svg"
                        height={70}
                        width={100}
                        priority
                      />
                      <strong className="textwrapper">
                        Techcare Softwares
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-sm-6">
            <div className="leftwrapper">
              <div className="textwrapper">
                <p className="text-muted f12 mb-0">
                  &copy; Benchmark Adventures Pvt. Ltd. 2021, All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-flex justify-content-end">
            <div className="rightwrapper">
              <div className="linkswrapper d-flex">
                <div className="link">
                  <Link href="#">
                    <a className="link f12 text_t px-3">Privacy Policy</a>
                  </Link>
                </div>
                <div className="link">
                  <Link href="#">
                    <a className="link f12 text_t px-3">
                      Terms &amp; Conditions
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
