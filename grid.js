class KeywordRenderer {
  constructor(props) {
    const container = document.createElement("div");
    container.classList.add("keyword-container");

    props.value.forEach((keyword) => {
      const button = document.createElement("button");
      button.textContent = keyword.name;
      button.classList.add("btn", "btn-secondary", "btn-sm", "mx-1", "my-1");
      button.addEventListener("mousedown", (ev) => {
        window.open(keyword.value, "_blank");
      });
      container.appendChild(button);
    });
    this.el = container;
    this.render(props);
  }

  getElement() {
    return this.el;
  }
  render(props) {}
}

class CustomRenderer {
  constructor(props) {
    const el = document.createElement("button");
    const propsData = props.formattedValue;

    el.textContent = "Go"; // 버튼의 텍스트 설정
    el.classList.add("btn", "btn-primary", "btn-sm");

    el.addEventListener("mousedown", (ev) => {
      window.open(props.value + "/", "_blank");
    });

    this.el = el;
    this.render(props);
  }

  getElement() {
    return this.el;
  }

  render(props) {
    this.el.value = String(props.value);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("grid");
  const data = [
    {
      title: "My First Three js",
      link: "day01",
      date: "2024-05-01",
      keyword: [
        {
          name: "Canvas",
          value:
            "https://threejs.org/docs/index.html?q=Geometries#api/en/geometries/BoxGeometry",
        },
        {
          name: "Scene",
          value:
            "https://threejs.org/docs/index.html?q=Scene#manual/en/introduction/Creating-a-scene",
        },
        {
          name: "Object",
          value:
            "https://threejs.org/docs/index.html?q=Geometries#api/en/geometries/BoxGeometry",
        },
      ],
    },
    {
      title: "Transform objects",
      link: "day02",
      date: "2024-05-06",
      keyword: [
        {
          name: "Postion",
          value: "https://threejs.org/docs/#api/en/core/Object3D.position",
        },
        {
          name: "Scale",
          value: "https://threejs.org/docs/#api/en/core/Object3D.position",
        },
        {
          name: "Rotation",
          value: "https://threejs.org/docs/#api/en/core/Object3D.position",
        },
        {
          name: "Quaternion",
          value: "https://threejs.org/docs/#api/en/core/Object3D.position",
        },
        {
          name: "Vector3",
          value: "https://threejs.org/docs/#api/en/core/Object3D.position",
        },
        {
          name: "AxesHelper",
          value:
            "https://threejs.org/docs/?q=AxesHelper#api/en/helpers/AxesHelper",
        },
      ],
    },

    // Add more data as needed
  ];

  const columns = [
    { header: "Title", name: "title" },
    {
      header: "Keyword",
      name: "keyword",
      renderer: {
        type: KeywordRenderer,
      },
    },
    { header: "Date", name: "date", align: "center", width: "100" },
    {
      header: "Link",
      name: "link",
      width: "100",
      align: "center",
      renderer: {
        type: CustomRenderer,
      },
    },
  ];
  const grid = new tui.Grid({
    el: container,
    data: data,
    columns: columns,
    scrollX: true,
    scrollY: true,
    rowHeight: "auto",
    autoHeight: true, // 자동 높이 설정
    bodyHeight: "fitToParent", // 부모 요소의 높이에 맞게 그리드의 높이 조정
    theme: "striped", // 테마 설정
  });
});
