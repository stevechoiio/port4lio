import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linkedin :{resumeData.linkedinId}</h4>
              <h4>GitHub : stevechoiio</h4>
              <h4>email : stevechoi93@gmail.com</h4>
              <h4>phone : 778 388 2114</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
