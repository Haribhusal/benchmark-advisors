import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="leftwrapper">
              <div className="logowrapper">
                <Image src="/images/logo.png" className="img-fluid" height={100} width={130} layout="" priority />
              </div>
              <div className="textwrapper">
                <p className="text-muted f14">
                  Lorem ipsum dolor sit amet, ipsum dolo dipiscing elit, sed
                  do eiusmod tempor incididunt consectetur adipiscing elit,
                  ipsum dolo dipiscing elit, sed do eiusmod tempor
                </p>
              </div>
              <div className="sponsor">
                <div className="titlewrapper my-3">
                  <h6 className="title font_p f18 fw500">
                    Tech Partner
                  </h6>
                </div>


                <div className="techpartner d-flex gap align-items-center">
                  <Image src="/images/tcs.svg" height={70} width={100} priority />
                  <strong className="textwrapper">
                    Techcare Softwares
                  </strong>
                </div>
              </div>
            </div>

          </div>
          <div className="col-sm-6">
            <div className="rightwrapper">
              <div className="textwrapper">
                <p className="text-muted f14 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus nobis tempora quaerat ipsa, alias culpa tempore temporibus optio pariatur sit quisquam placeat provident neque quis, cupiditate sequi? Saepe, suscipit!
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="menuwrapper">
                    <div className="titlewrapper">
                      <h6 className="title mb-3 font_p fw800">Contact Us</h6>
                    </div>
                    <div className="menu">
                      <ul>
                        <li className="text-muted f14">New Baneshwor, Kathmandu</li>
                        <li className="text-muted f14">info@benchmarkadventures.com</li>
                        <li className="text-muted f14">+977-98XXXXXXX</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="menuwrapper">
                    <div className="titlewrapper">
                      <h6 className="title mb-3 font_p fw800">Social Account</h6>
                    </div>
                    <div className="menu">
                      <ul>
                        <li className="text-muted f14">
                          <Link href="">
                            <a className="link text_t">
                              Facebook
                            </a>
                          </Link>
                        </li>
                        <li className="text-muted f14">
                          <Link href="">
                            <a className="link text_t">
                              Instagram
                            </a>
                          </Link>
                        </li>
                        <li className="text-muted f14">
                          <Link href="">
                            <a className="link text_t">
                              Twitter
                            </a>
                          </Link>
                        </li>
                        <li className="text-muted f14">
                          <Link href="">
                            <a className="link text_t">
                              Clubhouse
                            </a>
                          </Link>
                        </li>
                        <li className="text-muted f14">
                          <Link href="">
                            <a className="link text_t">
                              Medium
                            </a>
                          </Link>
                        </li>

                      </ul>
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
                  &copy; Benchmark Adventures Pvt. Ltd. 2021, All Rights Reserved
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-flex justify-content-end">
            <div className="rightwrapper">
              <div className="linkswrapper d-flex">
                <div className="link">
                  <Link href="#">
                    <a className="link f12 text_t px-3">
                      Privacy Policy
                    </a>
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
  )
}

export default Footer;
