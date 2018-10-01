// Packages
import React, { Component } from 'react';
import { Link } from 'react-router';

class Visits extends Component {
  render() {
    return (
      <section className="visits-component">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/hobby/photography">Hobbies</Link></li>
            <li className="breadcrumb-item active" aria-current="page">My Visited Places</li>
          </ol>
        </nav>

        <p>
          I love to travel across world for photography, learn about different people and their culture, languages etc. Here are some of the places which I visited till date.
        </p>

        <div className="row">

          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <iframe title="Kandy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.43003471171!2d80.59076170909505!3d7.294543952137189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy%2C+Sri+Lanka!5e0!3m2!1sen!2sin!4v1524759483250?enablejsapi=1" frameBorder="0" style={{border: 0}} />
              <div className="card-body bg-light">
                <p className="card-text lead">Sri Lanka - Kandy</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <iframe title="Nuwara Eliya" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63367.842096811415!2d80.745927258473!3d6.951364914267508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380434e1554c7%3A0x291608404c937d9c!2sNuwara+Eliya%2C+Sri+Lanka!5e0!3m2!1sen!2sin!4v1524763617835?enablejsapi=1" frameBorder="0" style={{border: 0}} />
              <div className="card-body bg-light">
                <p className="card-text lead">Sri Lanka - Nuwara Eliya</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <iframe title="Colombo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.815297074514!2d79.82118589335941!3d6.921837369631892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C+Sri+Lanka!5e0!3m2!1sen!2sin!4v1536258043483?enablejsapi=1" frameBorder="0" style={{border: 0}} />
              <div className="card-body bg-light">
                <p className="card-text lead">Sri Lanka - Colombo</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <iframe title="Hikkaduwa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.179125950344!2d80.10152198431884!3d6.12768906603783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177fbcae7226d%3A0x373eeb50aad15308!2sHikkaduwa%2C+Sri+Lanka!5e0!3m2!1sen!2sin!4v1524760882452?enablejsapi=1" frameBorder="0" style={{border: 0}} />
              <div className="card-body bg-light">
                <p className="card-text lead">Sri Lanka - Hikkaduwa</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <iframe title="Galle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63480.84752261914!2d80.17697730699017!3d6.055890427233578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle%2C+Sri+Lanka!5e0!3m2!1sen!2sin!4v1524763531159?enablejsapi=1" frameBorder="0" style={{border: 0}} />
              <div className="card-body bg-light">
                <p className="card-text lead">Sri Lanka - Galle</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Visits;
