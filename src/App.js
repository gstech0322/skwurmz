import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { AiOutlineTwitter } from "react-icons/ai";
import { GiSailboat, RiDiscordLine, FaEthereum, } from "react-icons/all";
// import AmountSlider from "./components/AmountSlider";
import MetamaskConnect from "./components/metamask/index";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="nav_bar">
        <div className="navbar_title">
          <h3>Skwurmz</h3>
        </div>
        <div>
          <div>
            <span>
              <AiOutlineTwitter className={"icon"} />
            </span>
            <span>
              <RiDiscordLine className={"icon"} />
            </span>
            <span>
              <GiSailboat className={"icon"} />
            </span>
            <span>
              <FaEthereum className={"icon"} />
            </span>
          </div>
        </div>
      </div>
      <Container fluid className="top_banner">
        <Row className={"p-4"}>
          <Col md={6} xl={8}>
            <Row>
              <h2 className="banner_title">Skwurmz.</h2>
            </Row>
            <Row className="banner_text_area">
              <Col md={12}>
                <p className={"font-sm"}>
                  Skwurmz are a collection of 10,000 randomly generated worms on
                  the Ethereum blockchain. Each worm will be unique in its own
                  way, with many being noticeabley rarer than others. Be on the
                  look-out for 8 super special worms.
                </p>
                <p className={"font-sm"}>
                  Being a part of the Skwurmz community will have its benefits.
                  We will strive to build one of the best communities in the
                  space, while constantly giving back. We understand that great
                  communities are the backbone of many projects.
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6} xl={4}>
            <div
              className={"custom-border h-73 position-relative mt-3 "}
              id={"main_gif_container"}
            >
              <img
                src={"./images/w2.png"}
                alt={"gif"}
                className={"w-50 w-md-75 img-styles"}
                id={"main_gif"}
              />
            </div>
            <Row className="mt-3">
              <Col md={12} className={"text-center w-75 rammetto-font"}>
                <MetamaskConnect />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="banner1 p-3">
        <Row className={"mt-2"}>
          <Col md={4}>
            <Row className={"h-50"}>
              <Col md={12}>
                <div
                  className={
                    "custom-border custom-border-sm  position-relative"
                  }
                >
                  <a
                    href={
                      "https://gateway.pinata.cloud/ipfs/QmQAz7Ybsc58vhsS83tg9okvGhN4uMdF2VArW4HjZkcLzK"
                    }
                  >
                    <img
                      src={"./images/w339.png"}
                      alt={"gif"}
                      className={"position-absolute nft-img"}
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <Row className={"h-100"}>
              <Col md={12}>
                <div
                  className={
                    "custom-border custom-border-sm  position-relative"
                  }
                >
                  <a href={"https://gateway.pinata.cloud/ipfs/QmXfpEoi3gmKB4bhyAAKTgNcWVojGT12JXwdnr2qJBmLZf"}>
                    <img
                      src={"./images/w340.png"}
                      alt={"gif"}
                      className={"position-absolute nft-img"}
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={8} className="layer-trans">
            <Row>
              <Col md={12}>
                <h1 className={"twitter-color rammetto-font font-lg"}>
                  Rarity
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2 className={"fw-bold float-start"}>10,000</h2>{" "}
                    <h3 className={" float-end"}>TOTAL SKWURMZ</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className={"fw-bold float-start"}>15</h2>{" "}
                    <h3 className={" float-end"}>BACKGROUNDS</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className={"fw-bold float-start"}>14</h2>{" "}
                    <h3 className={" float-end"}>SKINS</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className={"fw-bold float-start"}>17</h2>{" "}
                    <h3 className={" float-end"}>CLOTHES</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className={"fw-bold float-start"}>24</h2>{" "}
                    <h3 className={" float-end"}>HATS</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className={"fw-bold float-start"}>20</h2>{" "}
                    <h3 className={" float-end"}>MOUTHS</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className={"fw-bold float-start"}>22</h2>{" "}
                    <h3 className={" float-end"}>EYES</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className={"fw-bold float-start"}>5</h2>{" "}
                    <h3 className={" float-end"}>RARE WINGS</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className={"fw-bold float-start"}>6</h2>{" "}
                    <h3 className={" float-end"}>RARE TAILS</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className={"fw-bold float-start"}>8</h2>{" "}
                    <h3 className={" float-end"}>SUPER SKWURMZ</h3>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ backgroundColor: "#ba55d3" }}>
        <section id="timeline">
          <h1>Roadmap</h1>
          {/* <p className="leader">
            All cards must be the same height and width for space calculations
            on large screens.
          </p> */}
          <div className="demo-card-wrapper">
            <div className="demo-card demo-card--step1">
              <div className="head">
                <div className="number-box">
                  <span>
                    <img
                      src={"https://gateway.pinata.cloud/ipfs/QmbUtkVAtuKnDTCx2GDPqbdGYsCc11X9sB7PVweG4jVxss"}
                      className={"check"}
                      alt={"check"}
                    />
                    25%
                  </span>
                </div>
                <h2>
                  <span className="small">Step One</span> Rewarding our earliest minters
                </h2>
              </div>
              <div className="body">
                <p>
                  We really appreciate our earliest minters. .5E airdropped to
                  10 random holders 1-2500. Collection added to Rarity.Tools
                </p>
                {/* <img src="./images/w2.png" alt="Graphic" /> */}
              </div>
            </div>

            <div className="demo-card demo-card--step2">
              <div className="head">
                <div className="number-box">
                  <span>
                    <img
                      src={"https://gateway.pinata.cloud/ipfs/QmbUtkVAtuKnDTCx2GDPqbdGYsCc11X9sB7PVweG4jVxss"}
                      className={"check"}
                      alt={"check"}
                    />
                    50%
                  </span>
                </div>
                <h2>
                  <span className="small">Sell Out</span> Planned Airdrops
                </h2>
              </div>
              <div className="body">
                <p>10 unrevealed worms airdropped to random minters 1-5000. Monthly airdrops and other benefits planned for holders.</p>
                {/* <img src="./images/w3.png" alt="Graphic" /> */}
              </div>
            </div>

            <div className="demo-card demo-card--step3">
              <div className="head">
                <div className="number-box">
                  <span>
                    <img
                      src={"https://gateway.pinata.cloud/ipfs/QmbUtkVAtuKnDTCx2GDPqbdGYsCc11X9sB7PVweG4jVxss"}
                      className={"check"}
                      alt={"check"}
                    />
                    75%
                  </span>
                </div>
                <h2>
                  <span className="small">Sell Out</span> Skwurmz Merch
                </h2>
              </div>
              <div className="body">
                <p>
                  Community is most important to us. We will have a
                  dedicated discord channel where community members can submit their
                  ideas, and once a month we will pick an idea and invest in it,
                  with the member being rewarded. Skwurmz Merch to be designed.
                </p>
                {/* <img src="./images/w2.png" alt="Graphic" /> */}
              </div>
            </div>

            <div className="demo-card demo-card--step4">
              <div className="head">
                <div className="number-box">
                  <span>
                    <img
                      src={"https://gateway.pinata.cloud/ipfs/QmbUtkVAtuKnDTCx2GDPqbdGYsCc11X9sB7PVweG4jVxss"}
                      className={"check"}
                      alt={"check"}
                    />
                    100%
                  </span>
                </div>
                <h2>
                  <span className="small">Sell Out</span> Game Development
                </h2>
              </div>
              <div className="body">
                <p>
                  Another .5E airdropped to 10 random holders 1-10000. As avid
                  gamers, we will continue production on a number of ideas we
                  have for some really cool games related to Skwurmz.
                </p>
                {/* <img src="http://placehold.it/1000x500" alt="Graphic" /> */}
              </div>
            </div>

            <div className="demo-card demo-card--step5 hideFifth"></div>
          </div>
        </section>
      </Container>
      <Container fluid>
        <Container className={"mt-2"}>
          <Row>
            <Col md={12} className={"text-center py-md-5 py-md-6"}>
              <h1 className={"rammetto-font"}>TEAM</h1>
            </Col>
          </Row>
          <Row className={"min-height-md"}>
            <Col md={3}>
              <div
                className={
                  "custom-border custom-border-sm position-relative bg-size-69"
                }
              >
                <a
                  href={
                    "https://gateway.pinata.cloud/ipfs/QmPdpLPCpkK8JpCwyUynnqJZXGThmrRXQWWK68m33CoznD"
                  }
                  className={"d-flex justify-content-center"}
                >
                  <img
                    src={"./images/w3.png"}
                    alt={"gif"}
                    className={"w-63  img-styles-sm"}
                  />
                </a>
              </div>
              <div className={"icon-md d-flex justify-content-center"}>
                <AiOutlineTwitter className={"twitter-color"} />{" "}
                <h3 className={"rammetto-font d-inline"}>MIKE</h3>
              </div>
            </Col>
            <Col md={3}>
              <div
                className={
                  "custom-border custom-border-sm position-relative bg-size-69"
                }
              >
                <a
                  href={
                    "https://gateway.pinata.cloud/ipfs/QmWLCTQBCn23iCnM2fi6WAAwt324aVhTFZY3J8C9QLyDAK"
                  }
                  className={"d-flex justify-content-center"}
                >
                  <img
                    src={"./images/w11.png"}
                    alt={"gif"}
                    className={"w-63 img-styles-sm"}
                  />
                </a>
              </div>
              <div>
                <div className={"icon-md d-flex justify-content-center"}>
                  <AiOutlineTwitter className={"twitter-color"} />{" "}
                  <h3 className={"rammetto-font d-inline"}>CHRIS</h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div
                className={
                  "custom-border custom-border-sm position-relative bg-size-69"
                }
              >
                <a
                  href={
                    "https://gateway.pinata.cloud/ipfs/Qmc98dsJdeGTVo3GYa271pzgECfMj7pQWfiJU6zhdegstf"
                  }
                  className={"d-flex justify-content-center"}
                >
                  <img
                    src={"./images/w22.png"}
                    alt={"gif"}
                    className={"w-63  img-styles-sm"}
                  />
                </a>
              </div>
              <div>
                <div className={"icon-md d-flex justify-content-center"}>
                  <AiOutlineTwitter className={"twitter-color"} />{" "}
                  <h3 className={"rammetto-font d-inline"}>BELL</h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div
                className={
                  "custom-border custom-border-sm position-relative bg-size-69"
                }
              >
                <a
                  href={
                    "https://gateway.pinata.cloud/ipfs/QmSQ81CVDktkDZZcZ2aS8VhXo5LL5RjwxmWMEABnzkNE9n"
                  }
                  className={"d-flex justify-content-center"}
                >
                  <img
                    src={"./images/w1.png"}
                    alt={"gif"}
                    className={"w-63  img-styles-sm"}
                  />
                </a>
              </div>
              <div>
                <div className={"icon-md d-flex justify-content-center"}>
                  <AiOutlineTwitter className={"twitter-color"} />{" "}
                  <h3 className={"rammetto-font d-inline"}>ADRIAN</h3>
                </div>
              </div>
            </Col>
            {/* <Col md={3}>
              <div
                className={
                  "custom-border custom-border-sm h-75 position-relative bg-size-69"
                }
              >
                <a href={"https://api.pudgypenguins.io/penguin/image/6"}>
                  <img
                    src={"https://www.pudgypenguins.io/images/site/cole.png"}
                    alt={"gif"}
                    className={"w-63 position-absolute img-styles-sm"}
                  />
                </a>
              </div>
              <div>
                <div className={"icon-md"}>
                  <AiOutlineTwitter className={"twitter-color"} />{" "}
                  <h3 className={"rammetto-font d-inline"}>COLE</h3>
                </div>
              </div>
            </Col> */}
          </Row>
          {/* <Row className={"min-height-md"}>
            <Col md={3}>
              <div
                className={
                  "custom-border custom-border-sm h-75 position-relative bg-size-69"
                }
              >
                <a href={"https://api.pudgypenguins.io/penguin/image/6"}>
                  <img
                    src={"https://www.pudgypenguins.io/images/site/wyb0.png"}
                    alt={"gif"}
                    className={"w-63 position-absolute img-styles-sm"}
                  />
                </a>
              </div>
              <div>
                <div className={"icon-md"}>
                  <AiOutlineTwitter className={"twitter-color"} />{" "}
                  <h3 className={"rammetto-font d-inline"}>WYBO</h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div
                className={
                  "custom-border custom-border-sm h-75 position-relative bg-size-69"
                }
              >
                <a href={"https://api.pudgypenguins.io/penguin/image/6"}>
                  <img
                    src={"https://www.pudgypenguins.io/images/site/hiro.png"}
                    alt={"gif"}
                    className={"w-63 position-absolute img-styles-sm"}
                  />
                </a>
              </div>
              <div>
                <div className={"icon-md"}>
                  <AiOutlineTwitter className={"twitter-color"} />{" "}
                  <h3 className={"rammetto-font d-inline"}>HIRO</h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div
                className={
                  "custom-border custom-border-sm h-75 position-relative bg-size-69"
                }
              >
                <a href={"https://api.pudgypenguins.io/penguin/image/6"}>
                  <img
                    src={"https://www.pudgypenguins.io/images/site/starker.png"}
                    alt={"gif"}
                    className={"w-63 position-absolute img-styles-sm"}
                  />
                </a>
              </div>
              <div>
                <div className={"icon-md"}>
                  <AiOutlineTwitter className={"twitter-color"} />{" "}
                  <h3 className={"rammetto-font d-inline"}>STARKER</h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div
                className={
                  "custom-border custom-border-sm h-75 position-relative bg-size-69"
                }
              >
                <a href={"https://api.pudgypenguins.io/penguin/image/6"}>
                  <img
                    src={"https://www.pudgypenguins.io/images/site/ecko.png"}
                    alt={"gif"}
                    className={"w-63 position-absolute img-styles-sm"}
                  />
                </a>
              </div>
              <div>
                <div className={"icon-md"}>
                  <AiOutlineTwitter className={"twitter-color"} />{" "}
                  <h3 className={"rammetto-font d-inline"}>ECKO</h3>
                </div>
              </div>
            </Col>
          </Row> */}
          <Row>
            <Col md={12} className={"text-center my-5"}>
              <div className="social-buttons">
                <span>
                  <AiOutlineTwitter className={"icon"} />
                </span>
                <span>
                  <RiDiscordLine className={"icon"} />
                </span>
                <span>
                  <GiSailboat className={"icon"} />
                </span>
                <span>
                  <FaEthereum className={"icon"} />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Web3ReactProvider>
  );
}

export default App;
