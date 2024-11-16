import { Button, Divider, Input, Layout } from "antd";
import { FC } from "react";
import "./style.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

const { Footer } = Layout;

const NAVIGATIONS = [
  "Home",
  "Whitepaper",
  "FAQs",
  "About us",
  "Marketplace",
  "News",
  "Our teams",
  "Roadmap",
  "Community",
];

const CONTACT_ITEMS = [
  {
    icon: "phone" as IconName,
    value: "01234568910",
  },
  {
    icon: "message" as IconName,
    value: "tymex-talent@tyme.com",
  },
];

const LINKS = ["Security", "Legal", "Privacy"];

const FooterPage: FC = () => {
  return (
    <Footer className="footer-page-wrapper">
      <div className="footer-detail">
        <div className="navigations">
          <div className="footer-title">Navigation</div>
          <div className="footer-item">
            {NAVIGATIONS.map((nav) => (
              <div className="navigation" key={nav}>
                {nav}
              </div>
            ))}
          </div>
        </div>
        <div className="contact-us">
          <div className="footer-title">Contact us</div>
          <div className="footer-item">
            {CONTACT_ITEMS.map((contact) => (
              <div className="contact" key={contact.icon}>
                <FontAwesomeIcon icon={["fas", contact.icon]} />
                {contact.value}
              </div>
            ))}
          </div>
        </div>
        <div className="subcribe">
          <div className="footer-title">
            Subcribe to receive our latest update
          </div>
          <div className="footer-item">
            <Input placeholder="Your email address" className="email-input" />
            <Button type="primary">Subcribe</Button>
          </div>
        </div>
      </div>
      <Divider />
      <div className="footer-bottom">
        <div className="description">
          ©2023 Tyme - Edit. All Rights reserved.
        </div>
        <div className="links">
          {LINKS.map((link) => (
            <div className="link" key={link}>
              {link}
            </div>
          ))}
        </div>
      </div>
    </Footer>
  );
};

export default FooterPage;
