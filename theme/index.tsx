import './index.css';

import Theme from 'rspress/theme';

const myStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const Layout = () => (
  <Theme.Layout
    afterFeatures={<div align="center" style={myStyle}>本站总访问量:<img src="https://w.saobby.com/w/dbbsuky7" alt="访问统计"/></div>}
  />
);


export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';