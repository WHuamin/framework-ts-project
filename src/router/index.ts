import { createRouter, createWebHistory } from "vue-router";
// 获取文件名
function getFileName(url: string): string {
  const comp = url.match(/(.*?)([^/]+?)\/?(\.vue)?(\?.*|#.*|$)/);
  // console.log(typeof url, comp)
  // return {
  // 	name: comp[2],
  // 	url: comp[1] + comp[2] + (comp[3] === undefined ? '/index.vue' : comp[3]) + comp[4]
  // };
  return comp?.[2].toLocaleLowerCase() || "";
}

const getRoutes = () => {
  const files = import.meta.glob("../views/**/*.vue"); //eg: ../views/Home.vue () => import("/src/views/Home.vue")
  return Object.entries(files)
    .filter((item) => !item[0].includes("components/"))
    .map(([file, module]) => ({
      path: "/" + getFileName(file),
      component: module
    }));
};

export default createRouter({
  history: createWebHistory(),
  routes: getRoutes()
  // [
  //   {
  //     path: "/home",
  //     component: () => import("../views/home.vue")
  //   }
  // ]
});
