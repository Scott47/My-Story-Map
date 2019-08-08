


export default window.dojoConfig = {
    async: true,
    packages: [
      {
        name: "react",
        location: "https://unpkg.com/react@16/umd/",
        main: "react.production.min"
      },
      {
        name: "react-dom",
        location: "https://unpkg.com/react-dom@16/umd/",
        main: "react-dom.production.min"
      }
    ]
  };
