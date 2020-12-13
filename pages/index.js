import { RightOutlined } from "@ant-design/icons";
import Labtop from "../componnent/labtop";
import Mobile from "../componnent/mobile";
import Cards from "../componnent/cards";
const Home = () => {
  return (
    <html lang="en">
        <head>
        <meta name="Description" content="sky-blog"/>
      <title>20-week training schedule for your first marathon</title>
    
    </head>
      <Labtop />
      <Mobile />
      <section className="home-cover">
        <img src="/img/cover.png" alt="cover" />
        <div className="overlay">
          <div className="container">
            <section className="head">
              <small
                style={{
                  color: "gray",
                  fontWeight: 700,
                  fontSize: 13,
                }}
              >
                Welcome
              </small>
              <p className="des">
                Empowering your everyday transactions making payment processing
                easy
              </p>
              <button className="start-btn">
                Get Started <RightOutlined />
              </button>
            </section>
          </div>
        </div>
      </section>
      <Cards />
      </html>
  );
};
export default Home;
