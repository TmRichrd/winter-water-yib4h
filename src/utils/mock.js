import Mock from "mockjs";
Mock.mock("/login", {
  code: 200,
  data: {
    name: "123"
  },
  msg: "获取成功"
});
