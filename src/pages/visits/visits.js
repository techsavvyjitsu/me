// Packages
import React, { Component } from 'react';
import { Card, CardMedia, CardContent } from '../../components/new-card';

class Visits extends Component {
  render() {
    return (
      <section className="visits-component">
        <div className="columns">
          <div className="column">
            <Card>
              <CardMedia
                type="map"
                url="!1m18!1m12!1m3!1d63320.43003471171!2d80.59076170909505!3d7.294543952137189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy%2C+Sri+Lanka!5e0!3m2!1sen!2sin!4v1524759483250" />
              <CardContent
                title="Kandy"
                subTitle="Sri Lanka" />
            </Card>
          </div>
          <div className="column">
            <Card>
              <CardMedia
                type="map"
                url="!1m18!1m12!1m3!1d31736.179125950344!2d80.10152198431884!3d6.12768906603783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177fbcae7226d%3A0x373eeb50aad15308!2sHikkaduwa%2C+Sri+Lanka!5e0!3m2!1sen!2sin!4v1524760882452" />
              <CardContent
                title="Hikkaduwa"
                subTitle="Sri Lanka" />
            </Card>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Card>
              <CardMedia
                type="map"
                url="!1m18!1m12!1m3!1d126743.63162574582!2d79.78616436698336!3d6.921833528247232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C+Sri+Lanka!5e0!3m2!1sen!2sin!4v1524763589149" />
              <CardContent
                title="Colombo"
                subTitle="Sri Lanka" />
            </Card>
          </div>
          <div className="column">
            <Card>
              <CardMedia
                type="map"
                url="!1m18!1m12!1m3!1d63367.842096811415!2d80.745927258473!3d6.951364914267508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380434e1554c7%3A0x291608404c937d9c!2sNuwara+Eliya%2C+Sri+Lanka!5e0!3m2!1sen!2sin!4v1524763617835" />
              <CardContent
                title="Nuwara Eliya"
                subTitle="Sri Lanka" />
            </Card>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Card>
              <CardMedia
                type="map"
                url="!1m18!1m12!1m3!1d63480.84752261914!2d80.17697730699017!3d6.055890427233578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle%2C+Sri+Lanka!5e0!3m2!1sen!2sin!4v1524763531159" />
              <CardContent
                title="Galle"
                subTitle="Sri Lanka" />
            </Card>
          </div>
          <div className="column"></div>
        </div>
      </section>
    );
  }
}

export default Visits;
