class CustomRenderer {
  constructor(props) {
    const el = document.createElement("button"); // <button> 요소 생성
    const propsData = props.formattedValue;

    el.textContent = "Go"; // 버튼의 텍스트 설정
    el.classList.add("btn", "btn-primary", "btn-sm"); // 버튼에 Bootstrap 클래스 추가

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
      description:
        "Canvas: It's the HTML element where Three.js renders 3D graphics using WebGL.\nScene: Think of it as a container holding all objects, lights, and cameras in a Three.js project.\nObject: Anything rendered in the 3D scene, like shapes, models, lights, or cameras. They define the visual elements of the scene.\n",
    },

    // Add more data as needed
  ];

  const columns = [
    { header: "Title", name: "title" },
    {
      header: "Description",
      name: "description",
      whiteSpace: "pre-wrap",
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
    autoHeight: true, // 자동 높이 설정
    bodyHeight: "fitToParent", // 부모 요소의 높이에 맞게 그리드의 높이 조정
  });
});
