import './index.css';

import Theme from 'rspress/theme';

const myStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "grey",
}

const Layout = () => (
  <Theme.Layout
    afterFeatures={
      <div
          align="center"
          style={myStyle}
      >
        <img src="https://count.getloli.com/@mikigo?name=mikigo&theme=3d-num&padding=7&offset=0&align=center&scale=1&pixelated=1&darkmode=auto" alt="访问统计"/>
      </div>
    }
  />
);


export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';